"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";import {
  FiSearch, FiMenu, FiX, FiChevronRight, FiChevronDown,
  FiChevronLeft, FiArrowLeft, FiArrowRight,
} from "react-icons/fi";
import { navigation, allPages } from "@/lib/navigation";

const sectionColors = {
  projects:  "#2563EB",
  manage:    "#4F46E5",
  templates: "#0891B2",
  users:     "#7C3AED",
  "for-you": "#059669",
};

function Sidebar({ pathname, onClose }) {
  const [openSections, setOpenSections] = useState(() => {
    const initial = {};
    navigation.forEach((s) => { initial[s.id] = true; });
    return initial;
  });

  function toggle(id) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <aside style={{
      width: 260,
      minWidth: 260,
      background: "#FFFFFF",
      borderRight: "1px solid #E5E7EB",
      height: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 24,
    }}>
      {/* Back to home */}
      <div style={{ padding: "12px 14px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "#6B7280", textDecoration: "none", fontSize: 12,
            fontWeight: 500, padding: "5px 8px", borderRadius: 6,
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#374151"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6B7280"; }}
        >
          <FiArrowLeft size={12} /> Docs Home
        </Link>
        {onClose && (
          <button onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280", padding: 4 }}>
            <FiX size={18} />
          </button>
        )}
      </div>

      {/* Nav sections */}
      <nav style={{ flex: 1, padding: "6px 12px 24px" }}>
        {navigation.map((section) => {
          const Icon = section.icon;
          const accent = sectionColors[section.id] || "#2563EB";
          const isOpen = openSections[section.id];
          const isActiveSection = section.items.some((item) => pathname === item.href);

          return (
            <div key={section.id} style={{ marginBottom: 4 }}>
              {/* Section header */}
              <button
                onClick={() => toggle(section.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "none",
                  background: isActiveSection ? `${accent}10` : "transparent",
                  cursor: "pointer",
                  transition: "background 0.15s",
                  marginBottom: 2,
                }}
                onMouseEnter={(e) => { if (!isActiveSection) e.currentTarget.style.background = "#F8FAFC"; }}
                onMouseLeave={(e) => { if (!isActiveSection) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{
                  width: 26, height: 26, borderRadius: 6,
                  background: isActiveSection ? accent : "#F1F5F9",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={13} color={isActiveSection ? "#fff" : "#6B7280"} />
                </div>
                <span style={{
                  flex: 1, textAlign: "left", fontSize: 13, fontWeight: 600,
                  color: isActiveSection ? accent : "#374151",
                }}>
                  {section.name}
                </span>
                {isOpen
                  ? <FiChevronDown size={13} color="#9CA3AF" />
                  : <FiChevronRight size={13} color="#9CA3AF" />
                }
              </button>

              {/* Section items */}
              {isOpen && (
                <div style={{ marginLeft: 12, paddingLeft: 22, borderLeft: "1px solid #E5E7EB" }}>
                  {section.items.map((item) => {
                    const ItemIcon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "7px 10px",
                          borderRadius: 7,
                          textDecoration: "none",
                          marginBottom: 1,
                          background: isActive ? `${accent}12` : "transparent",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "#F8FAFC"; }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = isActive ? `${accent}12` : "transparent"; }}
                      >
                        <ItemIcon size={13} color={isActive ? accent : "#9CA3AF"} style={{ flexShrink: 0 }} />
                        <span style={{
                          fontSize: 13,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? accent : "#4B5563",
                        }}>
                          {item.text}
                        </span>
                        {isActive && (
                          <div style={{
                            marginLeft: "auto", width: 5, height: 5,
                            borderRadius: "50%", background: accent, flexShrink: 0,
                          }} />
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); setShowResults(false); return; }
    const q = query.toLowerCase();
    const filtered = allPages.filter(
      (p) => p.text.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 6));
    setShowResults(true);
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setShowResults(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: 280 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#F8FAFC", border: "1px solid #E2E8F0",
        borderRadius: 8, padding: "0 12px",
      }}>
        <FiSearch size={14} color="#9CA3AF" />
        <input
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          style={{
            flex: 1, border: "none", outline: "none",
            fontSize: 13, padding: "9px 0",
            background: "transparent", color: "#111827",
          }}
        />
        {query && (
          <button onClick={() => { setQuery(""); setShowResults(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 0 }}>
            <FiX size={13} />
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
          background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 10,
          boxShadow: "0 12px 36px rgba(0,0,0,0.12)", overflow: "hidden", zIndex: 200,
        }}>
          {results.map((page, i) => (
            <Link
              key={page.id}
              href={page.href}
              onClick={() => { setShowResults(false); setQuery(""); }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", textDecoration: "none",
                borderBottom: i < results.length - 1 ? "1px solid #F1F5F9" : "none",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#F8FAFC"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <page.icon size={13} color={sectionColors[page.sectionId] || "#2563EB"} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{page.text}</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>{page.section}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Breadcrumbs({ pathname }) {
  const currentPage = allPages.find((p) => p.href === pathname);
  if (!currentPage) return null;

  const section = navigation.find((s) => s.id === currentPage.sectionId);

  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
      <Link href="/" style={{ color: "#6B7280", textDecoration: "none", fontSize: 13,
        transition: "color 0.15s" }}
        onMouseEnter={(e) => e.currentTarget.style.color = "#2563EB"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#6B7280"}
      >
        Docs
      </Link>
      <FiChevronRight size={12} color="#9CA3AF" />
      <span style={{ color: "#6B7280", fontSize: 13 }}>{section?.name}</span>
      <FiChevronRight size={12} color="#9CA3AF" />
      <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>{currentPage.text}</span>
    </nav>
  );
}

function PrevNext({ pathname }) {
  const currentIndex = allPages.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      marginTop: 56,
      paddingTop: 24,
      borderTop: "1px solid #E5E7EB",
      flexWrap: "wrap",
    }}>
      {prev ? (
        <Link href={prev.href} style={{
          display: "flex", alignItems: "center", gap: 10,
          textDecoration: "none", padding: "14px 18px",
          border: "1px solid #E5E7EB", borderRadius: 10,
          background: "#FFFFFF", transition: "all 0.15s", flex: "1 1 200px",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#BFDBFE"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(37,99,235,0.08)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "none"; }}
        >
          <FiArrowLeft size={16} color="#6B7280" />
          <div>
            <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>Previous</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{prev.text}</div>
          </div>
        </Link>
      ) : <div style={{ flex: "1 1 200px" }} />}

      {next ? (
        <Link href={next.href} style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10,
          textDecoration: "none", padding: "14px 18px",
          border: "1px solid #E5E7EB", borderRadius: 10,
          background: "#FFFFFF", transition: "all 0.15s", flex: "1 1 200px",
          textAlign: "right",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#BFDBFE"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(37,99,235,0.08)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "none"; }}
        >
          <div>
            <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>Next</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{next.text}</div>
          </div>
          <FiArrowRight size={16} color="#6B7280" />
        </Link>
      ) : <div style={{ flex: "1 1 200px" }} />}
    </div>
  );
}

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div style={{ minHeight: "100vh", height: "100vh", background: "#F8F9FA", fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* ── Top bar ── */}
      <header style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky", top: 0, zIndex: 50,
        height: 60,
        display: "flex", alignItems: "center",
        padding: "0 20px",
        gap: 16,
      }}>
        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="docs-hamburger"
          style={{ background: "none", border: "none", color: "#6B7280", cursor: "pointer", flexShrink: 0 }}
        >
          <FiMenu size={20} />
        </button>

        {/* Logo — desktop only */}
        <Link href="/" className="docs-logo-desktop"
          style={{ display: "flex", alignItems: "center", gap: 4, textDecoration: "none", flexShrink: 0 }}>
          <Image src="/quickInfra-logo.png" alt="QuickInfra" width={45} height={45}
            style={{ borderRadius: 6, objectFit: "contain" }} />
          <span style={{ color: "#9CA3AF", fontSize: 12, borderLeft: "1px solid #E5E7EB", paddingLeft: 8, marginLeft: 2 }}>
            Docs
          </span>
        </Link>

        <div style={{ flex: 1 }} />

        {/* Search */}
        <div className="docs-search-desktop">
          <SearchBar />
        </div>

        {/* Open Console */}
        <a
          href="https://console.quickinfra.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
            color: "#fff", textDecoration: "none",
            fontSize: 12, fontWeight: 600,
            padding: "7px 14px", borderRadius: 7,
            whiteSpace: "nowrap", flexShrink: 0,
          }}
        >
          Open Console
        </a>
      </header>

      {/* ── Body ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 60px)" }}>

        {/* Desktop Sidebar */}
        <div className="docs-sidebar-desktop" style={{
          position: "sticky",
          top: 60,
          height: "calc(100vh - 60px)",
          flexShrink: 0,
          overflowY: "auto",
        }}>
          <Sidebar pathname={pathname} />
        </div>

        {/* Mobile Sidebar Drawer */}
        {sidebarOpen && (
          <>
            <div
              onClick={() => setSidebarOpen(false)}
              style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
                zIndex: 100, backdropFilter: "blur(2px)",
              }}
            />
            <div style={{
              position: "fixed", top: 0, left: 0, bottom: 0,
              width: 280, zIndex: 101,
              boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
            }}>
              <Sidebar pathname={pathname} onClose={() => setSidebarOpen(false)} />
            </div>
          </>
        )}

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 32px 64px" }}>
            <Breadcrumbs pathname={pathname} />
            {children}
            <PrevNext pathname={pathname} />
          </div>
        </main>
      </div>

      <style>{`
        .docs-hamburger { display: none !important; }
        .docs-sidebar-desktop { display: block; }
        .docs-logo-desktop { display: flex !important; }
        .docs-search-desktop { display: block; }

        @media (max-width: 768px) {
          .docs-hamburger { display: flex !important; }
          .docs-sidebar-desktop { display: none !important; }
          .docs-search-desktop { display: none !important; }
        }
        @media (max-width: 480px) {
          .docs-logo-desktop { display: none !important; }
        }
      `}</style>
    </div>
  );
}