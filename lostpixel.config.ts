import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    baseUrl: "http://172.17.0.1:5173",
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
