import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiImage } from "react-icons/fi";

export const metadata = {
  title: "VM Images — QuickInfra Docs",
  description: "View and manage your AMI images across any cloud account and region from a single screen.",
};

export default function VMImagesPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiImage}
      title="VM Images"
      description="VM Images gives you a centralised view of all Amazon Machine Images (AMIs) stored across your cloud accounts. Browse, manage, and export the status of your custom images — the same AMIs you create from the VM Instances section — all from one place."
    >

      <SectionHeading>What are VM Images?</SectionHeading>
      <p>
        An Amazon Machine Image is a snapshot of a virtual machine at a specific point in time. It captures
        the operating system, installed software, configuration, and data on the root volume, allowing you
        to launch new instances that are identical to the original — instantly and repeatedly.
      </p>
      <p style={{ marginTop: 14 }}>
        In QuickInfra, VM Images serves as your AMI catalogue. Every image you have created — whether
        directly from the VM Instances section or independently in your cloud account — is listed here
        with its architecture, root device type, creation date, and current availability state. You can
        use these images as the base for new infrastructure deployments across any project.
      </p>

      <Callout type="info">
        AMIs listed here are fetched live from your cloud account. Any image created via the
        <strong> Create AMI Backup</strong> action in VM Instances will appear in this list
        once it reaches the <strong>Available</strong> state.
      </Callout>

      <Screenshot
        src="/vm-images.png"
        alt="VM Images list in QuickInfra showing available AMIs"
        caption="The VM Images screen — filter by provider, account, and region to view all your AMIs with their state and details."
      />

      <SectionHeading>How to View Your Images</SectionHeading>

      <Step number={1} title="Navigate to Manage → VM Images" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>VM Images</strong>.
        You will see the filter controls at the top of the screen.
      </Step>

      <Step number={2} title="Select your filters" accent="#4F46E5">
        Choose a <strong>Cloud Provider</strong>, select the <strong>Cloud Account</strong> you
        want to query, and pick a <strong>Region</strong>. Optionally filter by a specific
        <strong> Project</strong> if you want to see only images associated with a particular
        set of infrastructure.
      </Step>

      <Step number={3} title="Fetch Images" accent="#4F46E5">
        Click <strong>Fetch Images</strong>. QuickInfra queries your cloud account and returns
        all AMIs matching your selected filters. If your cloud account is configured with an
        <strong> Assume Role ARN</strong>, QuickInfra uses it automatically during the fetch.
      </Step>

      <Step number={4} title="Review your image catalogue" accent="#4F46E5">
        Each row in the list displays the <strong>Image Name</strong>, <strong>Image ID</strong>,
        <strong> Architecture</strong> (e.g. x86_64 or arm64), <strong>Root Device</strong> type
        (EBS or instance store), <strong>Creation Date</strong>, and current <strong>State</strong>.
        Action buttons on the right let you download details or delete the image.
      </Step>

      <SectionHeading>Actions Available per Image</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li><strong>Export to S3</strong> — Export the AMI as a portable machine image directly to your S3 bucket. This makes the image completely independent of the cloud provider — you can export from AWS and later import it into a different provider or region, eliminating vendor lock-in on your base images.</li>
        <li><strong>Download</strong> — Pull image metadata and details directly for record-keeping or use in external workflows.</li>
        <li><strong>Delete</strong> — Deregister the AMI from your cloud account permanently. This does not delete associated snapshots — those must be removed separately from your cloud console.</li>
      </ul>

      <Callout type="tip">
        Before deleting an AMI, verify that no active infrastructure projects or launch templates
        reference it. Deleting an image that is in use will cause those deployments to fail on
        the next launch attempt.
      </Callout>

      <Callout type="warning">
        Deleting an AMI is irreversible within QuickInfra. The underlying EBS snapshots associated
        with the image remain in your cloud account and continue to incur storage costs until
        manually removed from your cloud console.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Images are fetched live from your cloud account — the list always reflects the real-time state of your AMI catalogue.</li>
        <li>AMIs in a <strong>Pending</strong> state are still being created — wait for the state to change to <strong>Available</strong> before using them in a deployment.</li>
        <li>You can query images across different accounts and regions by updating the filters and fetching again.</li>
        <li>AMIs created via the <strong>Create AMI Backup</strong> action in VM Instances are automatically named and tagged by QuickInfra for easy identification.</li>
        <li>Architecture matters — an x86_64 AMI cannot be used to launch an ARM-based instance type and vice versa.</li>
      </ul>

    </DocPage>
  );
}