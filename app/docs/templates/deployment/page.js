import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiUpload } from "react-icons/fi";

export const metadata = {
  title: "Deployment Templates — QuickInfra Docs",
  description: "Browse QuickInfra's library of production-ready deployment templates and copy them as projects.",
};

export default function DeploymentTemplatesPage() {
  return (
    <DocPage
      sectionId="templates"
      icon={FiUpload}
      title="Deployment Templates"
      description="Deployment Templates are production-ready Deployment Projects written and maintained by QuickInfra. Browse the library, find a template that matches your deployment pattern, and copy it as a project — ready to point at your servers and execute."
    >

      <SectionHeading>What are Deployment Templates?</SectionHeading>
      <p>
        Deployment Templates are fully configured Deployment Projects authored by QuickInfra and
        made available as reusable starting points. Each template covers a specific deployment
        pattern — deploying a Java application, running a database migration, executing a
        configuration update across a fleet of servers, and more.
      </p>
      <p style={{ marginTop: 14 }}>
        Copying a Deployment Template into your account gives you a ready-made project with
        the correct activity types, sequencing, and settings already in place. You provide
        your target servers and any environment-specific values, and the deployment is ready
        to execute — no building from scratch required.
      </p>

      <SectionHeading>How to Use a Template</SectionHeading>
      <p>
        Navigate to <strong>Templates → Deployment</strong> and browse the available templates.
        Each template describes the deployment pattern it implements and the activity types it
        uses. When you find one that fits your use case, click <strong>Copy as Project</strong>.
        A new Deployment Project is created in your account — configure the target hosts,
        adjust any activity-specific settings, and execute.
      </p>

      <Callout type="tip">
        Not finding a template that matches your deployment scenario? Head to
        <strong> For You → Free Infra Template</strong> and request a custom template from
        the QuickInfra team at no cost.
      </Callout>

      <Callout type="info">
        Deployment Templates cover both Linux and Windows targets, and include patterns for
        application deployment, database operations, script execution, and more. Browse the
        full library to find the closest match to your use case.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Templates are read-only — copy a template as a project first, then customise it in the project.</li>
        <li>Copying a template creates a fully independent project — future updates to the original template do not affect your copy.</li>
        <li>Templates are designed to work with infrastructure provisioned through QuickInfra Infrastructure Projects — target hosts are fetched directly from your provisioned instances.</li>
        <li>If no template fits your use case, request a free custom one via the <strong>For You</strong> section.</li>
      </ul>

    </DocPage>
  );
}