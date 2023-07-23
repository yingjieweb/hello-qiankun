import { registerMicroApps, start } from "qiankun";

interface MicroAppConfig {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  loader?: (loading: boolean) => void;
}

// Define the micro-apps
const microApps: MicroAppConfig[] = [
  {
    name: "micro-app-vue2",
    entry: "//localhost:8080",
    container: "#microContainer",
    activeRule: "/vue2",
    loader: (loading: boolean) => {
      console.log("loading", loading);
    },
  },
];

registerMicroApps(microApps, {
  beforeLoad: [async (app) => console.log("beforeLoad", app.name)],
  beforeMount: [async (app) => console.log("beforeLoad", app.name)],
  afterMount: [async (app) => console.log("beforeLoad", app.name)],
});

start();
