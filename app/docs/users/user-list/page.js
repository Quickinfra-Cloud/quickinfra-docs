import DocPage, { SectionHeading, Callout } from "@/app/DocPage.js";
import { FiUsers } from "react-icons/fi";

export const metadata = {
  title: "User List — QuickInfra Docs",
  description: "Create and manage all users in your QuickInfra organisation — assign roles, activate or deactivate accounts.",
};

export default function UserListPage() {
  return (
    <DocPage
      sectionId="users"
      icon={FiUsers}
      title="User List"
      description="User List is the admin-only section for managing every user in your QuickInfra organisation. Create new users, assign roles, and control account status — all from one screen."
    >

      <SectionHeading>What is User List?</SectionHeading>
      <p>
        User List gives admin users full control over who has access to QuickInfra within your
        organisation. From here you can create new user accounts, assign appropriate roles,
        edit existing user details, and deactivate accounts when team members leave. Every
        person who needs access to QuickInfra must have an account created here by an admin.
      </p>

      <SectionHeading>User Roles</SectionHeading>
      <p>
        Every user in QuickInfra is assigned one of four roles. Each role defines what the user
        can see and do across the platform:
      </p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Admin</strong> — Full access to everything. Can create and manage users,
          configure cloud accounts, create and execute projects, manage all resources, and
          control user access permissions. There should be at least one admin per organisation.
        </li>
        <li>
          <strong>Editor</strong> — Can create, configure, and execute projects and manage
          resources. Cannot manage users or modify organisation-level settings.
        </li>
        <li>
          <strong>Developer</strong> — Can view and execute existing projects and resources
          but has limited ability to create or modify configurations. Suited for team members
          who run deployments but should not change infrastructure definitions.
        </li>
        <li>
          <strong>Viewer</strong> — Read-only access. Can browse projects, resources, and
          execution history but cannot make any changes or trigger executions. Suited for
          stakeholders who need visibility without operational access.
        </li>
      </ul>

      <Callout type="info">
        Role assignment controls what a user can see and do globally. For more granular control —
        such as restricting which specific projects or cloud accounts a user can access — use the
        <strong> User Access</strong> section in combination with roles.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Only admin users can access the User List section — it is not visible to other roles.</li>
        <li>Usernames cannot be changed after creation — set them correctly when creating the account.</li>
        <li>Deactivating a user immediately revokes their access — they cannot log in until reactivated.</li>
        <li>Role changes take effect on the user's next login — active sessions retain the previous role until they log out.</li>
      </ul>

    </DocPage>
  );
}