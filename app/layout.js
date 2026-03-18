import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import JsonLd from "./JsonLd";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "QuickInfra Docs — Cloud Infrastructure Automation Documentation",
    template: "%s | QuickInfra Docs",
  },
  description:
    "Official QuickInfra documentation. Learn how to provision cloud infrastructure, manage VMs, deploy applications, automate CI/CD pipelines, and manage multi-cloud environments using QuickInfra.",
  keywords: [
    "QuickInfra",
    "QuickInfra docs",
    "QuickInfra documentation",
    "QuickInfra guide",
    "QuickInfra help",
    "QuickInfra cloud",
    "QuickInfra platform",
    "QuickInfra login",
    "QuickInfra console",
    "QuickInfra DevOps",
    "QuickInfra infrastructure",
    "QuickInfra tutorials",
    "cloud infrastructure automation",
    "infrastructure as code",
    "Terraform automation",
    "Terraform documentation",
    "OpenTofu",
    "Ansible deployment",
    "Ansible automation",
    "multi-cloud management",
    "AWS infrastructure",
    "AWS automation",
    "Azure infrastructure",
    "GCP infrastructure",
    "OCI infrastructure",
    "VM management",
    "virtual machine automation",
    "CI/CD pipeline",
    "CI/CD automation",
    "DevOps automation",
    "DevOps platform",
    "InfraOps",
    "cloud provisioning",
    "infrastructure documentation",
    "cloud accounts management",
    "VM instances",
    "VM import export",
    "disk volumes",
    "CloudFormation stacks",
    "deployment automation",
    "Kubernetes management",
    "cloud networking",
    "VPC management",
    "subnet management",
    "custom scripts automation",
    "infrastructure templates",
    "deployment templates",
    "cloud security groups",
    "EC2 management",
    "cloud cost optimization",
    "multi-tenant cloud platform",
  ],
  authors: [{ name: "QuickInfra", url: "https://quickinfracloud.com" }],
  creator: "QuickInfra Cloud Solutions Pvt. Ltd.",
  publisher: "QuickInfra Cloud Solutions Pvt. Ltd.",
  metadataBase: new URL("https://docs.quickinfra.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.quickinfra.cloud",
    siteName: "QuickInfra Docs",
    title: "QuickInfra Docs — Cloud Infrastructure Automation Documentation",
    description:
      "Step-by-step guides for every QuickInfra feature — from cloud accounts and VM management to CI/CD pipelines and multi-cloud infrastructure provisioning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickInfra Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickInfra Docs — Cloud Infrastructure Automation Documentation",
    description:
      "Step-by-step guides for every QuickInfra feature — from cloud accounts and VM management to CI/CD pipelines and multi-cloud infrastructure provisioning.",
    images: ["/og-image.png"],
    creator: "@quickinfra",
    site: "@quickinfra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/quickInfra-logo.png",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://docs.quickinfra.cloud" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="application-name" content="QuickInfra Docs" />
        <meta name="apple-mobile-web-app-title" content="QuickInfra Docs" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <JsonLd />
      </head>
      <body className="antialiased bg-[#F8F9FA] text-[#111827]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}