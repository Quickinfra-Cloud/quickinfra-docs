import DocPage, { Screenshot, SectionHeading, Step, Callout } from "@/app/DocPage.js";
import { FiGitBranch } from "react-icons/fi";

export const metadata = {
  title: "CI/CD Pipelines — QuickInfra Docs",
  description: "Manage and monitor your AWS CI/CD pipelines — trigger runs, view history, and track execution status — all from QuickInfra.",
};

export default function CicdPipelinesPage() {
  return (
    <DocPage
      sectionId="projects"
      icon={FiGitBranch}
      title="CI/CD Pipelines"
      description="CI/CD Pipelines is your central dashboard for managing AWS-native continuous integration and delivery pipelines. Trigger pipeline runs, monitor execution history, investigate errors, and get a full view of every pipeline provisioned through your Infrastructure Projects — without switching to the AWS console."
    >

      <SectionHeading>What is CI/CD Pipelines?</SectionHeading>
      <p>
        The CI/CD Pipelines section surfaces all AWS CodePipeline pipelines that have been
        provisioned through QuickInfra Infrastructure Projects. The intended workflow is clear —
        you define and create your pipelines as part of an Infrastructure Project using AWS
        CodeCommit, CodeBuild, CodeDeploy, and CodePipeline modules, and then manage and monitor
        those pipelines here on an ongoing basis.
      </p>
      <p style={{ marginTop: 14 }}>
        From this section you can trigger pipeline executions manually, review the full run history
        for any pipeline, and drill into individual executions to see stage-by-stage results and
        identify the exact point and reason for any failure.
      </p>

      <Callout type="info">
        CI/CD Pipelines currently supports <strong>AWS CodePipeline</strong> — using CodeCommit
        for source, CodeBuild for build, and CodeDeploy for deployment stages. Support for
        additional providers such as GitHub Actions, GitLab CI, and Jenkins is coming in a
        future update.
      </Callout>

      <SectionHeading>The Intended Workflow</SectionHeading>
      <p>
        CI/CD Pipelines is a management layer, not a creation tool. Pipelines are created upstream
        in an <strong>Infrastructure Project</strong> using the AWS CodePipeline Terraform modules.
        Once provisioned, they appear here automatically, ready to be triggered and monitored.
      </p>
      <p style={{ marginTop: 14 }}>
        This separation keeps concerns clean — Infrastructure Projects handle provisioning, and
        CI/CD Pipelines handles day-to-day operations. You provision once, then manage continuously
        from this section without ever touching the infrastructure configuration again.
      </p>

      <SectionHeading>What You Can Do Here</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <li>
          <strong>Trigger a Pipeline</strong> — Manually kick off a pipeline execution from
          QuickInfra. Useful for re-running a deployment after a hotfix, or triggering a run
          outside of the automatic source-change trigger.
        </li>
        <li>
          <strong>View Execution History</strong> — See a chronological list of all past pipeline
          runs with their start time, duration, trigger source, and final status — Succeeded,
          Failed, or Stopped.
        </li>
        <li>
          <strong>Investigate Errors</strong> — Drill into any failed execution to see which
          stage failed — source, build, or deploy — and view the detailed error message and
          logs for that stage. This gives you a fast feedback loop without needing to navigate
          into the AWS console.
        </li>
        <li>
          <strong>View All Pipelines</strong> — See every CodePipeline pipeline across your
          connected AWS accounts that was created through an Infrastructure Project, with their
          current state and last execution result at a glance.
        </li>
      </ul>

      <SectionHeading>AWS Services Under the Hood</SectionHeading>
      <p>
        QuickInfra's CI/CD integration is built on four AWS native services that work together
        as a complete pipeline:
      </p>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
        <li><strong>AWS CodeCommit</strong> — Git-based source repository. Pipeline runs trigger automatically on code push.</li>
        <li><strong>AWS CodeBuild</strong> — Managed build service. Compiles code, runs tests, and produces deployment artifacts.</li>
        <li><strong>AWS CodeDeploy</strong> — Automated deployment service. Delivers build artifacts to EC2 instances, ECS, or Lambda.</li>
        <li><strong>AWS CodePipeline</strong> — Orchestration layer. Connects source, build, and deploy stages into a single automated workflow.</li>
      </ul>

      <Callout type="tip">
        If a pipeline is not appearing in this section, verify that it was provisioned through
        a QuickInfra Infrastructure Project and that the cloud account it belongs to is connected.
        Pipelines created directly in the AWS console are not automatically visible here.
      </Callout>

      <SectionHeading>Key Things to Know</SectionHeading>
      <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <li>Pipelines are provisioned through Infrastructure Projects — this section is for ongoing management only, not creation.</li>
        <li>Manual triggers from this section initiate a full pipeline run from the source stage, identical to an automatic trigger.</li>
        <li>Execution history is retained in AWS and surfaced here — the retention period depends on your AWS account settings.</li>
        <li>Support for additional CI/CD providers beyond AWS is on the roadmap and will be added in a future QuickInfra update.</li>
      </ul>

    </DocPage>
  );
}