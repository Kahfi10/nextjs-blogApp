import { title } from "process"

type DetailBlog = {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    alt: string;
    desc: string;
}

export const DETAIL_BLOG: DetailBlog[] = [
    {
        title: "Pantai Tanjung Bira",
        subtitle: "Keindahan Alam",
        content: "Pantai Tanjung Bira adalah salah satu pantai yang terletak di Sulawesi Selatan. Pantai ini terkenal dengan pasir putihnya yang halus dan air lautnya yang jernih.",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/11/25/WhatsApp-Image-2024-11-22-at-110245-1797242786.jpeg",
        alt: "Pantai Tanjung Bira",
        desc: "Pantai yang indah"
    },
    {
        title: "Tebing Appalarang",
        subtitle: "Keindahan Alam",
        content: "Tebing Appalarang adalah salah satu tebing yang terletak di Sulawesi Selatan. Tebing ini terkenal dengan pemandangan alamnya yang menakjubkan.",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/11/25/WhatsApp-Image-2024-11-22-at-110245-1797242786.jpeg",
        alt: "Tebing Appalarang",
        desc: "Tebing yang indah"
    },
]