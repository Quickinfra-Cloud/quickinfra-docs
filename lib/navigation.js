import {
  FiGitBranch, FiServer, FiUpload, FiCloud, FiTool, FiMonitor,
  FiImage, FiHardDrive, FiWifi, FiShare2, FiDownload, FiCode,
  FiUser, FiUsers, FiUserPlus, FiMessageCircle, FiGift, FiSettings
} from "react-icons/fi";

export const navigation = [
  {
    id: "projects",
    name: "Projects",
    icon: FiServer,
    color: "#2563EB",
    items: [
      {
        id: "cicd-pipelines",
        text: "CI/CD Pipelines",
        href: "/docs/projects/cicd-pipelines",
        icon: FiGitBranch,
        shortDesc: "Automated build and deployment pipelines",
      },
      {
        id: "infrastructure-projects",
        text: "Infrastructure",
        href: "/docs/projects/infrastructure-projects",
        icon: FiServer,
        shortDesc: "Cloud infrastructure provisioning",
      },
      {
        id: "deployment-projects",
        text: "Deployment",
        href: "/docs/projects/deployment-projects",
        icon: FiUpload,
        shortDesc: "Application deployment management",
      },
    ],
  },
  {
    id: "manage",
    name: "Manage",
    icon: FiSettings,
    color: "#4F46E5",
    items: [
      {
        id: "cloud-accounts",
        text: "Cloud Accounts",
        href: "/docs/manage/cloud-accounts",
        icon: FiCloud,
        shortDesc: "Multi-cloud account management",
      },
      {
        id: "custom-scripts",
        text: "Custom Scripts",
        href: "/docs/manage/custom-scripts",
        icon: FiTool,
        shortDesc: "Installation and automation scripts",
      },
      {
        id: "vm-instances",
        text: "VM Instances",
        href: "/docs/manage/vm-instances",
        icon: FiMonitor,
        shortDesc: "Virtual machine lifecycle management",
      },
      {
        id: "vm-images",
        text: "VM Images",
        href: "/docs/manage/vm-images",
        icon: FiImage,
        shortDesc: "Custom machine image catalog",
      },
      {
        id: "disk-volumes",
        text: "Disk Volumes",
        href: "/docs/manage/disk-volumes",
        icon: FiHardDrive,
        shortDesc: "Persistent storage management",
      },
      {
        id: "networks",
        text: "Networks",
        href: "/docs/manage/networks",
        icon: FiWifi,
        shortDesc: "Virtual network infrastructure",
      },
      {
        id: "subnets",
        text: "Subnets",
        href: "/docs/manage/subnets",
        icon: FiShare2,
        shortDesc: "Network segmentation control",
      },
      {
        id: "vm-import",
        text: "VM Import",
        href: "/docs/manage/vm-import",
        icon: FiDownload,
        shortDesc: "Migrate VMs to cloud",
      },
      {
        id: "vm-export",
        text: "VM Export",
        href: "/docs/manage/vm-export",
        icon: FiUpload,
        shortDesc: "Export cloud VMs",
      },
      {
        id: "cloudformation-stacks",
        text: "CloudFormation Stacks",
        href: "/docs/manage/cloudformation-stacks",
        icon: FiCode,
        shortDesc: "AWS infrastructure as code",
      },
    ],
  },
  {
    id: "templates",
    name: "Templates",
    icon: FiCode,
    color: "#0891B2",
    items: [
      {
        id: "infrastructure-templates",
        text: "Infrastructure",
        href: "/docs/templates/infrastructure",
        icon: FiServer,
        shortDesc: "Reusable infrastructure configurations",
      },
      {
        id: "deployment-templates",
        text: "Deployment",
        href: "/docs/templates/deployment",
        icon: FiUpload,
        shortDesc: "Application deployment blueprints",
      },
      {
        id: "script-templates",
        text: "Custom Scripts",
        href: "/docs/templates/script-list",
        icon: FiTool,
        shortDesc: "Automation script library",
      },
    ],
  },
  {
    id: "users",
    name: "Users",
    icon: FiUsers,
    color: "#7C3AED",
    items: [
      {
        id: "user-profile",
        text: "User Profile",
        href: "/docs/users/profile",
        icon: FiUser,
        shortDesc: "Manage your account settings",
      },
      {
        id: "user-list",
        text: "User List",
        href: "/docs/users/user-list",
        icon: FiUsers,
        shortDesc: "Manage all system users",
      },
      {
        id: "user-access",
        text: "User Access",
        href: "/docs/users/user-access",
        icon: FiUserPlus,
        shortDesc: "Project-level permissions",
      },
      {
        id: "chat",
        text: "Chat",
        href: "/docs/users/chat",
        icon: FiMessageCircle,
        shortDesc: "Team communication",
      },
    ],
  },
  {
    id: "for-you",
    name: "For You",
    icon: FiGift,
    color: "#059669",
    items: [
      {
        id: "free-infra-template",
        text: "Free Infra Template",
        href: "/docs/for-you/free-infra-template",
        icon: FiGift,
        shortDesc: "Personalized infrastructure template at no cost",
      },
      {
        id: "services",
        text: "Services",
        href: "/docs/for-you/services",
        icon: FiTool,
        shortDesc: "Professional services and support",
      },
      {
        id: "additional-help",
        text: "Additional Help",
        href: "/docs/for-you/additional-help",
        icon: FiMessageCircle,
        shortDesc: "Get extra assistance from our team",
      },
    ],
  },
];

export const allPages = navigation.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    section: section.name,
    sectionId: section.id,
  }))
);