import '../bootstrap';

export default {
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: false,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
  default: {
    from: process.env.MAILER_USER,
  },
};
