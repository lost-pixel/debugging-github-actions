import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    baseUrl: "http://localhost:5173",
    pages: [
      {
        path: "/",
        name: "app",
      },
    ],
  },
  generateOnly: true,
  failOnDifference: true,
};
