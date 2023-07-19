import { registerMicroApps, start } from "qiankun";

const loader = (loading: boolean) => {
  console.log(loading);
}

registerMicroApps([
  {
    name: "micro-vue2",
    entry: "//localhost:20000",
    container: "#container",
    activeRule: "/vue2",
    loader
  },
  {
    name: "micro-vue3",
    entry: "//localhost:30000",
    container: "#container",
    activeRule: "/vue3",
    loader
  },
  {
    name: "micro-react",
    entry: "//localhost:40000",
    container: "#container",
    activeRule: "/react",
    loader
  },
]);

start();
