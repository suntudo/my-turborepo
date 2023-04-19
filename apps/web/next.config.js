module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  rewrites() {
    beforeFiles: [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "downloads.sunhouse.tech",
          },
        ],
        destination: "/downloads/:path*",
      },
    ];
  },
  redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
