"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0F172A 0%, #1E3A5F 50%, #1E293B 100%)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)",
    }}>
      {/* Topbar */}
      <header style={{
        borderBottom: "1px solid #334155",
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/quickInfra-logo.png" alt="QuickInfra" width={34} height={34}
            style={{ borderRadius: 8, objectFit: "contain" }} />
          <Image src="/quickinfra.png" alt="QuickInfra" width={110} height={26}
            style={{ objectFit: "contain" }} />
          <span style={{
            color: "#64748B", fontSize: 13, fontWeight: 500,
            borderLeft: "1px solid #334155", paddingLeft: 10, marginLeft: 2,
          }}>
            Docs
          </span>
        </Link>
      </header>

      {/* Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 500, height: 300, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 480 }}>
          {/* 404 number */}
          <div style={{
            fontSize: "clamp(80px, 15vw, 140px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-6px",
            marginBottom: 8,
            background: "linear-gradient(90deg, #60A5FA, #818CF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            404
          </div>

          <h1 style={{
            color: "#F1F5F9",
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: 700,
            marginBottom: 14,
            letterSpacing: "-0.5px",
          }}>
            Page not found
          </h1>

          <p style={{
            color: "#64748B",
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 36,
          }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Head back to the docs home and find what you need.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 9,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              <FiHome size={15} />
              Back to Docs Home
            </Link>

            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#94A3B8",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "11px 22px",
                borderRadius: 9,
                border: "1px solid #334155",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#475569";
                e.currentTarget.style.color = "#F1F5F9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#334155";
                e.currentTarget.style.color = "#94A3B8";
              }}
            >
              <FiSearch size={15} />
              Search Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}