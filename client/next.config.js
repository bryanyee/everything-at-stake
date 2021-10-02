module.exports = {
  // Awaiting officiak fix for scroll restoration on back/forward navigation
  // https://github.com/vercel/next.js/issues/20951
  // https://mmazzarolo.com/blog/2021-04-10-nextjs-scroll-restoration/
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
}
