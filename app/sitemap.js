export default function sitemap() {
  const base = "https://docs.quickinfra.cloud";

  const routes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/docs/projects/cicd-pipelines`,           priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/projects/infrastructure-projects`,  priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/projects/deployment-projects`,      priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/cloud-accounts`,             priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/custom-scripts`,             priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/vm-instances`,               priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/vm-images`,                  priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/disk-volumes`,               priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/networks`,                   priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/subnets`,                    priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/vm-import`,                  priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/vm-export`,                  priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/manage/cloudformation-stacks`,      priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/templates/infrastructure`,          priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/templates/deployment`,              priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/templates/script-list`,             priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/docs/users/profile`,                     priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/users/user-list`,                   priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/users/user-access`,                 priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/users/chat`,                        priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/for-you/free-infra-template`,       priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/for-you/services`,                  priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/docs/for-you/additional-help`,           priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
