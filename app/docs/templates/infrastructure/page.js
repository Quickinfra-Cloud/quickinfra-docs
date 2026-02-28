import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiServer } from "react-icons/fi";

export const metadata = {
  title: "Infrastructure Templates — QuickInfra Docs",
  description: "Browse QuickInfra's library of production-ready infrastructure templates and copy them as projects.",
};

export default function InfrastructureTemplatesPage() {
  return (
    <DocPage
      sectionId="templates"
      icon={FiServer}
      title="Infrastructure Templates"
      description="Infrastructure Templates are production-ready Infrastructure Projects written and maintained by QuickInfra. Browse the library, find a template that matches your use case, and copy it as a project to your account — ready to configure and deploy."
    >

      <SectionHeading>What are Infrastructure Templates?</SectionHeading>
      <p>
        Infrastructure Templates are the same as Infrastructure Projects in every technical sense —
        they are fully configured collections of Terraform service modules that provision real cloud
        infrastructure. The difference is that templates are authored by QuickInfra, tested against
        production environments, and made available to all users as a starting point.
      </p>
      <p style={{ marginTop: 14 }}>
        Rather than building an infrastructure project from scratch, you can browse the template
        library, find one that matches your architecture — a simple VPC, a multi-AZ EC2 setup,
        a blue-green deployment infrastructure, and more — and copy it directly as a project into
        your account. From there you configure it with your specific values and execute it against
        your cloud account.
      </p>

      <SectionHeading>How to Use a Template</SectionHeading>
      <p>
        Navigate to <strong>Templates → Infrastructure</strong> and browse the available templates.
        Each template shows its purpose, the services it includes, and the infrastructure pattern
        it implements. When you find one that fits your use case, click <strong>Copy as Project</strong>.
        A new Infrastructure Project is created in your account with all services pre-configured —
        review the settings, adjust any parameters specific to your environment, and execute.
      </p>

      <Callout type="tip">
        Not finding a template that fits your exact requirements? Head to the
        <strong> For You → Free Infra Template</strong> section and request a custom template from
        the QuickInfra team at no cost. Describe what you need and the team will build it for you.
      </Callout>

      <Callout type="info">
        Templates are maintained and updated by QuickInfra as cloud provider APIs and best practices
        evolve. When a template is updated, existing projects copied from it are not affected —
        your project remains exactly as you configured it.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Templates are read-only — you cannot modify them directly. Copy a template as a project first, then make any changes you need in the project.</li>
        <li>Copying a template creates a full independent project in your account — changes to the original template will not affect your copy.</li>
        <li>All templates follow AWS infrastructure best practices — multi-AZ placement, private subnets, security group least-privilege, and encrypted storage where applicable.</li>
        <li>If none of the available templates match your use case, request a free custom template via the <strong>For You</strong> section.</li>
      </ul>

    </DocPage>
  );
}