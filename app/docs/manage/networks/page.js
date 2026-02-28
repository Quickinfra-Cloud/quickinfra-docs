import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiWifi } from "react-icons/fi";

export const metadata = {
  title: "Networks — QuickInfra Docs",
  description: "List and inspect your Virtual Private Cloud networks, their subnets, and all running instances underneath them.",
};

export default function NetworksPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiWifi}
      title="Networks"
      description="Networks gives you a complete view of all Virtual Private Cloud networks across your cloud accounts. Drill into any VPC to inspect its configuration, explore all subnets beneath it, and see every virtual machine running inside it — all without touching your cloud console."
    >

      <SectionHeading>What is Networks?</SectionHeading>
      <p>
        A Virtual Private Cloud is the foundational network layer on which all your cloud infrastructure
        runs. Every VM instance, subnet, and load balancer lives inside a VPC. The Networks section in
        QuickInfra surfaces all VPCs across your cloud accounts in a clean list, giving you immediate
        visibility into your network topology — CIDR blocks, tenancy settings, default status, and
        availability state — without needing direct access to your cloud console.
      </p>
      <p style={{ marginTop: 14 }}>
        Beyond simply listing networks, you can drill into any VPC to view its full configuration,
        see all subnets defined within it, and list every virtual machine instance currently running
        or stopped under that network. This makes Networks the ideal starting point for understanding
        how your infrastructure is organised and where your workloads are deployed.
      </p>

      <Callout type="info">
        Networks are read from your cloud provider in real time. QuickInfra does not modify your
        VPC configuration — this section is a visibility and navigation tool.
      </Callout>

      <Screenshot
        src="/networks.png"
        alt="Networks list in QuickInfra showing VPCs with CIDR blocks and state"
        caption="The Networks screen — lists all VPCs across your selected cloud account and region with their ID, CIDR block, tenancy, and availability state."
      />

      <SectionHeading>How to View Your Networks</SectionHeading>

      <Step number={1} title="Navigate to Manage → Networks" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>Networks</strong>.
        The filter controls at the top allow you to narrow the list to a specific account and region.
      </Step>

      <Step number={2} title="Select your filters" accent="#4F46E5">
        Choose your <strong>Cloud Provider</strong>, <strong>Cloud Account</strong>, and
        <strong> Region</strong>. Optionally filter by a specific <strong>Project</strong> to
        see only the VPCs associated with that project's infrastructure.
      </Step>

      <Step number={3} title="Fetch Networks" accent="#4F46E5">
        Click <strong>Fetch Networks</strong>. QuickInfra queries your cloud account and returns
        all VPCs in the selected region. Each row shows the <strong>VPC Name</strong>,
        <strong> VPC ID</strong>, <strong>CIDR Block</strong>, whether it is the
        <strong> Default</strong> VPC, <strong>Tenancy</strong>, and current <strong>State</strong>.
      </Step>

      <Step number={4} title="Drill into a network" accent="#4F46E5">
        Use the action buttons on the right of each VPC row to explore further. You can view the
        full network configuration, list all subnets defined within the VPC, and see all VM
        instances currently deployed under that network.
      </Step>

      <SectionHeading>What You Can See Per Network</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Network Configuration</strong> — Full details of the VPC including CIDR block,
          DNS settings, tenancy model, and associated route tables and internet gateways.
        </li>
        <li>
          <strong>Subnets</strong> — All subnets defined within the VPC, their availability zones,
          CIDR ranges, and whether they are public or private. This is the same data available in
          the dedicated Subnets section, surfaced here in context for quick navigation.
        </li>
        <li>
          <strong>VM Instances</strong> — Every virtual machine currently running or stopped inside
          the VPC, with instance type, IP addresses, and state — giving you a complete picture of
          what is deployed in that network.
        </li>
      </ul>

      <Callout type="tip">
        If you have multiple VPCs in a region — for example, a default VPC and a custom one like
        <em> quickinfra-vpc</em> — use the network drill-down to quickly understand which workloads
        are running in which network. This is especially useful when troubleshooting connectivity
        or planning a network restructure.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Every AWS account comes with a <strong>Default VPC</strong> in each region. It is safe to use for development but it is recommended to create a dedicated VPC for production workloads.</li>
        <li>The CIDR block of a VPC defines the private IP address range available to all resources inside it — this cannot be changed after creation.</li>
        <li>QuickInfra does not create or modify VPCs from this screen. Network provisioning happens through Infrastructure Projects using Terraform or CloudFormation templates.</li>
        <li>If a VPC shows as <strong>available</strong> but no instances appear under it, the VPC exists but no compute resources have been deployed into it yet.</li>
      </ul>

    </DocPage>
  );
}