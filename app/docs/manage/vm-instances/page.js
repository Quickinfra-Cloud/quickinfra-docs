import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiMonitor } from "react-icons/fi";

export const metadata = {
  title: "VM Instances — QuickInfra Docs",
  description: "View and manage your virtual machines across any cloud provider and account from a single screen.",
};

export default function VMInstancesPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiMonitor}
      title="VM Instances"
      description="VM Instances gives you a unified view of every virtual machine running across your cloud accounts — regardless of provider or region. Start, stop, delete, back up, and manage volumes, all from one screen without ever logging into your cloud console."
    >

      <SectionHeading>What is VM Instances?</SectionHeading>
      <p>
        VM Instances is your central dashboard for virtual machine lifecycle management inside QuickInfra.
        Rather than jumping between AWS, Azure, or GCP consoles to find and manage your servers, this
        section pulls all your instances into a single, filterable list. Select a cloud provider, pick
        an account and region, and every VM associated with that combination appears instantly.
      </p>
      <p style={{ marginTop: 14 }}>
        From this list you can perform the most common VM operations directly — no separate tool or
        console access required. Each instance row shows you the VM name, ID, instance type, public IP,
        private IP, and current state at a glance, with action buttons immediately available on the right.
      </p>

      <Callout type="info">
        VM Instances is a read and control layer over your existing cloud infrastructure. It does not
        provision new VMs — use Infrastructure Projects for that. This section is for managing VMs
        that already exist in your cloud account.
      </Callout>

      <Screenshot
        src="/vm-instances.png"
        alt="VM Instances list in QuickInfra showing running virtual machines"
        caption="The VM Instances screen — filter by provider, account, and region, then fetch and manage your virtual machines."
      />

      <SectionHeading>How to View Your Instances</SectionHeading>

      <Step number={1} title="Navigate to Manage → VM Instances" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>VM Instances</strong>.
        You will land on the instances screen with filter controls at the top.
      </Step>

      <Step number={2} title="Select your filters" accent="#4F46E5">
        Choose a <strong>Cloud Provider</strong> — AWS is currently supported, with Azure and GCP
        on the roadmap. Select the <strong>Cloud Account</strong> you want to query, then pick a
        <strong> Region</strong>. Optionally, filter by a specific <strong>Project</strong> to
        narrow results to instances provisioned under that project.
      </Step>

      <Step number={3} title="Fetch Instances" accent="#4F46E5">
        Click <strong>Fetch Instances</strong>. QuickInfra queries your cloud account in real time
        and returns all virtual machines matching your filter. If your cloud account is configured
        with an <strong>Assume Role ARN</strong>, QuickInfra will automatically use it to fetch
        instances — no additional input required.
      </Step>

      <Step number={4} title="Review your instances" accent="#4F46E5">
        Each row in the list displays the <strong>VM Name</strong>, <strong>VM ID</strong>,
        instance <strong>Type</strong>, <strong>Public IP</strong>, <strong>Private IP</strong>,
        and current <strong>State</strong> — Running, Stopped, or otherwise. Action icons appear
        on the right of each row for direct control.
      </Step>

      <SectionHeading>Actions Available per Instance</SectionHeading>
      <p>
        Each virtual machine in the list has a set of action buttons available directly in the row.
        The following operations are supported:
      </p>

      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li><strong>Start / Stop</strong> — Power a VM on or off without terminating it. Useful for cost management on non-production instances.</li>
        <li><strong>Reboot</strong> — Restart the instance while keeping all data and configuration intact.</li>
        <li><strong>Delete</strong> — Permanently terminate the instance. This action is irreversible — QuickInfra will ask for confirmation before proceeding.</li>
        <li><strong>Create AMI Backup</strong> — Generate an Amazon Machine Image snapshot of the instance with a single click. The AMI is saved to your cloud account and appears in VM Images.</li>
        <li><strong>View Associated Volumes</strong> — See all EBS volumes attached to the instance, their size, type, and state.</li>
        <li><strong>Volume Updates</strong> — Modify volume configuration — such as size or type — directly from this screen without navigating to Disk Volumes separately.</li>
      </ul>

      <Callout type="tip">
        Use the <strong>Update Spot Tags</strong> button at the top right to bulk-update tags across
        your spot instances. This is particularly useful for cost allocation and resource tracking
        across environments.
      </Callout>

      <Callout type="warning">
        The <strong>Delete</strong> action terminates the instance permanently in your cloud account —
        not just in QuickInfra. Ensure you have a backup or AMI before deleting any production instance.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Instance data is fetched live from your cloud provider — the list always reflects the real-time state of your infrastructure.</li>
        <li>You can query instances across different accounts and regions by changing the filters and fetching again.</li>
        <li>AMI backups created here appear directly in your cloud account under EC2 → AMIs and are also accessible via the VM Images section in QuickInfra.</li>
        <li>Stopped instances still incur storage costs for their attached volumes — use Delete only when you are certain the instance is no longer needed.</li>
      </ul>

    </DocPage>
  );
}