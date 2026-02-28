import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiUploadCloud } from "react-icons/fi";

export const metadata = {
  title: "Deployment Projects — QuickInfra Docs",
  description: "Deploy applications, scripts, and database operations to any server — Linux or Windows — via Ansible through QuickInfra Deployment Projects.",
};

export default function DeploymentProjectsPage() {
  return (
    <DocPage
      sectionId="projects"
      icon={FiUploadCloud}
      title="Deployment Projects"
      description="Deployment Projects let you deploy anything — applications, scripts, configuration files, database imports, and more — to any number of servers simultaneously. Connect directly or through a bastion host, target multiple servers in one run, and watch the Ansible execution stream live."
    >

      <SectionHeading>What are Deployment Projects?</SectionHeading>
      <p>
        A Deployment Project is a configured set of activities that Ansible executes on your target
        servers. Each activity defines what gets deployed — a Java application, a shell script, a
        configuration file, a database import, or any of the many supported activity types — and
        Ansible handles the actual connection and execution against your servers.
      </p>
      <p style={{ marginTop: 14 }}>
        Like Infrastructure Projects, Deployment Projects can be created from scratch, copied from
        an existing project, or built from a ready-made template. Once configured, a project can
        be executed against any server — switch the target hosts and run the same deployment across
        dev, staging, and production without duplicating your configuration.
      </p>

      <SectionHeading>Three Ways to Create a Project</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>From Scratch</strong> — Create a blank project and add activities one by one.
          Full control over every setting and activity sequence.
        </li>
        <li>
          <strong>Copy from an Existing Project</strong> — Clone any existing deployment project
          as a starting point. All activities and configurations are duplicated instantly — ideal
          for spinning up identical deployments for a new environment.
        </li>
        <li>
          <strong>From a Ready-Made Template</strong> — QuickInfra provides pre-configured deployment
          templates for common patterns. Select one and a fully configured project is created for you,
          ready to execute with minimal adjustments.
        </li>
      </ul>

      <SectionHeading>Connecting to Your Servers</SectionHeading>
      <p>
        Deployment Projects support two connection modes for reaching your target servers:
      </p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
        <li>
          <strong>Direct Connection</strong> — Connect directly to servers using their private IP.
          Used when QuickInfra and your servers are within the same network or VPC.
        </li>
        <li>
          <strong>Via Bastion Host</strong> — Connect through a jump server (bastion) using its
          public IP before reaching private servers. Select the bastion under
          <strong> Jump Server (Public IP)</strong> and target your private instances as usual.
          This is the standard pattern for production environments where servers have no public IP.
        </li>
      </ul>
      <p style={{ marginTop: 14 }}>
        You can target multiple servers in a single execution — select any number of
        <strong> Target Hosts</strong> and Ansible will run all activities across every selected
        server in parallel.
      </p>

      <Screenshot
        src="/deployment-project.png"
        alt="Deployment Project execution screen showing Ansible output with successful deployment"
        caption="A Deployment Project executing — target hosts selected, Ansible activities running, and live output streaming in the terminal panel showing a successful deployment."
      />

      <SectionHeading>Supported Activity Types</SectionHeading>
      <p>
        Each activity in a Deployment Project maps to a specific deployment operation. QuickInfra
        supports a comprehensive range of activity types across Linux, Windows, and database targets:
      </p>

      <p style={{ marginTop: 16, fontWeight: 600 }}>Linux</p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        <li><strong>Configuration File Copy</strong> — Copy config files to target servers.</li>
        <li><strong>Archive Copy</strong> — Deploy .zip, .tar, .tar.gz, or .tar.bz2 archives.</li>
        <li><strong>Custom Application</strong> — Deploy Java, .Net, or Python applications.</li>
        <li><strong>Linux Shell Script</strong> — Execute any shell script on target servers.</li>
        <li><strong>Linux Custom Install Script</strong> — Run custom installation scripts from your Custom Scripts library.</li>
        <li><strong>Ansible Playbook Script</strong> — Execute a full Ansible playbook for complex orchestration.</li>
      </ul>

      <p style={{ marginTop: 16, fontWeight: 600 }}>Windows</p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        <li><strong>Configuration File Copy</strong> — Copy config files to Windows servers.</li>
        <li><strong>Archive Copy</strong> — Deploy archives to Windows targets.</li>
        <li><strong>Custom Application</strong> — Deploy Java, .Net, or Python applications on Windows.</li>
        <li><strong>Windows PowerShell Script</strong> — Execute PowerShell scripts on Windows servers.</li>
        <li><strong>Windows Custom Install Script</strong> — Run custom install scripts from the library.</li>
        <li><strong>Windows Chocolatey Installer</strong> — Install packages via Chocolatey package manager.</li>
        <li><strong>Windows Installer</strong> — Run .msi or .exe installers on target Windows servers.</li>
        <li><strong>Windows IIS Website</strong> — Deploy and configure IIS web applications.</li>
      </ul>

      <p style={{ marginTop: 16, fontWeight: 600 }}>Database — Import</p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        <li><strong>MySQL, Postgres, Oracle, MS-SQL</strong> — Import data into self-hosted databases.</li>
        <li><strong>AWS RDS MySQL, Postgres, Oracle, MS-SQL</strong> — Import data directly into AWS RDS instances.</li>
      </ul>

      <p style={{ marginTop: 16, fontWeight: 600 }}>Database — Export</p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        <li><strong>MySQL, Postgres, Oracle, MS-SQL</strong> — Export data from self-hosted databases.</li>
        <li><strong>AWS RDS MySQL, Postgres, Oracle, MS-SQL</strong> — Export data from AWS RDS instances.</li>
      </ul>

      <Callout type="info">
        Activity types are available for both Linux and Windows targets. QuickInfra automatically
        generates the correct Ansible playbook and inventory based on the activity type and
        target server operating system.
      </Callout>

      <SectionHeading>How to Execute a Deployment</SectionHeading>

      <Step number={1} title="Open the Deployment Project" accent="#7C3AED">
        Navigate to <strong>Projects → Deployment</strong> and open the project you want to run.
        The project details screen shows all configured activities and the execution controls.
      </Step>

      <Step number={2} title="Select target hosts" accent="#7C3AED">
        Under <strong>Target Hosts (Private IP)</strong>, select the servers you want to deploy to.
        If your servers are only reachable through a bastion, select the bastion under
        <strong> Jump Server (Public IP)</strong>.
      </Step>

      <Step number={3} title="Select an activity and execute" accent="#7C3AED">
        Under <strong>Ansible Actions</strong>, choose the <strong>Activity</strong> you want to run
        from the dropdown, then click <strong>Execute</strong>. QuickInfra generates the Ansible
        playbook and inventory, copies the required key pair files, and begins execution.
      </Step>

      <Step number={4} title="Monitor the output" accent="#7C3AED">
        The <strong>Ansible Output</strong> terminal streams every step of the execution live —
        playbook creation, inventory generation, key pair setup, and the final deployment result.
        A green <strong>Ansible Generation Status = Success</strong> confirms a successful run.
        The terminal is also accessible anytime via the terminal icon in the navbar.
      </Step>

      <Callout type="tip">
        Use the same Deployment Project across environments by simply changing the target hosts.
        Deploy to EC2-Blue in dev, verify, then select EC2-Green in production and execute the
        identical deployment without any reconfiguration.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>QuickInfra auto-generates the Ansible playbook and inventory file for every execution — you do not need to write or manage playbook files manually.</li>
        <li>Key pairs are picked up automatically from the Infrastructure Project you select when fetching target hosts — no manual key configuration required in the deployment project.</li>
        <li>Multiple activities in a project execute in the order they are configured — use this to sequence deployments correctly, such as stopping a service before deploying new binaries.</li>
        <li>Database import and export activities work with both self-hosted databases and AWS RDS instances — specify connection details in the activity configuration.</li>
        <li>The terminal panel retains the last execution output until a new execution starts — use it to review results after navigating away from the project.</li>
      </ul>

    </DocPage>
  );
}