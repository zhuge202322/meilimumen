import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths
export function generateStaticParams() {
  return [
    { category: "doors" },
    { category: "windows" },
    { category: "wardrobes" },
  ];
}

const categoryData = {
  doors: {
    title: "Premium Doors",
    description: "Discover our meticulously crafted solid wood and aluminum doors, combining security with timeless elegance.",
    images: Array.from({ length: 20 }, (_, i) => i === 18 ? `19.jpg` : `${i + 1}.png`),
    path: "门"
  },
  windows: {
    title: "High-Performance Windows",
    description: "Energy-efficient, durable, and beautifully designed windows that frame your world perfectly.",
    images: Array.from({ length: 11 }, (_, i) => `${i + 1}.png`),
    path: "窗"
  },
  wardrobes: {
    title: "Custom Cabinets & Wardrobes",
    description: "Bespoke storage solutions tailored to your space, crafted from the finest materials.",
    images: Array.from({ length: 10 }, (_, i) => `${i + 1}.png`),
    path: "柜子"
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = categoryData[params.category as keyof typeof categoryData];

  if (!data) {
    notFound();
  }

  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-edge max-w-container-max mx-auto">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-4 capitalize">{data.title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {data.images.map((img, index) => (
          <div key={index} className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-container ambient-shadow cursor-pointer">
            <Image 
              src={`/images/products/${data.path}/${img}`}
              alt={`${data.title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-surface-container-low p-12 rounded-2xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Found something you like?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">
          Contact our team for pricing, customization options, and to discuss your specific project requirements.
        </p>
        <Link href="/contact">
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded ambient-shadow-hover hover:bg-primary/95 transition-all">
            Request a Quote
          </button>
        </Link>
      </div>
    </main>
  );
}