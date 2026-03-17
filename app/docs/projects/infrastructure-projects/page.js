import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiServer } from "react-icons/fi";

export const metadata = {
  title: "Infrastructure Projects — QuickInfra Docs",
  description: "Provision and manage cloud infrastructure using Terraform and Ansible through QuickInfra's Infrastructure Projects.",
};

export default function InfrastructureProjectsPage() {
  return (
    <DocPage
      sectionId="projects"
      icon={FiServer}
      title="Infrastructure Projects"
      description="Infrastructure Projects is where you provision real cloud infrastructure using Terraform and Ansible. Compose your infrastructure from modular services — VPC, security groups, key pairs, EC2 instances and more — then execute directly against your cloud account and watch the live output stream in real time."
    >

      <SectionHeading>What are Infrastructure Projects?</SectionHeading>
      <p>
        An Infrastructure Project is a collection of configured cloud services that together define
        a complete environment. Each service maps to a Terraform module — for example a VPC module,
        a security group module, a key pair module, or an EC2 instance module. You compose these
        services inside a project, configure them to your requirements, and then execute the project
        against your cloud account to provision the actual infrastructure.
      </p>
      <p style={{ marginTop: 14 }}>
        QuickInfra handles the Terraform execution engine underneath — you do not need Terraform
        installed locally or any CLI access. Select your cloud account, choose a Terraform action,
        hit Execute, and the output streams live to your terminal panel inside the platform.
        Ansible playbooks can also be layered on top for post-provisioning configuration management.
      </p>

      <Callout type="info">
        Infrastructure Projects use <strong>OpenTofu</strong> — the open-source fork of Terraform —
        as the execution engine. All standard Terraform module syntax and providers are fully supported.
      </Callout>

      <SectionHeading>Three Ways to Create a Project</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>From Scratch</strong> — Create a blank project, give it a name and region, then
          manually add and configure each service module. Best when you want full control over every parameter.
        </li>
        <li>
          <strong>Copy from an Existing Project</strong> — Clone any existing project — including
          production — as a starting point. All services and configurations are duplicated instantly.
          Change what you need and you have a ready-to-deploy replica. This is the fastest way to
          replicate production infrastructure into a staging or dev account.
        </li>
        <li>
          <strong>From a Ready-Made Template</strong> — QuickInfra provides a library of
          pre-configured infrastructure templates covering common patterns. Select one and a fully
          configured project with all services already set up is created for you — ready to execute
          with minimal changes.
        </li>
      </ul>

      <Callout type="tip">
        A project is not tied to a single cloud account. Configure your infrastructure once, execute
        it in your dev account to test, then switch the cloud account to staging or production and
        execute again — identical infrastructure deployed across any number of environments with
        zero rework.
      </Callout>

      <Screenshot
        src="/infra-project-services.png"
        alt="Infrastructure Project services list showing VPC, SG, KeyPair and EC2 modules"
        caption="A configured Infrastructure Project — five services (VPC, Security Group, KeyPair, EC2-Blue, EC2-Green) compose a complete DevOps infrastructure. Select a cloud account and Terraform action, then execute."
      />

      <SectionHeading>How to Set Up and Execute a Project</SectionHeading>

      <Step number={1} title="Create an Infrastructure Project" accent="#2563EB">
        Navigate to <strong>Projects → Infrastructure</strong> and click <strong>New Project</strong>.
        Choose to start from scratch, copy an existing project, or pick a ready-made template.
        Give the project a name that reflects the environment — for example
        <em> EC2 DevOps Infra Simple (Mumbai)</em> — and select the target cloud provider and region.
      </Step>

      <Step number={2} title="Add services to the project" accent="#2563EB">
        Inside the project, click <strong>Add Service</strong> to add the first infrastructure
        module. Each service has a <strong>Service Type</strong> — such as VPC, SG, KeyPair-EC2,
        or EC2 — and a <strong>Module Name</strong> that identifies this specific instance of that
        type. Configure the module parameters for each service added.
      </Step>

      <Step number={3} title="Build your service stack" accent="#2563EB">
        Add all the services your environment requires. A typical stack follows a dependency order —
        VPC first, then security groups, then key pairs, then compute instances. QuickInfra manages
        the dependency graph during execution so resources are created in the correct sequence.
      </Step>

      <Step number={4} title="Select cloud account and action" accent="#2563EB">
        At the bottom of the project services screen, select the <strong>Cloud Account</strong>
        to deploy into and choose a <strong>Terraform Action</strong> — <strong>Plan</strong> to
        preview changes without applying, <strong>Apply</strong> to provision resources, or
        <strong> Destroy</strong> to tear down all resources in the project.
      </Step>

      <Step number={5} title="Execute and monitor live output" accent="#2563EB">
        Click <strong>Execute</strong>. QuickInfra streams the Terraform execution output live
        to the terminal panel. You can switch between the <strong>Terraform</strong> and
        <strong> Ansible</strong> output tabs to monitor each layer of the execution independently.
      </Step>

      <Screenshot
        src="/infra-project-output.png"
        alt="Live Terraform output terminal in QuickInfra showing OpenTofu execution"
        caption="Live Terraform execution output — QuickInfra streams every line of the OpenTofu run in real time, with line numbers and colour-coded status messages."
      />

      <SectionHeading>Terraform Actions</SectionHeading>
      <p>
        The <strong>Select Action</strong> dropdown gives you full control over what happens when you
        hit Execute. Each action maps to a specific Terraform operation run against your cloud account.
      </p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Generate Terraform</strong> — Generates the Terraform configuration files for your
          project based on the services you have configured. No infrastructure is created yet — this
          just prepares the scripts and validates your configuration.
        </li>
        <li>
          <strong>View Terraform Plan</strong> — Shows a preview of what will be created, modified,
          or destroyed when you execute against your cloud account. Nothing changes in AWS — this is
          a safe read-only check and is recommended before every Apply in production.
        </li>
        <li>
          <strong>Create Infrastructure</strong> — Applies your Terraform configuration and provisions
          the actual cloud resources in your account. VPCs, EC2 instances, security groups, and all
          configured services get created.
        </li>
        <li>
          <strong>Plan and Create</strong> — Runs a plan first, then immediately applies it in one
          step. Recommended for most use cases — you get the safety of a plan with the convenience
          of a single action.
        </li>
        <li>
          <strong>Remove Infrastructure</strong> — Destroys all cloud resources associated with this
          project in your account. This permanently deletes VPCs, EC2 instances, security groups, and
          all other provisioned resources. Use with caution in production.
        </li>
        <li>
          <strong>Infrastructure Pricing</strong> — Estimates the monthly cost of your infrastructure
          before creating it. Sends your plan to the cost estimation engine and returns a breakdown
          per resource so you can review costs before committing.
        </li>
        <li>
          <strong>Infrastructure Diff</strong> — Compares your current state file against the actual
          state of resources in your cloud account. Useful for detecting drift — changes made directly
          in AWS outside of QuickInfra will be surfaced here.
        </li>
        <li>
          <strong>Update Modules</strong> — Refreshes the Terraform modules referenced in your project
          to their latest versions. Run this if a module has been updated and you want to pull in the
          latest changes before your next execution.
        </li>
        <li>
          <strong>Upgrade Terraform</strong> — Upgrades the OpenTofu providers to their latest
          compatible versions as defined in your configuration. Run this to stay current with AWS
          provider updates.
        </li>
      </ul>

      <Callout type="tip">
        Run <strong>View Terraform Plan</strong> before every <strong>Create Infrastructure</strong>
        in production environments. The plan output shows exactly which resources will be created,
        modified, or destroyed — giving you a chance to catch unintended changes before they affect
        live infrastructure.
      </Callout>

      <SectionHeading>Service Actions</SectionHeading>
      <p>
        Each service in the project list has three action buttons available on the right:
      </p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
        <li><strong>Clone</strong> — Duplicate the service configuration as a starting point for a similar module. Useful when you need two identical EC2 modules with minor differences, such as EC2-Blue and EC2-Green.</li>
        <li><strong>View / Edit</strong> — Open the service configuration to review or modify its Terraform module parameters before the next execution.</li>
        <li><strong>Delete</strong> — Remove the service from the project. This does not destroy the cloud resource — use Terraform Destroy for that.</li>
      </ul>

      <Callout type="warning">
        The <strong>Remove Infrastructure</strong> action will permanently delete all cloud resources
        associated with the project in your cloud account. This includes VPCs, EC2 instances, security
        groups, and all other provisioned resources. Use with caution in production.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>The <strong>Connected</strong> indicator at the bottom right confirms QuickInfra has a live connection to your cloud account and is ready to execute.</li>
        <li>Terraform state is managed by QuickInfra — you do not need to configure a remote backend or manage state files manually.</li>
        <li>The terminal panel is accessible at any time via the terminal icon in the navbar, allowing you to review execution output even after navigating away from the project.</li>
        <li>Ansible playbooks run after Terraform completes — they are used for post-provisioning configuration such as installing software, setting up users, and applying system hardening.</li>
        <li>Each project is scoped to a single region — create separate projects for infrastructure in different regions or accounts.</li>
      </ul>

    </DocPage>
  );
}