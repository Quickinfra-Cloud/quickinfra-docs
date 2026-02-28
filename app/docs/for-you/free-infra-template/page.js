import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiGift } from "react-icons/fi";

export const metadata = {
  title: "Free Infra Template — QuickInfra Docs",
  description: "Request a free custom infrastructure or deployment template from the QuickInfra team.",
};

export default function FreeInfraTemplatePage() {
  return (
    <DocPage
      sectionId="for-you"
      icon={FiGift}
      title="Free Infra Template"
      description="Can't find a template that fits your exact requirements? Request a free custom infrastructure or deployment template from the QuickInfra team. Describe what you need and we'll build it for you."
    >

      <SectionHeading>What is Free Infra Template?</SectionHeading>
      <p>
        QuickInfra's template library covers common infrastructure and deployment patterns, but
        every organisation has unique requirements. The Free Infra Template section lets you
        request a fully custom template — built specifically for your use case — at no cost.
      </p>
      <p style={{ marginTop: 14 }}>
        Whether you need an infrastructure template for a specific cloud architecture, a deployment
        template for a custom application stack, or a script template for a particular automation
        workflow, describe what you need and the QuickInfra team will build and deliver it to your
        account. Once added, it appears in your template library ready to copy as a project and use.
      </p>

      <Callout type="info">
        This is a complimentary service included with your QuickInfra subscription. There is no
        limit on the number of template requests — use it whenever the existing library does not
        cover your use case.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Be as specific as possible in your request — include cloud provider, region preferences, instance types, and any specific tooling or configuration requirements.</li>
        <li>Templates are delivered to your account directly — you will be notified when it is ready to use.</li>
        <li>Delivered templates follow the same structure as all QuickInfra templates — copy them as projects and customise from there.</li>
      </ul>

    </DocPage>
  );
}