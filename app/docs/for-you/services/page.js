import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiTool } from "react-icons/fi";

export const metadata = {
  title: "Services — QuickInfra Docs",
  description: "Professional managed services from QuickInfra — CI/CD setup, Kubernetes, GitOps, advanced DevOps, and more.",
};

export default function ServicesPage() {
  return (
    <DocPage
      sectionId="for-you"
      icon={FiTool}
      title="Services"
      description="QuickInfra offers professional managed services for teams that need expert hands-on support beyond the platform itself. From CI/CD pipeline setup to advanced Kubernetes and GitOps implementations — we handle the hard parts so your team can focus on building."
    >

      <SectionHeading>What are Services?</SectionHeading>
      <p>
        Some infrastructure challenges go beyond what a self-service platform can solve alone.
        The Services section is where you engage the QuickInfra team directly for professional
        services — hands-on work delivered by engineers who specialise in cloud infrastructure
        and DevOps practices.
      </p>
      <p style={{ marginTop: 14 }}>
        Whether you want a fully managed CI/CD pipeline built for your codebase, a production-grade
        Kubernetes cluster set up with autoscaling and monitoring, or a complete GitOps workflow
        implemented with ArgoCD — QuickInfra's services team covers it end to end.
      </p>

      <SectionHeading>What We Cover</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Managed CI/CD</strong> — Full setup and configuration of CI/CD pipelines for
          your applications. Includes source integration, build pipelines, automated testing
          stages, and deployment to your target environments.
        </li>
        <li>
          <strong>Kubernetes</strong> — Production-grade Kubernetes cluster provisioning and
          configuration. Includes networking, ingress, autoscaling, RBAC, and monitoring setup
          tailored to your workloads.
        </li>
        <li>
          <strong>GitOps with ArgoCD</strong> — Implementation of a complete GitOps workflow
          using ArgoCD. Your infrastructure and application state managed declaratively from
          Git, with automated sync and drift detection.
        </li>
        <li>
          <strong>Advanced DevOps</strong> — Custom DevOps architecture, infrastructure design,
          observability stack setup, secrets management, and any other advanced cloud engineering
          your team needs but does not have the bandwidth to build internally.
        </li>
      </ul>

      <Callout type="info">
        Services are delivered by the QuickInfra engineering team and scoped to your specific
        environment and requirements. Reach out through this section to discuss your needs and
        get a proposal.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Services are engagement-based — each service is scoped and agreed upon before work begins.</li>
        <li>All work delivered through QuickInfra Services is integrated directly into your QuickInfra account — as templates, projects, or configurations you can manage going forward.</li>
        <li>Contact the team through this section with a description of what you need and your current setup — the more detail you provide, the faster we can scope and begin.</li>
      </ul>

    </DocPage>
  );
}