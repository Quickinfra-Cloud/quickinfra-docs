import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiUpload } from "react-icons/fi";

export const metadata = {
  title: "VM Export — QuickInfra Docs",
  description: "Export any AMI from your cloud account to an S3 bucket in a portable format for cross-provider migration.",
};

export default function VMExportPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiUpload}
      title="VM Export"
      description="VM Export lets you export any AMI from your cloud account to an S3 bucket in a portable image format. Use it to migrate workloads across cloud providers, create provider-independent backups, or archive machine images outside your cloud account."
    >

      <SectionHeading>What is VM Export?</SectionHeading>
      <p>
        VM Export converts an existing AMI in your cloud account into a standalone virtual machine
        image file and writes it to an S3 bucket of your choice. Once in S3, the image is independent
        of any cloud provider — it can be imported into a different AWS account, a different region,
        or an entirely different cloud platform using VM Import.
      </p>
      <p style={{ marginTop: 14 }}>
        This is the first half of QuickInfra's cross-provider portability workflow. Export a machine
        image to S3, then use VM Import to bring it into any target account or provider. Together,
        these two features give you a complete migration and backup pipeline without relying on
        proprietary cloud migration tools.
      </p>

      <Callout type="info">
        Images exported using VM Export are stored in your S3 bucket and can be imported back into
        any AWS account using the VM Import feature. The S3 bucket acts as a portable, provider-neutral
        storage layer between the two operations.
      </Callout>

      <Screenshot
        src="/vm-export.png"
        alt="VM Export form in QuickInfra showing export configuration fields"
        caption="The VM Export form — provide the AMI ID, target S3 bucket, folder prefix, image format, and optional role and tags, then export."
      />

      <SectionHeading>How to Export a VM</SectionHeading>

      <Step number={1} title="Navigate to Manage → VM Export" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>VM Export</strong>.
        Select your <strong>Cloud Provider</strong>, <strong>Cloud Account</strong>, and
        <strong> Region</strong> — this is the source account where the AMI currently lives.
      </Step>

      <Step number={2} title="Enter the Image ID" accent="#4F46E5">
        In the <strong>Export New Image</strong> panel, enter the <strong>Image ID</strong> of
        the AMI you want to export — for example <em>ami-xxxxxxxxx</em>. You can find the AMI ID
        in the VM Images section of QuickInfra or directly in your cloud console.
      </Step>

      <Step number={3} title="Configure the S3 destination" accent="#4F46E5">
        Enter the <strong>S3 Bucket Name</strong> where the exported image will be stored.
        Optionally provide a <strong>Folder Prefix</strong> to organise exports within the bucket —
        for example <em>exports/</em> or <em>migrations/prod/</em>. The S3 bucket must be in the
        same region as the image and must be publicly accessible for the export service to write to it.
      </Step>

      <Step number={4} title="Select the image format" accent="#4F46E5">
        Choose the <strong>Image Format</strong> for the exported file. <strong>VMDK</strong> is
        selected by default and is the most widely compatible format across hypervisors and cloud
        providers. Other supported formats include VHD and OVA depending on your target environment.
      </Step>

      <Step number={5} title="Set role and tags" accent="#4F46E5">
        Enter a <strong>Role Name</strong> — the default is <em>vmimport</em>, which is the standard
        AWS service role required for VM import/export operations. Add a <strong>Description</strong>
        to identify this export job, and optionally add <strong>Tags</strong> in
        <em> key=value</em> format for tracking and cost allocation.
      </Step>

      <Step number={6} title="Export VM" accent="#4F46E5">
        Click <strong>Export VM</strong> to submit the export job. The process runs asynchronously
        in your cloud account. Monitor progress from the export status view — once complete, the
        image file will be available in your S3 bucket at the specified path.
      </Step>

      <Callout type="tip">
        Use a consistent <strong>Folder Prefix</strong> naming convention such as
        <em> exports/YYYY-MM/</em> to keep your S3 bucket organised across multiple export jobs
        over time. This makes it significantly easier to locate the right image when importing later.
      </Callout>

      <Callout type="warning">
        The S3 bucket must be in the same region as the AMI being exported, and must be configured
        to allow writes from the AWS VM export service role. Exports will fail if the bucket policy
        does not grant the necessary permissions.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>The <strong>vmimport</strong> IAM role must exist in your AWS account with the correct trust policy and permissions — this is a one-time setup required by AWS for all VM import/export operations.</li>
        <li>Export jobs are asynchronous and can take 30–90 minutes depending on the size of the AMI.</li>
        <li>Exported image files in S3 incur standard S3 storage costs — delete old exports you no longer need to avoid unnecessary charges.</li>
        <li>VMDK is the recommended format for maximum compatibility if you plan to import the image into a different provider or on-premises hypervisor.</li>
        <li>Once exported to S3, the image can be imported into any AWS account using QuickInfra's VM Import feature — completing the cross-account or cross-provider migration workflow.</li>
      </ul>

    </DocPage>
  );
}