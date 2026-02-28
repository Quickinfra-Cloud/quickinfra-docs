import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiDownload } from "react-icons/fi";

export const metadata = {
  title: "VM Import — QuickInfra Docs",
  description: "Import virtual machine images from S3 into your cloud account using QuickInfra.",
};

export default function VMImportPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiDownload}
      title="VM Import"
      description="VM Import lets you bring virtual machine images stored in an S3 bucket directly into your cloud account as importable AMIs. Whether the image was exported by QuickInfra or uploaded manually, this section handles the full import workflow — browse, select, import, and track status."
    >

      <SectionHeading>What is VM Import?</SectionHeading>
      <p>
        VM Import is the counterpart to VM Export. When you export a virtual machine image to S3 —
        either through QuickInfra's export feature or manually from any source — VM Import gives
        you a streamlined way to bring that image back into your cloud account as a usable AMI.
      </p>
      <p style={{ marginTop: 14 }}>
        This is the mechanism that enables true cloud portability. You can export a VM from one
        provider or account, store it in S3 as a neutral format, and then import it into any AWS
        account in any region — effectively moving workloads across environments without the need
        to reprovision or reconfigure from scratch.
      </p>

      <Callout type="info">
        VM Import works with images exported by QuickInfra as well as any VM image you have
        manually uploaded to S3 in a supported format — VMDK, VHD, VHDX, or OVA.
      </Callout>

      <Screenshot
        src="/vm-import.png"
        alt="VM Import screen in QuickInfra showing S3 image browser"
        caption="The VM Import screen — browse your S3 bucket for VM images, select one, and import it directly into your cloud account."
      />

      <SectionHeading>How to Import a VM</SectionHeading>

      <Step number={1} title="Navigate to Manage → VM Import" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>VM Import</strong>.
        Select your <strong>Cloud Provider</strong>, <strong>Cloud Account</strong>, and
        <strong> Region</strong> — this is the target account and region where the imported
        AMI will be created.
      </Step>

      <Step number={2} title="Browse S3 Images" accent="#4F46E5">
        On the <strong>Browse S3 Images</strong> tab, enter your <strong>S3 Bucket Name</strong>
        where the VM image is stored. Optionally provide a <strong>Folder Prefix</strong> to
        narrow the search to a specific path within the bucket — for example
        <em> vms/production/</em>. Select an <strong>Image Format</strong> or leave it as
        All Formats, then click <strong>Fetch Images</strong> to list all available VM images
        in that location.
      </Step>

      <Step number={3} title="Select and Import" accent="#4F46E5">
        From the list of images returned, select the one you want to import and switch to the
        <strong> Import VM</strong> tab. Configure any import settings required — such as the
        target architecture and OS type — then submit the import job.
      </Step>

      <Step number={4} title="Track Import Status" accent="#4F46E5">
        Switch to the <strong>Import Status</strong> tab to monitor the progress of your import
        job. VM imports can take several minutes depending on the image size. Once complete,
        the imported image appears in your <strong>VM Images</strong> section as an available AMI
        ready for use in deployments.
      </Step>

      <Callout type="tip">
        If you exported the VM using QuickInfra's VM Export feature, the image is already in the
        correct format and folder structure in S3. Simply point VM Import at the same bucket and
        prefix to find it immediately.
      </Callout>

      <Callout type="warning">
        Ensure the S3 bucket is in the same AWS region as the target cloud account, or that
        cross-region access is correctly configured. Import jobs will fail if the service cannot
        access the S3 object due to bucket policy or region restrictions.
      </Callout>

      <SectionHeading>Supported Image Formats</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
        <li><strong>VMDK</strong> — VMware Virtual Machine Disk, commonly exported from VMware vSphere or Workstation.</li>
        <li><strong>VHD / VHDX</strong> — Microsoft Virtual Hard Disk formats, typically from Hyper-V or Azure.</li>
        <li><strong>OVA</strong> — Open Virtualization Archive, a portable format supported by most hypervisors.</li>
      </ul>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>The S3 bucket must be accessible from the target AWS account — ensure the bucket policy grants the necessary permissions to the AWS VM Import service role.</li>
        <li>Import jobs are asynchronous — the Import Status tab is your source of truth for progress and any error messages.</li>
        <li>Once imported, the AMI behaves identically to any other AMI in your account and can be used to launch instances via Infrastructure Projects.</li>
        <li>Large images (100GB+) may take 30–60 minutes to import — plan accordingly when scheduling migrations.</li>
      </ul>

    </DocPage>
  );
}