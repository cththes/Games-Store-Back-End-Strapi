module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3788d017f1b326c641c515b096adc548'),
  },
});
