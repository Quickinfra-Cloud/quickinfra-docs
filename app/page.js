"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiSearch, FiArrowRight, FiChevronRight, FiBookOpen,
  FiMenu, FiX, FiMapPin, FiMail, FiPhone,
} from "react-icons/fi";
import {
  FaLinkedin, FaTwitter, FaYoutube,
} from "react-icons/fa";
import { navigation, allPages } from "@/lib/navigation";

const sectionColors = {
  projects:  { bg: "#EFF6FF", border: "#BFDBFE", accent: "#2563EB", icon: "#1D4ED8" },
  manage:    { bg: "#F5F3FF", border: "#DDD6FE", accent: "#4F46E5", icon: "#4338CA" },
  templates: { bg: "#ECFEFF", border: "#A5F3FC", accent: "#0891B2", icon: "#0E7490" },
  users:     { bg: "#F5F3FF", border: "#E9D5FF", accent: "#7C3AED", icon: "#6D28D9" },
  "for-you": { bg: "#ECFDF5", border: "#A7F3D0", accent: "#059669", icon: "#047857" },
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allPages.filter(
      (p) =>
        p.text.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.section.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
    setShowResults(true);
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-sans)", minHeight: "100vh", background: "var(--bg-page)" }}>

      {/* ── Topbar ── */}
      <header style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
            <Image
              src="/quickInfra-logo.png"
              alt="QuickInfra Icon"
              width={50}
              height={50}
              style={{ borderRadius: 8, objectFit: "contain" }}
            />
            <span style={{
              color: "#9CA3AF",
              fontSize: 13,
              fontWeight: 500,
              borderLeft: "1px solid #E5E7EB",
              paddingLeft: 10,
              marginLeft: 2,
            }}>
              Docs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="nav-desktop">
            {navigation.map((section) => (
              <Link
                key={section.id}
                href={section.items[0].href}
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "6px 12px",
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#111827";
                  e.currentTarget.style.background = "#F1F5F9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {section.name}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="https://console.quickinfra.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-desktop"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 7,
                whiteSpace: "nowrap",
              }}
            >
              Open Console
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-mobile-menu"
              style={{ background: "none", border: "none", color: "#6B7280", cursor: "pointer" }}
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB", padding: "12px 24px 16px" }}>
            {navigation.map((section) => (
              <Link
                key={section.id}
                href={section.items[0].href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "10px 0",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                {section.name}
              </Link>
            ))}
            <a
              href="https://console.quickinfra.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: 12,
                background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 16px",
                borderRadius: 7,
                textAlign: "center",
              }}
            >
              Open Console
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section style={{
        background: "#FFFFFF",
        padding: "80px 24px 88px",
        textAlign: "center",
        position: "relative",
        borderBottom: "1px solid #E5E7EB",
        backgroundImage: "linear-gradient(#E8F0FE 1px, transparent 1px), linear-gradient(to right, #E8F0FE 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }}>
        {/* Fade mask over dot grid — top, bottom, sides */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.95) 100%)",
        }} />
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#EFF6FF", border: "1px solid #BFDBFE",
            borderRadius: 999, padding: "5px 14px", marginBottom: 28,
          }}>
            <FiBookOpen size={13} color="#2563EB" />
            <span style={{ color: "#2563EB", fontSize: 13, fontWeight: 500 }}>Documentation</span>
          </div>

          <h1 style={{
            color: "#0F172A",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-1.5px",
            marginBottom: 18,
          }}>
            Welcome to{" "}
            <span style={{
              background: "linear-gradient(90deg, #2563EB, #4F46E5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              QuickInfra
            </span>{" "}Documentation
          </h1>

          <p style={{
            color: "#64748B", fontSize: 18, lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto 44px",
          }}>
            Step-by-step guides for every feature — from cloud accounts to CI/CD pipelines.
            Get up and running in minutes.
          </p>

          {/* Search */}
          <div ref={searchRef} style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
            <div style={{
              display: "flex", alignItems: "center",
              background: "#FFFFFF", border: "2px solid #E2E8F0",
              borderRadius: 12, padding: "0 16px", gap: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.20)",
            }}>
              <FiSearch size={18} color="#6B7280" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search docs... (e.g. VM instances, CI/CD)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length >= 2 && setShowResults(true)}
                style={{
                  flex: 1, border: "none", outline: "none",
                  fontSize: 15, padding: "14px 0",
                  background: "transparent", color: "#111827",
                }}
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); setShowResults(false); }}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 0 }}
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {showResults && results.length > 0 && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
                background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 12,
                boxShadow: "0 16px 48px rgba(0,0,0,0.16)", overflowY: "auto", maxHeight: 400, zIndex: 100,
              }}>
                {results.map((page, i) => (
                  <Link
                    key={page.id}
                    href={page.href}
                    onClick={() => { setShowResults(false); setQuery(""); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "11px 16px", textDecoration: "none",
                      borderBottom: i < results.length - 1 ? "1px solid #F1F5F9" : "none",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#F8FAFC"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: 7,
                      background: sectionColors[page.sectionId]?.bg || "#EFF6FF",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <page.icon size={15} color={sectionColors[page.sectionId]?.accent || "#2563EB"} />
                    </div>
                    <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{page.text}</div>
                      <div style={{ fontSize: 12, color: "#6B7280", marginTop: 1 }}>{page.section} · {page.shortDesc}</div>
                    </div>
                    <FiChevronRight size={14} color="#9CA3AF" />
                  </Link>
                ))}
              </div>
            )}

            {showResults && results.length === 0 && query.length >= 2 && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
                background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 12,
                padding: "20px 16px", textAlign: "center", zIndex: 100,
              }}>
                <span style={{ color: "#6B7280", fontSize: 14 }}>No results for &ldquo;{query}&rdquo;</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      {/* ── Sections Grid ── */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6, letterSpacing: "-0.4px" }}>
          Browse by section
        </h2>
        <p style={{ color: "#6B7280", fontSize: 15, marginBottom: 36 }}>
          Select a section to explore all features and how-to guides.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {navigation.map((section) => {
            const colors = sectionColors[section.id] || sectionColors.projects;
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: "24px",
                  transition: "all 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.10)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: colors.bg, border: `1px solid ${colors.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={colors.icon} />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>{section.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{section.items.length} guides</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
                  {section.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "8px 10px", borderRadius: 8,
                          textDecoration: "none", transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = colors.bg}
                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                      >
                        <ItemIcon size={14} color={colors.accent} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: 13.5, fontWeight: 500, color: "#374151", flex: 1 }}>{item.text}</span>
                        <FiChevronRight size={12} color="#9CA3AF" />
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href={section.items[0].href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 13, fontWeight: 600, color: colors.accent, textDecoration: "none",
                  }}
                >
                  Get started <FiArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#F8FAFC", borderTop: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 36px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
                <Image src="/quickInfra-logo.png" alt="QuickInfra" width={50} height={50}
                  style={{ borderRadius: 8, objectFit: "contain" }} />
              </div>
              <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.7, marginBottom: 20, maxWidth: 240 }}>
                DevOps &amp; InfraOps Automation Platform.<br />
                Turn Infrastructure Into Code and Code Into Impact.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/quickinfra-cloud", label: "LinkedIn" },
                  { icon: FaTwitter,  href: "https://twitter.com/quickinfra",                label: "Twitter"  },
                  { icon: FaYoutube,  href: "https://www.youtube.com/@quickinfraplatform",   label: "YouTube"  },
                ].map(({ icon: SIcon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: "#FFFFFF", border: "1px solid #E5E7EB",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#6B7280", textDecoration: "none", transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#2563EB";
                      e.currentTarget.style.borderColor = "#2563EB";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                  >
                    <SIcon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ color: "#111827", fontWeight: 600, fontSize: 12, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.7px" }}>
                Contact Us
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <FiMapPin size={14} color="#2563EB" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "#64748B", fontSize: 13, lineHeight: 1.6 }}>
                    Clover Hills Plaza, Office No. 523, 5th Floor,<br />
                    NIBM-Undri Road, Kondhwa, Pune - 411048
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <FiMail size={14} color="#2563EB" style={{ flexShrink: 0 }} />
                  <a href="mailto:support@quickinfracloud.com"
                    style={{ color: "#64748B", textDecoration: "none", fontSize: 13, transition: "color 0.15s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#60A5FA"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"}
                  >
                    support@quickinfracloud.com
                  </a>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <FiPhone size={14} color="#2563EB" style={{ flexShrink: 0 }} />
                  <a href="tel:+912044473448"
                    style={{ color: "#64748B", textDecoration: "none", fontSize: 13, transition: "color 0.15s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#60A5FA"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"}
                  >
                    +91 20 4447 3448
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #E5E7EB", padding: "16px 24px" }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 8,
          }}>
            <span style={{ color: "#9CA3AF", fontSize: 13 }}>
              © 2026 QuickInfra Cloud Solutions Pvt. Ltd. All rights reserved.
            </span>
            <a href="https://quickinfracloud.com/privacy-policy/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#9CA3AF", textDecoration: "none", fontSize: 13, transition: "color 0.15s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2563EB"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .nav-desktop { display: flex !important; }
        .btn-mobile-menu { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .btn-mobile-menu { display: flex !important; }
        }
      `}</style>
    </div>
  );
}