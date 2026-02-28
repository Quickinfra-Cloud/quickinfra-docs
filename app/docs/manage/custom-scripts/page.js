import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiTool } from "react-icons/fi";

export const metadata = {
  title: "Custom Scripts — QuickInfra Docs",
  description: "Create, manage, and execute custom automation scripts on your servers using QuickInfra.",
};

export default function CustomScriptsPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiTool}
      title="Custom Scripts"
      description="Custom Scripts give you a centralised library of shell scripts that can be executed directly on your servers through the Deployment section. Write them manually, or let QuickInfra's built-in AI generate them for you in seconds."
    >

      <SectionHeading>What are Custom Scripts?</SectionHeading>
      <p>
        Custom Scripts are reusable automation scripts stored inside QuickInfra and available for
        execution across your infrastructure. Think of them as your team's shared playbook — server
        configuration routines, software installation sequences, cleanup jobs, health checks, and
        anything else you would otherwise run manually over SSH.
      </p>
      <p style={{ marginTop: 14 }}>
        QuickInfra supports a wide range of script types to cover every layer of your infrastructure
        automation stack — <strong>Linux Shell</strong> for server configuration,{" "}
        <strong>Ansible</strong> for configuration management and orchestration,{" "}
        <strong>CloudFormation</strong> for AWS infrastructure as code,{" "}
        <strong>PowerShell</strong> for Windows server automation, and{" "}
        <strong>custom Terraform scripts</strong> for provisioning cloud resources across any provider.
      </p>
      <p style={{ marginTop: 14 }}>
        Once a script is saved, it becomes available in the Deployment section where it can be attached
        to a deployment project and executed on target servers automatically. This eliminates the need
        to maintain separate script repositories or manually copy files to servers.
      </p>

      <Callout type="info">
        Scripts created here are reusable across multiple deployment projects. Update a script once
        and every project referencing it picks up the change automatically.
      </Callout>

      <Screenshot
        src="/custom-scripts-create.png"
        alt="Custom Scripts creation form with AI Generator in QuickInfra"
        caption="The Custom Scripts form — write scripts manually or use the AI Generator to create them from a plain-English prompt."
      />

      <SectionHeading>Two Ways to Create a Script</SectionHeading>
      <p>
        QuickInfra gives you two modes when creating or editing a script — <strong>Manual Entry</strong> and
        the <strong>AI Generator</strong>. Both produce the same output: a saved, executable script in your library.
      </p>

      <SectionHeading>Manual Entry</SectionHeading>

      <Step number={1} title="Open the Scripts list" accent="#4F46E5">
        Navigate to <strong>Manage → Custom Scripts</strong>. You will see all existing scripts with
        their name, type, status, and tags. Click <strong>New</strong> to create a fresh script.
      </Step>

      <Step number={2} title="Fill in Basic Information" accent="#4F46E5">
        Enter a <strong>Script Name</strong> that clearly identifies what the script does.
        Select the <strong>Script Type</strong> — choose from <strong>Linux Shell</strong>,{" "}
        <strong>Ansible</strong>, <strong>CloudFormation</strong>, <strong>PowerShell</strong>,
        or <strong>Terraform</strong> depending on your use case.
        Set the <strong>Status</strong> to Active so it is available in deployments.
        Add a brief <strong>Description</strong> and optional <strong>Script Tags</strong>
        such as <em>aws</em>, <em>ubuntu</em>, or <em>nginx</em> for easier filtering later.
      </Step>

      <Step number={3} title="Write your script" accent="#4F46E5">
        In the <strong>Generated Script Output</strong> editor, type or paste your shell script directly.
        The editor supports full script syntax. You can add script parameters in the
        <strong> Script Parameters</strong> field if your script accepts runtime arguments.
      </Step>

      <Step number={4} title="Save the script" accent="#4F46E5">
        Click <strong>Save</strong>. The script is immediately available in your library and
        can be referenced from any deployment project.
      </Step>

      <SectionHeading>AI Generator</SectionHeading>
      <p>
        The AI Generator is a built-in assistant powered by Claude that writes shell scripts for you
        based on a plain-English description. It is particularly useful when you need a script quickly
        or are unsure of the exact syntax for a complex operation.
      </p>

      <Step number={1} title="Switch to AI Generator mode" accent="#4F46E5">
        On the script form, click the <strong>AI Generator</strong> tab at the top. You will see the
        AI Controls panel appear on the right side of the screen.
      </Step>

      <Step number={2} title="Select an AI model" accent="#4F46E5">
        Choose your preferred AI model from the dropdown. <strong>Claude 3.7 Sonnet</strong> is selected
        by default and recommended for the most accurate and production-ready script output.
      </Step>

      <Step number={3} title="Describe what you need" accent="#4F46E5">
        In the <strong>AI Prompt</strong> field, describe the script in plain English. For example:
        <em> "Install Nginx on Ubuntu 22.04, enable it on startup, and open port 80 on the firewall."</em>
        Be as specific as possible — the more context you give, the better the output.
      </Step>

      <Step number={4} title="Execute AI and review" accent="#4F46E5">
        Click <strong>Execute AI</strong>. With <strong>Enable Streaming Response</strong> turned on,
        you will see the script appear in the output editor in real time. Review the generated code
        carefully before saving — edit any section that needs adjustment.
      </Step>

      <Callout type="tip">
        You can use the AI Generator to edit an existing script too — paste the current script into
        the prompt context and describe the changes you need. The AI will rewrite it accordingly.
      </Callout>

      <Callout type="warning">
        Always review AI-generated scripts before executing them on production servers.
        The AI Generator is a productivity tool — final responsibility for script safety
        rests with you.
      </Callout>

      <SectionHeading>Managing Existing Scripts</SectionHeading>
      <p>
        From the Custom Scripts list you can <strong>view</strong>, <strong>edit</strong>, and
        <strong> configure</strong> any saved script. Use the search and tag filters to find scripts
        quickly across a large library. Inactive scripts remain in the list but are not available
        for selection in deployment projects.
      </p>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Scripts are executed on target servers via the <strong>Deployment Projects</strong> section — they cannot be run directly from this screen.</li>
        <li>Use <strong>Script Tags</strong> to categorise scripts by technology or purpose for faster discovery.</li>
        <li>The AI Generator runs on a pre-configured AI account provided by QuickInfra — no setup required. Support for bringing your own AI model is coming in a future update.</li>
        <li>Script Parameters allow you to pass dynamic values at execution time without editing the script itself.</li>
        <li>Deleting a script that is referenced by an active deployment project will cause that project to fail — deactivate instead of delete.</li>
      </ul>

    </DocPage>
  );
}