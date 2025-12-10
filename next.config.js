// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             "www.reikicrystalproducts.com",
//             "ecomapi.ftdigitalsolutions.org",
//             "cdn.shopify.com",
//             "semantic-ui.com",
//             "cdn-icons-png.flaticon.com",
//         ],
//     },
//     async rewrites() {
//         return [
//             {
//                 source: "/robots.txt",
//                 destination: "/api/robots",
//             },
//             {
//                 source: "/sitemap.xml",
//                 destination: "/api/sitemap",
//             },
//         ];
//     },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.reikicrystalproducts.com",
      "ecomapi.ftdigitalsolutions.org",
      "cdn.shopify.com",
      "semantic-ui.com",
      "cdn-icons-png.flaticon.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomapi.ftdigitalsolutions.org",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "www.reikicrystalproducts.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "semantic-ui.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
