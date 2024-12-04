import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Orda Menu",
        short_name: "OrdaPWA",
        description: "Orda Restaurant Menu",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
            {
                src: "/logo-192x192.jpg",
                sizes: "192x192",
                type: "image/jpg",
            },
            {
                src: "/logo-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
