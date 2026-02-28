import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  title: "Additional Help — QuickInfra Docs",
  description: "Get direct support from the QuickInfra team for application errors, platform issues, bugs, or any other questions.",
};

export default function AdditionalHelpPage() {
  return (
    <DocPage
      sectionId="for-you"
      icon={FiMessageCircle}
      title="Additional Help"
      description="Running into an error in your application? Seeing unexpected behaviour in the platform? Have a question that does not fit anywhere else? Use Additional Help to reach the QuickInfra team directly — for technical issues, bug reports, or anything else you need assistance with."
    >

      <SectionHeading>What is Additional Help?</SectionHeading>
      <p>
        Additional Help is your direct line to the QuickInfra support team. It is designed for
        situations that fall outside structured services or template requests — application errors
        you cannot resolve, unexpected platform behaviour, bugs you have encountered, or any
        question or problem you need a human to look at.
      </p>
      <p style={{ marginTop: 14 }}>
        There is no rigid category or form to fill — describe your problem, share relevant
        context or error messages, and the QuickInfra team will respond and work through it
        with you.
      </p>

      <SectionHeading>When to Use This</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
        <li><strong>Application errors</strong> — Errors in your deployed applications that you suspect are related to infrastructure configuration, networking, or deployment setup.</li>
        <li><strong>Platform bugs</strong> — Unexpected behaviour, incorrect results, or broken functionality within QuickInfra itself.</li>
        <li><strong>General questions</strong> — Anything you are unsure about — how a feature works, whether a particular use case is supported, or how to approach a specific problem.</li>
        <li><strong>Business or billing enquiries</strong> — Questions about your subscription, account limits, or anything account-related.</li>
      </ul>

      <Callout type="info">
        For structured professional work such as CI/CD setup or Kubernetes implementation,
        use the <strong>Services</strong> section. For custom template requests, use
        <strong> Free Infra Template</strong>. Additional Help is for everything else.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Include as much detail as possible — error messages, steps to reproduce, what you expected vs what happened, and your current environment setup.</li>
        <li>The QuickInfra team responds during business hours — urgent production issues should be flagged clearly in your message.</li>
        <li>There is no limit on the number of requests — use it whenever you need help.</li>
      </ul>

    </DocPage>
  );
}