import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiCloud } from "react-icons/fi";

export const metadata = {
  title: "Cloud Accounts — QuickInfra Docs",
  description: "Learn how to connect and manage your cloud provider accounts in QuickInfra.",
};

export default function CloudAccountsPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiCloud}
      title="Cloud Accounts"
      description="Cloud Accounts are the entry point of QuickInfra. Every piece of infrastructure you provision, every VM you launch, and every pipeline you run is tied to a cloud account. Without one, nothing else works — this is where you begin."
    >

      <SectionHeading>What is a Cloud Account?</SectionHeading>
      <p>
        A Cloud Account in QuickInfra is a secure connection between the platform and your cloud provider —
        currently AWS, with Azure and GCP support on the roadmap. When you add a cloud account, you provide
        QuickInfra with the credentials it needs to provision and manage infrastructure on your behalf.
      </p>
      <p style={{ marginTop: 14 }}>
        All resources created within QuickInfra — virtual machines, networks, volumes, deployments — are
        provisioned under the cloud account you select at the time of creation. This gives you full control
        over which account bears the cost and where your infrastructure lives.
      </p>

      <Callout type="info">
        You can add multiple cloud accounts — for example, separate accounts for development, staging, and
        production environments — and switch between them per resource.
      </Callout>

      <Screenshot
        src="/cloud-accounts-create.png"
        alt="Create Cloud Account form in QuickInfra"
        caption="The Create Cloud Account form — fill in your provider credentials, region, and optional advanced settings."
      />

      <SectionHeading>How to Add a Cloud Account</SectionHeading>

      <Step number={1} title="Navigate to Manage → Cloud Accounts" accent="#4F46E5">
        From the left sidebar, go to <strong>Manage</strong> and select <strong>Cloud Accounts</strong>.
        Click the <strong>New</strong> button in the top-right corner to open the creation form.
      </Step>

      <Step number={2} title="Fill in Basic Information" accent="#4F46E5">
        Enter your <strong>Account ID / Subscription ID</strong> — this is the unique identifier of your
        cloud account (minimum 12 characters). Add a meaningful <strong>Account Description</strong> so
        you can identify it easily later. Select your <strong>Cloud Provider</strong> from the dropdown
        and set the <strong>Status</strong> to Active.
      </Step>

      <Step number={3} title="Set the Default Region" accent="#4F46E5">
        Select a <strong>Default Region</strong> for this account. This region will be pre-selected
        when provisioning resources under this account. The region list populates automatically once
        you choose a cloud provider.
      </Step>

      <Step number={4} title="Enter Your Credentials" accent="#4F46E5">
        Provide the <strong>Access Key</strong> and <strong>Secret Key</strong> for your cloud provider.
        These are your programmatic access credentials — for AWS, you generate these from the IAM console.
        Both fields require a minimum of 20 characters.
      </Step>

      <Step number={5} title="Advanced Configuration (Optional)" accent="#4F46E5">
        If your organisation uses cross-account access, enter the <strong>Assume Role ARN</strong> and
        an <strong>External ID</strong> for enhanced security. If MFA is required for programmatic access,
        provide the <strong>MFA Token</strong> as well. These fields are entirely optional for standard setups.
      </Step>

      <Step number={6} title="Create the Account" accent="#4F46E5">
        Click <strong>Create Account</strong>. QuickInfra will validate your credentials against the
        cloud provider and save the account if successful. You will be redirected to the Cloud Accounts
        list where your new account appears immediately.
      </Step>

      <Callout type="warning">
        Never share your Access Key and Secret Key with anyone. QuickInfra encrypts and stores your
        credentials securely — they are never displayed in plain text after saving.
      </Callout>

      <SectionHeading>Switching Infrastructure Between Accounts</SectionHeading>
      <p>
        One of the most powerful features of Cloud Accounts is the ability to move infrastructure
        between accounts. If you need to migrate a workload from a development account to production,
        QuickInfra allows you to re-assign resources to a different cloud account without reprovisioning
        from scratch. Simply select the target account during the transfer operation and QuickInfra
        handles the rest.
      </p>

      <Callout type="tip">
        Keep your account descriptions clear and environment-specific — for example,
        <em> "AWS Production — ap-south-1"</em> or <em>"AWS Dev — us-east-1"</em>. This makes
        it much easier to select the right account when creating resources.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>A cloud account must be <strong>Active</strong> for resources to be provisioned under it.</li>
        <li>You can add as many cloud accounts as your subscription allows — one per environment is recommended.</li>
        <li>Credentials are encrypted at rest and never exposed after initial entry.</li>
        <li>The default region set here acts as a fallback — you can always override it per resource.</li>
        <li>Deleting a cloud account does not delete the infrastructure provisioned under it — it only removes the connection from QuickInfra.</li>
      </ul>

    </DocPage>
  );
}