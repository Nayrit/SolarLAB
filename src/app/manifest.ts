import type { MetadataRoute } from "next";
import { SITE, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2f0",
    theme_color: "#0a7a4b",
    lang: "en",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    id: SITE_URL,
  };
}
