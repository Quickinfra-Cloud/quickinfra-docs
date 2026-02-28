import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiHardDrive } from "react-icons/fi";

export const metadata = {
  title: "Disk Volumes — QuickInfra Docs",
  description: "Create, modify, encrypt, attach, detach, and snapshot your cloud disk volumes from a single screen in QuickInfra.",
};

export default function DiskVolumesPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiHardDrive}
      title="Disk Volumes"
      description="Disk Volumes gives you complete control over the persistent storage attached to your virtual machines. List volumes from any cloud account, then create, modify, encrypt, attach, detach, snapshot, or delete them — all without leaving QuickInfra."
    >

      <SectionHeading>What is Disk Volumes?</SectionHeading>
      <p>
        Disk Volumes is the storage management layer of QuickInfra. It surfaces all EBS volumes
        across your cloud accounts in a unified list, and gives you a rich set of actions to manage
        their full lifecycle — from initial creation through encryption, resizing, attachment to
        instances, snapshotting for backup, and eventual deletion.
      </p>
      <p style={{ marginTop: 14 }}>
        Whether you need to provision fresh storage for a new server, resize an existing volume as
        your data grows, or take a point-in-time snapshot before a risky deployment, Disk Volumes
        handles it all through a single action interface. Select an action, configure the parameters,
        and execute — QuickInfra handles the API calls to your cloud provider.
      </p>

      <Callout type="info">
        Volume data is fetched live from your cloud provider. The list always reflects the real-time
        state of your storage across all selected accounts and regions.
      </Callout>

      <Screenshot
        src="/disk-volumes.png"
        alt="Disk Volumes action panel in QuickInfra showing available volume operations"
        caption="The Disk Volumes action panel — select an operation such as Create, Modify, Attach, Detach, Snapshot, or Delete and configure it for your volume."
      />

      <SectionHeading>How to Manage Your Volumes</SectionHeading>

      <Step number={1} title="Navigate to Manage → Disk Volumes" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>Disk Volumes</strong>.
        Use the filter controls to select your <strong>Cloud Provider</strong>,
        <strong> Cloud Account</strong>, and <strong>Region</strong>, then fetch your volumes.
      </Step>

      <Step number={2} title="Select a volume" accent="#4F46E5">
        Your volumes appear in the list with their name, ID, size, type, state, and any
        attached instance. Click the volume you want to work with to bring up the action panel.
      </Step>

      <Step number={3} title="Choose an action" accent="#4F46E5">
        From the <strong>Select Action</strong> dropdown in the Attachment Details panel, choose
        the operation you want to perform. The available actions are described in the section below.
        Configure any required parameters — such as size, encryption settings, KMS key, or tags —
        then click <strong>Execute</strong>.
      </Step>

      <SectionHeading>Available Actions</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Create New</strong> — Provision a brand new EBS volume. Specify the size, volume
          type, availability zone, and whether it should be encrypted. You can also enable
          <strong> Multi-Attach</strong> for volumes that need to be shared across multiple instances
          simultaneously.
        </li>
        <li>
          <strong>Modify</strong> — Resize an existing volume or change its type without detaching
          it from the instance. Useful for scaling storage live as your application grows.
        </li>
        <li>
          <strong>Delete</strong> — Permanently remove the volume from your cloud account.
          The volume must be detached before deletion.
        </li>
        <li>
          <strong>Attach</strong> — Connect an existing volume to a running or stopped instance.
          Specify the target instance and the device path for the attachment.
        </li>
        <li>
          <strong>Detach</strong> — Safely disconnect a volume from its current instance without
          destroying the data. The volume becomes available for reattachment elsewhere.
        </li>
        <li>
          <strong>Snapshot</strong> — Create a point-in-time backup of the volume. Snapshots are
          stored in your cloud account and can be used to restore data or create new volumes
          from a known good state.
        </li>
      </ul>

      <SectionHeading>Encryption</SectionHeading>
      <p>
        When creating a new volume, you can enable encryption by checking <strong>Is Encrypted</strong>.
        Provide a <strong>KMS Key</strong> ARN if your organisation manages its own encryption keys —
        leave it blank to use the default AWS-managed key. Encrypted volumes protect data at rest and
        in transit between the volume and the instance.
      </p>

      <Callout type="tip">
        Use <strong>Volume Tags</strong> to label your volumes with key-value pairs such as
        <em> Name=quickinfra-app-root-ebs</em> or <em>env=prod</em>. Tags make it significantly
        easier to identify volumes, track costs by environment, and apply access policies.
      </Callout>

      <Callout type="warning">
        Deleting a volume is permanent and irreversible. Always take a <strong>Snapshot</strong>
        before deleting any volume that contains data you may need to recover later.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>A volume must be in the same availability zone as the instance you want to attach it to.</li>
        <li>Modifying a volume (resize or type change) takes effect immediately but may require a file system extension inside the OS to use the new space.</li>
        <li>Snapshots are incremental — only changed blocks are stored after the first snapshot, keeping backup costs low.</li>
        <li><strong>Multi-Attach</strong> is supported only for io1 and io2 volume types and requires a cluster-aware file system on the attached instances.</li>
        <li>Volumes set to <strong>Delete on Termination</strong> will be automatically removed when the attached instance is terminated — ensure this is intentional before enabling it.</li>
      </ul>

    </DocPage>
  );
}