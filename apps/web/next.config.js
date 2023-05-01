module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  // rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/:path*",
  //         has: [
  //           {
  //             type: "host",
  //             value: "downloads.sunhouse.tech",
  //           },
  //         ],
  //         destination: "/downloads/:path*",
  //       },
  //     ],
  //   };
  // },
  redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "downloads.sunhouse.tech",
          },
        ],
        destination: "https://sunhouse.tech/downloads/:path*",
      },
    ];
  },
};
