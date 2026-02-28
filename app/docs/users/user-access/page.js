import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiUserPlus } from "react-icons/fi";

export const metadata = {
  title: "User Access — QuickInfra Docs",
  description: "Control which projects, cloud accounts, and resources each non-admin user can access in QuickInfra.",
};

export default function UserAccessPage() {
  return (
    <DocPage
      sectionId="users"
      icon={FiUserPlus}
      title="User Access"
      description="User Access gives admin users granular control over exactly what each non-admin user can see and interact with — which infrastructure projects, deployment projects, cloud accounts, and other resources they have permission to access."
    >

      <SectionHeading>What is User Access?</SectionHeading>
      <p>
        Assigning a role to a user in the User List defines their global capability level —
        what actions they are permitted to perform. User Access goes one level deeper and
        controls which specific resources they can see and act on. A user with the Editor
        role but no project access cannot see any projects. A user with access to only the
        dev cloud account cannot interact with production resources.
      </p>
      <p style={{ marginTop: 14 }}>
        This two-layer model — role plus access — gives your organisation precise control
        over your team's reach within QuickInfra. It is especially important in production
        environments where only certain people should be able to trigger infrastructure
        changes or deployments.
      </p>

      <SectionHeading>What You Can Control</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Infrastructure Projects</strong> — Which infrastructure projects a user can
          view and interact with. A user without access to a project cannot see it in their
          Projects list at all.
        </li>
        <li>
          <strong>Deployment Projects</strong> — Which deployment projects a user can access
          and execute. Useful for restricting production deployments to senior team members only.
        </li>
        <li>
          <strong>Cloud Accounts</strong> — Which connected cloud accounts a user can see and
          use when fetching resources or executing projects. Users without access to the
          production cloud account cannot query or deploy into it.
        </li>
        <li>
          <strong>Other Resources</strong> — Access to specific sections such as VM Instances,
          Disk Volumes, Networks, and other Manage features can be scoped per user based on
          your organisation's requirements.
        </li>
      </ul>

      <Callout type="info">
        Admin users always have full access to everything regardless of User Access settings.
        Access controls only apply to Editor, Developer, and Viewer roles.
      </Callout>

      <Callout type="tip">
        A common pattern is to give Developers access to dev and staging infrastructure projects
        and deployment projects, while restricting production access to Editors or senior team
        members only. This prevents accidental production changes while keeping the team productive.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>User Access is additive — a user only sees resources explicitly granted to them. Nothing is visible by default for non-admin users until access is assigned.</li>
        <li>Access changes take effect immediately — the user does not need to log out and back in.</li>
        <li>Removing access to a project or resource removes it from the user's view instantly — any active session will no longer show the resource on next navigation.</li>
        <li>User Access works alongside roles — a user must have both the appropriate role capability and explicit resource access to perform an action.</li>
      </ul>

    </DocPage>
  );
}