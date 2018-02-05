
import { startCluster } from 'egg';
startCluster({
  baseDir: __dirname,
  port: process.env.PORT,
  workers: process.env.WORKERS
});
