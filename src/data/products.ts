export interface LocalProduct {
  id: string; // e.g. "door-1", "window-1"
  name: string;
  categorySlug: 'interior-doors' | 'wine-cabinets' | 'wardrobes' | 'windows';
  categoryName: string;
  desc: string;
  longDesc: string;
  images: string[];
  detailImages: string[];
}

export const localCategories = [
  { id: 101, name: "Interior Doors", slug: "interior-doors", image: "/images/products-local/门-1/主图-1.png" },
  { id: 102, name: "Wine Cabinets", slug: "wine-cabinets", image: "/images/products-local/柜-1/主图-1.jpg" },
  { id: 103, name: "Wardrobes", slug: "wardrobes", image: "/images/products-local/柜-2/主图-1.png" },
  { id: 104, name: "Windows", slug: "windows", image: "/images/products-local/窗-1/主图-1.png" },
];

export const localProducts: LocalProduct[] = [
  // 门 (Doors)
  {
    id: "door-1",
    name: "Arched Architrave Solid Wood Door",
    categorySlug: "interior-doors",
    categoryName: "Interior Doors",
    desc: "Bespoke solid wood door with handcrafted architrave profiling and arched glass panels.",
    longDesc: "Expertly crafted from premium selected solid timber, this door features double architrave styling, exquisite grain matching, and multi-step manual finishes. Outfitted with high-durability hardware and acoustic seals to meet international standards.",
    images: [
      "/images/products-local/门-1/主图-1.png",
      "/images/products-local/门-1/主图-2.png",
      "/images/products-local/门-1/主图-3.png",
      "/images/products-local/门-1/主图-4.png",
      "/images/products-local/门-1/主图-5.png",
      "/images/products-local/门-1/主图-6.png",
      "/images/products-local/门-1/主图-7.png"
    ],
    detailImages: [
      "/images/products-local/门-1/详情页-1.png",
      "/images/products-local/门-1/详情页-2.png",
      "/images/products-local/门-1/详情页-3.png",
      "/images/products-local/门-1/详情页-4.png"
    ]
  },
  {
    id: "door-2",
    name: "Minimalist Walnut Fluted Door",
    categorySlug: "interior-doors",
    categoryName: "Interior Doors",
    desc: "Sleek and contemporary flat-panel door combining minimalist lines with natural wood warmth.",
    longDesc: "This interior door showcases a perfect fusion of modern minimalist architecture with classic wood joinery. Structured with a high-density core for acoustic damping and faced with premium walnut veneers. Finished with a multi-layered ultra-matte eco-friendly coating.",
    images: [
      "/images/products-local/门-2/主图-1.png",
      "/images/products-local/门-2/主图-2.png",
      "/images/products-local/门-2/主图-3.png",
      "/images/products-local/门-2/主图-4.png",
      "/images/products-local/门-2/主图-5.png",
      "/images/products-local/门-2/主图-6.png",
      "/images/products-local/门-2/主图-7.png",
      "/images/products-local/门-2/主图-8.png"
    ],
    detailImages: [
      "/images/products-local/门-2/详情页-1.png",
      "/images/products-local/门-2/详情页-2.png",
      "/images/products-local/门-2/详情页-3.png",
      "/images/products-local/门-2/详情页-4.png",
      "/images/products-local/门-2/详情页-5.png",
      "/images/products-local/门-2/详情页-6.png"
    ]
  },
  {
    id: "door-3",
    name: "Arched Glass Panel French Door",
    categorySlug: "interior-doors",
    categoryName: "Interior Doors",
    desc: "Elegant French door design featuring custom arched glazing and dual-tone wood frames.",
    longDesc: "A timeless masterpiece designed to connect living spaces with natural light. Featuring CNC-milled arched muntins, high-transparency tempered glass, and premium mortise-and-tenon construction. Double-sealed boundaries prevent drafts and reduce noise transfer.",
    images: [
      "/images/products-local/门-3/主图-1.png",
      "/images/products-local/门-3/主图-2.png",
      "/images/products-local/门-3/主图-3.png",
      "/images/products-local/门-3/主图-4.png",
      "/images/products-local/门-3/主图-5.png",
      "/images/products-local/门-3/主图-6.png",
      "/images/products-local/门-3/主图-7.png"
    ],
    detailImages: [
      "/images/products-local/门-3/详情图-1.png",
      "/images/products-local/门-3/详情图-2.png",
      "/images/products-local/门-3/详情图-3.png",
      "/images/products-local/门-3/详情图-4.png"
    ]
  },
  {
    id: "door-4",
    name: "Luxury Framed Double Arch Door",
    categorySlug: "interior-doors",
    categoryName: "Interior Doors",
    desc: "Grand double-entry wood door featuring prominent arched symmetry and textured wood panels.",
    longDesc: "Designed as an iconic centerpiece for luxury homes. Constructed with reinforced solid timber stiles and rails to prevent warping, paired with custom-selected hardware and deep arch molding. Every single panel is hand-carved and hand-fitted by master craftsmen.",
    images: [
      "/images/products-local/门-4/主图-1.png",
      "/images/products-local/门-4/主图-2.png",
      "/images/products-local/门-4/主图-3.png",
      "/images/products-local/门-4/主图-4.png",
      "/images/products-local/门-4/主图-5.png",
      "/images/products-local/门-4/主图-6.png",
      "/images/products-local/门-4/主图-7.png"
    ],
    detailImages: [
      "/images/products-local/门-4/详情图-1.png",
      "/images/products-local/门-4/详情图-2.png",
      "/images/products-local/门-4/详情图-3.png",
      "/images/products-local/门-4/详情图-4.png",
      "/images/products-local/门-4/详情图-5.png",
      "/images/products-local/门-4/详情图-6.png",
      "/images/products-local/门-4/详情图-7.png",
      "/images/products-local/门-4/详情图-8.png",
      "/images/products-local/门-4/详情图-9.png"
    ]
  },

  // 窗 (Windows)
  {
    id: "window-1",
    name: "High-Performance Casement Window",
    categorySlug: "windows",
    categoryName: "Windows",
    desc: "Energy-efficient casement window utilizing thermal-break technology and multi-point locking.",
    longDesc: "Engineered to withstand extreme weather conditions, this window utilizes ultra-durable thermal-break aluminum profiles, premium EPDM seals, and triple-glazed argon-filled acoustic glass. Ideal for passive house and high-comfort modern residences.",
    images: [
      "/images/products-local/窗-1/主图-1.png",
      "/images/products-local/窗-1/主图-2.png",
      "/images/products-local/窗-1/主图-3.png",
      "/images/products-local/窗-1/主图-4.png",
      "/images/products-local/窗-1/主图-5.png",
      "/images/products-local/窗-1/主图-6.png"
    ],
    detailImages: [
      "/images/products-local/窗-1/详情图-1.png",
      "/images/products-local/窗-1/详情图-2.png",
      "/images/products-local/窗-1/详情图-3.png",
      "/images/products-local/窗-1/详情图-4.png",
      "/images/products-local/窗-1/详情图-5.png"
    ]
  },
  {
    id: "window-2",
    name: "Panoramic Sliding Patio Window",
    categorySlug: "windows",
    categoryName: "Windows",
    desc: "Ultra-slim frame sliding window system designed for wide panoramic outdoor views.",
    longDesc: "A architectural system featuring nested, minimal-width aluminum stiles and high-durability rollers that glide effortlessly. Designed for wide openings and floor-to-ceiling installations, offering outstanding thermal efficiency and acoustic insulation.",
    images: [
      "/images/products-local/窗-2/主图-1.png",
      "/images/products-local/窗-2/主图-2.png",
      "/images/products-local/窗-2/主图-3.png"
    ],
    detailImages: [
      "/images/products-local/窗-2/详情图-1.png",
      "/images/products-local/窗-2/详情图-2.png",
      "/images/products-local/窗-2/详情图-3.png",
      "/images/products-local/窗-2/详情图-4.png"
    ]
  },
  {
    id: "window-3",
    name: "Acoustic System Window",
    categorySlug: "windows",
    categoryName: "Windows",
    desc: "Acoustically optimized window system with integrated drainage and premium seal gaskets.",
    longDesc: "Featuring deep-cavity profile sections, high-grade acoustic dampening materials, and complex hidden drainage pathways. This window is specifically designed for urban high-noise environments where calm, comfort and energy-saving insulation are required.",
    images: [
      "/images/products-local/窗-3/主图-1.png",
      "/images/products-local/窗-3/主图-2.png",
      "/images/products-local/窗-3/主图-3.png"
    ],
    detailImages: [
      "/images/products-local/窗-3/详情图-1.png",
      "/images/products-local/窗-3/详情图-2.png",
      "/images/products-local/窗-3/详情图-3.png",
      "/images/products-local/窗-3/详情图-4.png"
    ]
  },

  // 柜 (Cabinets)
  {
    id: "cabinet-1",
    name: "Bespoke Arched Alcove Wine Cellar",
    categorySlug: "wine-cabinets",
    categoryName: "Wine Cabinets",
    desc: "Luxury arched solid wood wine cabinet integrated with subtle ambient LED strip lighting.",
    longDesc: "Designed for premium residences, this built-in wine alcove features multi-tier oak bottle holders, integrated dimmable LED backlighting, and custom cabinet doors. Handcrafted joinery and premium hinges ensure long-lasting luxury.",
    images: [
      "/images/products-local/柜-1/主图-1.jpg",
      "/images/products-local/柜-1/主图-2.jpg",
      "/images/products-local/柜-1/主图-3.jpg",
      "/images/products-local/柜-1/主图-4.jpg",
      "/images/products-local/柜-1/主图-5.jpg",
      "/images/products-local/柜-1/主图-6.jpg",
      "/images/products-local/柜-1/主图-7.jpg",
      "/images/products-local/柜-1/主图-8.jpg",
      "/images/products-local/柜-1/主图-9.jpg"
    ],
    detailImages: [
      "/images/products-local/柜-1/详情图-1.jpg",
      "/images/products-local/柜-1/详情图-2.jpg",
      "/images/products-local/柜-1/详情图-3.jpg",
      "/images/products-local/柜-1/详情图-4.jpg",
      "/images/products-local/柜-1/详情图-5.jpg",
      "/images/products-local/柜-1/详情图-6.jpg",
      "/images/products-local/柜-1/详情图-7.jpg",
      "/images/products-local/柜-1/详情图-8.jpg"
    ]
  },
  {
    id: "cabinet-2",
    name: "Premium Walk-in Wardrobe System",
    categorySlug: "wardrobes",
    categoryName: "Wardrobes",
    desc: "Fully-customized luxury walk-in wardrobe utilizing eco-friendly boards and modular design.",
    longDesc: "Crafted to maximize storage while maintaining high architectural elegance. Incorporates metal structural frames, solid wood drawer boxes, custom organizing dividers, and custom-selected glass drawer fronts. Complete with luxury soft-close sliders.",
    images: [
      "/images/products-local/柜-2/主图-1.png",
      "/images/products-local/柜-2/主图-2.png",
      "/images/products-local/柜-2/主图-3.png",
      "/images/products-local/柜-2/主图-4.png",
      "/images/products-local/柜-2/主图-5.png",
      "/images/products-local/柜-2/主图-6.png",
      "/images/products-local/柜-2/主图-7.png",
      "/images/products-local/柜-2/主图-8.png",
      "/images/products-local/柜-2/主图-9.png"
    ],
    detailImages: [
      "/images/products-local/柜-2/详情图-1.png",
      "/images/products-local/柜-2/详情图-2.png",
      "/images/products-local/柜-2/详情图-3.png",
      "/images/products-local/柜-2/详情图-4.png",
      "/images/products-local/柜-2/详情图-5.png"
    ]
  },
  {
    id: "cabinet-3",
    name: "Contemporary Integrated Cabinet System",
    categorySlug: "wardrobes",
    categoryName: "Wardrobes",
    desc: "Modular contemporary cabinet solution designed for high-density modern storage.",
    longDesc: "Crafted from heavy-duty engineered wood panels, featuring smooth scratch-resistant finishes, solid wood trims, and heavy-duty modular shelves. Specifically treated for high-humidity environments, keeping your clothes and items safe from mildew.",
    images: [
      "/images/products-local/柜-3/主图-1.jpg",
      "/images/products-local/柜-3/主图-2.jpg",
      "/images/products-local/柜-3/主图-3.jpg",
      "/images/products-local/柜-3/主图-4.jpg"
    ],
    detailImages: [
      "/images/products-local/柜-3/详情图-1.jpg",
      "/images/products-local/柜-3/详情图-2.jpg",
      "/images/products-local/柜-3/详情图-3.jpg",
      "/images/products-local/柜-3/详情图-4.jpg",
      "/images/products-local/柜-3/详情图-5.jpg",
      "/images/products-local/柜-3/详情图-6.jpg"
    ]
  }
];
