module.exports = {
  async headers() {
    return [
      {
        source: "/fonts/IntegralCF-Bold.otf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

