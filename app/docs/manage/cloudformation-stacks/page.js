import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiCode } from "react-icons/fi";

export const metadata = {
  title: "CloudFormation Stacks — QuickInfra Docs",
  description: "Create, modify, and delete AWS CloudFormation stacks using pre-built templates, your own scripts, or AI-generated templates.",
};

export default function CloudFormationStacksPage() {
  return (
    <DocPage
      sectionId="manage"
      icon={FiCode}
      title="CloudFormation Stacks"
      description="CloudFormation Stacks lets you provision and manage AWS infrastructure as code directly from QuickInfra. Use QuickInfra's pre-built templates, bring your own CloudFormation script, or let the AI generate one from a description — then deploy, update, or tear down stacks in your AWS account with a single action."
    >

      <SectionHeading>What is CloudFormation Stacks?</SectionHeading>
      <p>
        AWS CloudFormation is an infrastructure-as-code service that lets you define and provision
        cloud resources using declarative YAML or JSON templates. A stack is a single deployment unit —
        a collection of AWS resources that are created, updated, and deleted together as defined in
        the template.
      </p>
      <p style={{ marginTop: 14 }}>
        QuickInfra's CloudFormation Stacks section gives you a full stack management interface without
        needing direct AWS console access. You can list existing stacks, create new infrastructure from
        a template, modify running stacks, and delete stacks when they are no longer needed — all from
        within QuickInfra. The template content is fully visible and editable before execution, giving
        you complete control over what gets deployed.
      </p>

      <Callout type="info">
        CloudFormation Stacks integrates directly with the Custom Scripts section. Any CloudFormation
        template saved as a Custom Script is available here as a selectable stack template, ready
        to deploy without copying or pasting content manually.
      </Callout>

      <Screenshot
        src="/cloudformation-stacks.png"
        alt="CloudFormation Stacks screen in QuickInfra showing template content and action dropdown"
        caption="The CloudFormation Stacks screen — select a pre-built or custom template, review the full YAML content, then choose Create New, Modify, or Delete."
      />

      <SectionHeading>Three Ways to Use a Template</SectionHeading>

      <p>
        QuickInfra gives you three approaches to getting a CloudFormation template ready for deployment —
        use whichever fits your workflow.
      </p>

      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Pre-built Templates</strong> — QuickInfra ships with a library of ready-to-use
          CloudFormation templates for common infrastructure patterns — VPCs, subnets, EC2 instances,
          security groups, and more. Select one from the <strong>Stack Template Script</strong> dropdown
          and the full YAML content loads automatically. Review it, adjust any parameter defaults if needed,
          and execute.
        </li>
        <li>
          <strong>Bring Your Own Script</strong> — If you have written your own CloudFormation template,
          save it as a Custom Script of type CloudFormation in the Custom Scripts section. It will then
          appear in the Stack Template Script dropdown here, ready to deploy as a stack.
        </li>
        <li>
          <strong>AI Generator</strong> — Need a template but do not have one written yet? Use the
          built-in AI Generator to describe the infrastructure you want in plain English. The AI will
          produce a CloudFormation YAML template which loads into the editor for you to review and
          adjust before deploying.
        </li>
      </ul>

      <SectionHeading>How to Deploy a Stack</SectionHeading>

      <Step number={1} title="Navigate to Manage → CloudFormation Stacks" accent="#4F46E5">
        From the left sidebar select <strong>Manage</strong> then <strong>CloudFormation Stacks</strong>.
        Select your <strong>Cloud Account</strong> and <strong>Region</strong> — this is where the
        stack will be deployed.
      </Step>

      <Step number={2} title="Select or provide a template" accent="#4F46E5">
        Choose a template from the <strong>Stack Template Script</strong> dropdown, paste in your
        own CloudFormation YAML via an S3 URL or the template editor, or use the AI Generator to
        produce one. The full template content is displayed in the <strong>Stack Template Content</strong>
        editor for review.
      </Step>

      <Step number={3} title="Review the template" accent="#4F46E5">
        Read through the template carefully. Pay attention to the <strong>Parameters</strong> section —
        values like environment name, CIDR blocks, and subnet ranges often need to be adjusted to
        match your specific environment before deploying.
      </Step>

      <Step number={4} title="Select an action and execute" accent="#4F46E5">
        From the <strong>Select Action</strong> dropdown choose <strong>Create New</strong> to deploy
        a fresh stack, <strong>Modify</strong> to update an existing stack with a revised template,
        or <strong>Delete</strong> to tear down all resources in an existing stack. Click
        <strong> Action</strong> to submit.
      </Step>

      <Callout type="tip">
        Before deploying to production, test your CloudFormation template by creating the stack in a
        development account first. QuickInfra makes this easy — switch the Cloud Account filter,
        deploy, verify, then repeat in production.
      </Callout>

      <Callout type="warning">
        The <strong>Delete</strong> action removes all AWS resources defined in the stack — including
        VPCs, subnets, EC2 instances, and any other resources the template created. This action is
        irreversible. Ensure you have confirmed which resources will be affected before proceeding.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>CloudFormation stack operations are asynchronous — large stacks with many resources can take several minutes to reach a complete state.</li>
        <li>If a stack creation fails partway through, CloudFormation automatically rolls back and removes any resources it created during that attempt.</li>
        <li>The <strong>Modify</strong> action performs a stack update — CloudFormation calculates the difference between the current and new template and applies only the necessary changes.</li>
        <li>Pre-built templates are maintained by QuickInfra and follow AWS best practices — they are a reliable starting point for standard infrastructure patterns.</li>
        <li>AI-generated templates should always be reviewed before deployment — verify resource names, CIDR ranges, and any sensitive configuration values.</li>
      </ul>

    </DocPage>
  );
}