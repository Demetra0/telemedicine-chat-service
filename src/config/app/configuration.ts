import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  env: process.env.APP_ENV,
  debug: process.env.APP_DEBUG,
  port: process.env.APP_HTTP_PORT,
  wsPort: process.env.APP_WS_PORT,
}));
