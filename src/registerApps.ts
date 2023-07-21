import { registerMicroApps, start } from 'qiankun';

interface SubAppConfig {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  loader?: (loading: boolean) => void;
}

// Define the sub-apps
const microApps: SubAppConfig[] = [
  {
    name: 'sub-app-vue2',
    entry: '//localhost:8080/',
    container: '#container',
    activeRule: '/vue2',
    loader: (loading: boolean) => {
      console.log('loading', loading);
    },
  },
];

registerMicroApps(microApps);

start();
