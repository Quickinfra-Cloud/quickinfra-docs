import Image from "next/image";
import { FiInfo, FiCheckCircle, FiAlertCircle, FiImage } from "react-icons/fi";

const sectionAccents = {
  projects:  { accent: "#2563EB", light: "#EFF6FF", border: "#BFDBFE" },
  manage:    { accent: "#4F46E5", light: "#F5F3FF", border: "#DDD6FE" },
  templates: { accent: "#0891B2", light: "#ECFEFF", border: "#A5F3FC" },
  users:     { accent: "#7C3AED", light: "#F5F3FF", border: "#E9D5FF" },
  "for-you": { accent: "#059669", light: "#ECFDF5", border: "#A7F3D0" },
};

/**
 * Screenshot — shows image if provided, else a styled placeholder
 */
function Screenshot({ src, alt, caption }) {
  return (
    <figure style={{ margin: "32px 0" }}>
      {src ? (
        <div style={{
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <Image
            src={src}
            alt={alt || "Screenshot"}
            width={1200}
            height={675}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      ) : (
        <div style={{
          background: "#F8FAFC",
          border: "2px dashed #CBD5E1",
          borderRadius: 12,
          padding: "48px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          minHeight: 200,
        }}>
          <FiImage size={32} color="#CBD5E1" />
          <span style={{ color: "#94A3B8", fontSize: 14, fontWeight: 500 }}>Screenshot coming soon</span>
        </div>
      )}
      {caption && (
        <figcaption style={{
          marginTop: 10,
          fontSize: 13,
          color: "#6B7280",
          textAlign: "center",
          fontStyle: "italic",
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Section heading used inside doc content
 */
function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: "#111827",
      marginTop: 40,
      marginBottom: 14,
      letterSpacing: "-0.3px",
      paddingBottom: 10,
      borderBottom: "1px solid #F1F5F9",
    }}>
      {children}
    </h2>
  );
}

/**
 * Numbered step used in "How to use" sections
 */
function Step({ number, title, children, accent = "#2563EB" }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
      <div style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: accent,
        color: "#fff",
        fontSize: 13,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
      }}>
        {number}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Callout box — info, tip, or warning
 */
function Callout({ type = "info", children }) {
  const styles = {
    info:    { bg: "#EFF6FF", border: "#BFDBFE", icon: FiInfo,         iconColor: "#2563EB", label: "Note"    },
    tip:     { bg: "#ECFDF5", border: "#A7F3D0", icon: FiCheckCircle,  iconColor: "#059669", label: "Tip"     },
    warning: { bg: "#FFFBEB", border: "#FDE68A", icon: FiAlertCircle,  iconColor: "#D97706", label: "Warning" },
  };
  const s = styles[type] || styles.info;
  const Icon = s.icon;

  return (
    <div style={{
      background: s.bg,
      border: `1px solid ${s.border}`,
      borderRadius: 10,
      padding: "14px 16px",
      display: "flex",
      gap: 12,
      margin: "20px 0",
    }}>
      <Icon size={16} color={s.iconColor} style={{ flexShrink: 0, marginTop: 2 }} />
      <div>
        <span style={{ fontSize: 13, fontWeight: 700, color: s.iconColor, marginRight: 6 }}>
          {s.label}:
        </span>
        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
          {children}
        </span>
      </div>
    </div>
  );
}

/**
 * Main DocPage wrapper — wraps title, badge, hero description, and content
 */
export default function DocPage({ sectionId, icon: Icon, title, description, children }) {
  const colors = sectionAccents[sectionId] || sectionAccents.projects;

  return (
    <article>
      {/* Page header */}
      <header style={{ marginBottom: 32 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: colors.light,
          border: `1px solid ${colors.border}`,
          borderRadius: 999,
          padding: "4px 12px",
          marginBottom: 16,
        }}>
          {Icon && <Icon size={12} color={colors.accent} />}
          <span style={{ fontSize: 12, fontWeight: 600, color: colors.accent, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {sectionId}
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(24px, 4vw, 34px)",
          fontWeight: 800,
          color: "#0F172A",
          letterSpacing: "-0.8px",
          lineHeight: 1.2,
          marginBottom: 14,
        }}>
          {title}
        </h1>

        <p style={{
          fontSize: 17,
          color: "#4B5563",
          lineHeight: 1.75,
          maxWidth: 680,
          borderLeft: `3px solid ${colors.accent}`,
          paddingLeft: 16,
        }}>
          {description}
        </p>
      </header>

      {/* Page content */}
      <div style={{ fontSize: 15, color: "#374151", lineHeight: 1.8 }}>
        {children}
      </div>
    </article>
  );
}

export { Screenshot, SectionHeading, Step, Callout };