import DocPage, { Screenshot, SectionHeading, Callout } from "@/app/DocPage.js";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  title: "Chat — QuickInfra Docs",
  description: "A real-time broadcast chat for your entire organisation — share updates, send alerts, and keep your team informed inside QuickInfra.",
};

export default function ChatPage() {
  return (
    <DocPage
      sectionId="users"
      icon={FiMessageCircle}
      title="Chat"
      description="Chat is a real-time broadcast channel for everyone in your QuickInfra organisation. Use it to share important updates, coordinate on active deployments, send alerts to the team, and keep everyone on the same page — all without leaving the platform."
    >

      <SectionHeading>What is Chat?</SectionHeading>
      <p>
        Chat is a team-wide broadcast channel built directly into QuickInfra. Every user in
        your organisation can see and send messages in real time. Think of it as a shared
        ops channel — a single place where your team communicates about infrastructure
        activities, deployment windows, access requests, and anything else the whole team
        needs to know.
      </p>
      <p style={{ marginTop: 14 }}>
        Because it lives inside QuickInfra alongside your projects and resources, Chat is
        particularly useful for coordinating around live activities — announcing a production
        deployment, flagging a failed pipeline run, or asking colleagues to check a specific
        resource — all in the same context where the work is happening.
      </p>

      <Screenshot
        src="/team-chat.png"
        alt="QuickInfra team broadcast chat showing real-time messages"
        caption="The Chat screen — a real-time broadcast channel for your entire organisation. All users see all messages instantly."
      />

      <SectionHeading>How to Use Chat</SectionHeading>
      <p>
        Navigate to <strong>Users → Chat</strong>. The broadcast channel loads with the full
        message history visible. Type your message in the input field at the bottom and press
        send — your message is delivered instantly to every connected user in your organisation.
        The <strong>Connected</strong> indicator confirms your real-time connection is active.
      </p>

      <Callout type="info">
        Chat is a broadcast channel — all messages are visible to every user in your organisation.
        It is designed for team-wide communication and operational coordination, not private
        one-to-one conversations.
      </Callout>

      <SectionHeading>Common Use Cases</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
        <li><strong>Deployment announcements</strong> — Notify the team before triggering a production deployment so others are aware of potential impact.</li>
        <li><strong>Access requests</strong> — Ask an admin to grant access to a specific project or cloud account directly in the channel.</li>
        <li><strong>Incident alerts</strong> — Quickly alert the team when a pipeline fails, a server goes down, or an unexpected change is detected.</li>
        <li><strong>General coordination</strong> — Coordinate work across team members who are operating in different parts of the platform simultaneously.</li>
      </ul>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Messages are visible to all users in your organisation — there are no private or direct message channels.</li>
        <li>The <strong>Connected</strong> status indicator confirms your real-time WebSocket connection is active. If it shows disconnected, refresh the page to reconnect.</li>
        <li>All users regardless of role can send and read messages in Chat.</li>
      </ul>

    </DocPage>
  );
}