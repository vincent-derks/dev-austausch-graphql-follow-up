module.exports = {
  reactStrictMode: true,
  images: {
    domains: Array.from(
      { length: 10 },
      (_, index) => `media${index}.giphy.com`
    ),
  },
};
