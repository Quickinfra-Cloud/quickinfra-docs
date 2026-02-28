import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiTool } from "react-icons/fi";

export const metadata = {
  title: "Script Templates — QuickInfra Docs",
  description: "Browse QuickInfra's library of production-ready script templates and copy them into your Custom Scripts library.",
};

export default function ScriptTemplatesPage() {
  return (
    <DocPage
      sectionId="templates"
      icon={FiTool}
      title="Script Templates"
      description="Script Templates are production-ready automation scripts written and maintained by QuickInfra. Browse the library across Linux Shell, Ansible, CloudFormation, PowerShell, and Terraform, find a script that fits your need, and copy it into your Custom Scripts library — ready to use in deployments immediately."
    >

      <SectionHeading>What are Script Templates?</SectionHeading>
      <p>
        Script Templates are the same as Custom Scripts in every technical sense — they are
        shell scripts, Ansible playbooks, CloudFormation templates, PowerShell scripts, and
        Terraform configurations that can be executed on your servers through Deployment Projects
        or CloudFormation Stacks. The difference is that these are authored and maintained by
        QuickInfra and shared across all users as a library of reusable, tested scripts.
      </p>
      <p style={{ marginTop: 14 }}>
        Rather than writing a script from scratch — or using the AI Generator when you are
        unsure of the exact syntax — browse the template library first. If a script already
        exists for what you need, copy it into your Custom Scripts library with one click.
        From there you can use it as-is or edit it to match your specific requirements.
      </p>

      <SectionHeading>How to Use a Script Template</SectionHeading>
      <p>
        Navigate to <strong>Templates → Custom Scripts</strong> and browse the available scripts.
        Templates are categorised by script type — Linux Shell, Ansible, CloudFormation,
        PowerShell, and Terraform. Find a script that matches your use case and click
        <strong> Copy to My Scripts</strong>. The script is added to your Custom Scripts library
        where you can review it, modify it if needed, and reference it from any Deployment Project
        or CloudFormation Stack.
      </p>

      <Callout type="tip">
        Not finding a script template that fits your need? Use the <strong>AI Generator</strong>
        in Custom Scripts to describe what you want and have it written for you automatically.
        Or request a custom template from the QuickInfra team via <strong>For You → Free Infra Template</strong>.
      </Callout>

      <Callout type="info">
        Script Templates cover a wide range of use cases — server configuration, software
        installation, network setup, database administration, application deployment, and
        cloud resource provisioning. Browse the full library before writing anything from scratch.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Templates are read-only — copy a template into your Custom Scripts library first, then edit it there if needed.</li>
        <li>Copied scripts are fully independent — updates to the original template do not affect your copy.</li>
        <li>All script templates are tested by QuickInfra before being published — they are reliable starting points for common automation tasks.</li>
        <li>Scripts are available across all supported types: Linux Shell, Ansible, CloudFormation, PowerShell, and Terraform.</li>
        <li>If no template fits your use case, request a free custom one via the <strong>For You</strong> section.</li>
      </ul>

    </DocPage>
  );
}