import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SARATHI Emergency Navigation",
    short_name: "SARATHI",
    description: "AI-powered emergency response platform for ambulance, police, and fire services.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#991b1b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/x-icon",
        purpose: "any maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/x-icon",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "Emergency SOS",
        short_name: "SOS",
        description: "Open SOS screen instantly",
        url: "/public-sos?quick=1",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "96x96",
            type: "image/x-icon",
          },
        ],
      },
      {
        name: "Driver Login",
        short_name: "Driver",
        description: "Open driver login",
        url: "/driver-login",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "96x96",
            type: "image/x-icon",
          },
        ],
      },
    ],
  };
}
