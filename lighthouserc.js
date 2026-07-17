// Lighthouse CI config. No performance assertions/thresholds are set yet —
// those get written after running a baseline against real PrimeKar pages.
// For now this just collects and stores results so a baseline can be run on
// demand via `pnpm lighthouse`.
module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      url: ["http://localhost:3000"],
      numberOfRuns: 3,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
