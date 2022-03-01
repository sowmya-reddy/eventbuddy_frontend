import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8SHiPo3YzQEpf2K1Z1JiAP",  // ID of a project you are using
      token: "imafhTTbe0KeXECd6PytJH5uIOB7gNx7LI3S76BfWMpuGSZbwIn0K7sbh5uC52qtWELe8kcni3HzhQq9oZDg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})