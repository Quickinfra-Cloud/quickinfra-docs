import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiShare2 } from "react-icons/fi";

export const metadata = {
  title: "Subnets — QuickInfra Docs",
  description: "View all subnets across your VPCs and list every instance running within each subnet.",
};

export default function SubnetsPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiShare2}
      title="Subnets"
      description="Subnets gives you a granular view of the network segments inside your VPCs. List all subnets across any cloud account and region, inspect their CIDR ranges and availability zones, and drill into each one to see exactly which instances are running inside it."
    >

      <SectionHeading>What are Subnets?</SectionHeading>
      <p>
        A subnet is a subdivision of a VPC — a defined range of IP addresses within the larger network
        that resources are deployed into. Subnets are bound to a specific availability zone and are
        classified as either public (routable to the internet via an internet gateway) or private
        (accessible only within the VPC or via a NAT gateway).
      </p>
      <p style={{ marginTop: 14 }}>
        In QuickInfra, the Subnets section lists all subnets across your selected VPCs, grouped by
        the VPC they belong to. For each subnet you can see its name, CIDR block, the number of
        available IP addresses remaining, the availability zone it is in, and its current state.
        You can also list all virtual machine instances deployed within a subnet directly from
        this screen.
      </p>

      <Callout type="info">
        Subnets are fetched live from your cloud provider and grouped under their parent VPC for
        easy navigation. QuickInfra does not create or modify subnets from this screen — subnet
        provisioning is handled through Infrastructure Projects.
      </Callout>

      <Screenshot
        src="/subnets.png"
        alt="Cloud Subnets list in QuickInfra showing subnets grouped by VPC"
        caption="The Subnets screen — subnets are grouped by their parent VPC, showing CIDR block, available IPs, availability zone, and state."
      />

      <SectionHeading>How to View Your Subnets</SectionHeading>

      <Step number={1} title="Navigate to Manage → Subnets" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>Subnets</strong>.
        Use the filter controls to select your <strong>Cloud Provider</strong>,
        <strong> Cloud Account</strong>, and <strong>Region</strong>.
      </Step>

      <Step number={2} title="Fetch Subnets" accent="#4F46E5">
        Click <strong>Fetch Subnets</strong>. QuickInfra retrieves all subnets in the selected
        region and groups them under their parent VPC. Each VPC is shown as a labelled header
        with its VPC ID, and the subnets beneath it are listed in a table.
      </Step>

      <Step number={3} title="Review subnet details" accent="#4F46E5">
        Each subnet row displays the <strong>Subnet Name</strong>, <strong>Project Tag</strong>
        if one has been applied, <strong>CIDR Block</strong>, number of <strong>Available IPs</strong>
        remaining in the range, the <strong>Availability Zone</strong> it is bound to, and
        current <strong>State</strong>.
      </Step>

      <Step number={4} title="List instances in a subnet" accent="#4F46E5">
        Click the action button on the right of any subnet row to list all virtual machine
        instances currently deployed within that subnet. This gives you an immediate view of
        what is running in each network segment.
      </Step>

      <SectionHeading>Understanding the Subnet List</SectionHeading>
      <p>
        Subnets are displayed grouped under their parent VPC. If you have multiple VPCs in a region,
        each VPC appears as a separate group with its subnets listed beneath it. This makes it easy
        to understand the complete network structure of your infrastructure at a glance — from the
        top-level VPC down to individual availability zone segments.
      </p>
      <p style={{ marginTop: 14 }}>
        The <strong>Available IPs</strong> column is particularly useful for capacity planning.
        A /20 subnet provides 4096 addresses, of which AWS reserves five — leaving 4091 usable.
        As you deploy more instances, this number decreases. Monitor it to avoid exhausting the
        IP range in heavily used subnets.
      </p>

      <Callout type="tip">
        Use <strong>Project Tags</strong> on your subnets when provisioning infrastructure through
        QuickInfra. Tagged subnets are easier to filter and identify, especially in environments
        with many subnets across multiple availability zones.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Each subnet is locked to a single availability zone — resources in different AZs cannot share a subnet.</li>
        <li>A subnet with <strong>0 available IPs</strong> cannot accept new instance deployments until existing resources are removed or the subnet is resized.</li>
        <li>Private subnets do not have a direct route to the internet — instances inside them require a NAT gateway for outbound connectivity.</li>
        <li>QuickInfra recommends provisioning at least one subnet per availability zone for each environment to ensure high availability.</li>
        <li>Subnets with no Project Tag are typically default or manually created subnets — applying tags helps QuickInfra associate them correctly with projects.</li>
      </ul>

    </DocPage>
  );
}