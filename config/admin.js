module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b2467409d3d3dbe90d37cd516db3c50'),
  },
});
