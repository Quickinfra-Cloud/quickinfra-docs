import DocPage, { Screenshot, SectionHeading, Callout } from "@/app/DocPage.js";
import { FiUser } from "react-icons/fi";

export const metadata = {
  title: "User Profile — QuickInfra Docs",
  description: "View and update your personal information, change your password, and configure MFA for your QuickInfra account.",
};

export default function UserProfilePage() {
  return (
    <DocPage
      sectionId="users"
      icon={FiUser}
      title="User Profile"
      description="User Profile shows your current account details and gives you control over your personal information and security settings. Update your name and email, set your locale, and enable or disable Multi-Factor Authentication for your login."
    >

      <SectionHeading>What is User Profile?</SectionHeading>
      <p>
        The User Profile page is scoped to the currently logged-in user. It shows your personal
        information as configured in the system and lets you update what is editable. It also
        gives you direct control over your account security through the MFA toggle — no admin
        involvement required to manage your own login security.
      </p>

      <Screenshot
        src="/user-profile.png"
        alt="User Profile page in QuickInfra showing personal information and MFA setup"
        caption="The User Profile screen — update personal information and configure Multi-Factor Authentication with a QR code scan."
      />

      <SectionHeading>Personal Information</SectionHeading>
      <p>
        You can update your <strong>First Name</strong>, <strong>Last Name</strong>, and
        <strong> Email Address</strong> at any time. Your <strong>Username</strong> is fixed
        at account creation and cannot be changed. Set your <strong>Locale</strong> to control
        the language used across the QuickInfra interface.
      </p>

      <SectionHeading>Multi-Factor Authentication</SectionHeading>
      <p>
        Toggle <strong>Multi-Factor Authentication (MFA)</strong> on or off from the Security
        Settings section. When you enable MFA, a QR code is displayed — scan it with any
        authenticator app such as Google Authenticator or Authy, then enter the 6-digit code
        to verify and activate. Once enabled, your account will require the MFA code on every
        login in addition to your password.
      </p>

      <Callout type="tip">
        Enabling MFA is strongly recommended for admin accounts. It prevents unauthorised
        access even if your password is compromised.
      </Callout>

      <Callout type="warning">
        If you lose access to your authenticator app with MFA enabled, contact your organisation
        admin to reset your account. There is no self-service recovery for MFA lockouts.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Username cannot be changed after account creation — choose it carefully when the account is first set up by an admin.</li>
        <li>MFA is per-user — each team member manages their own MFA setting independently from their profile.</li>
        <li>Changes to personal information take effect immediately after clicking <strong>Save Changes</strong>.</li>
      </ul>

    </DocPage>
  );
}