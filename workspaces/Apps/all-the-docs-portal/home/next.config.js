const { NPMJS_DOCS_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/npmjs',
        destination: `${NPMJS_DOCS_URL}/npmjs`,
      },
      {
        source: '/npmjs/:path*',
        destination: `${NPMJS_DOCS_URL}/npmjs/:path*`,
      },
    ]
  },
}
