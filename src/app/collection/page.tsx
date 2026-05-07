import React from 'react';

export default function Collection() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
      
{/*  TopNavBar  */}

{/*  Main Layout  */}
<main className="flex-grow pt-[120px] px-margin-edge max-w-container-max mx-auto w-full flex gap-gutter">
{/*  Sidebar Filter (SideNavBar Hybrid)  */}
<aside className="w-64 flex-shrink-0 hidden md:block">
<div className="sticky top-[120px]">
<div className="mb-8">
<h2 className="font-headline-md text-headline-md text-primary mb-2">Solid Wood Collection</h2>
<p className="text-on-surface-variant text-sm">Explore our curated selection of premium architectural elements.</p>
</div>
{/*  Breadcrumbs  */}
<nav className="flex text-sm text-on-surface-variant mb-8 gap-2 items-center">
<a className="hover:text-primary transition-colors" href="#">Catalog</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-primary font-medium">Doors</span>
</nav>
<div className="space-y-8">
{/*  Filter Section: Material  */}
<div>
<h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-surface-variant pb-2">Material</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Oak</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Walnut</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Pine</span>
</label>
</div>
</div>
{/*  Filter Section: Style  */}
<div>
<h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-surface-variant pb-2">Style</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Classic</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Modern</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent transition-colors group-hover:border-primary" type="checkbox"/>
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Rustic</span>
</label>
</div>
</div>
{/*  Filter Section: Price Range  */}
<div>
<h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-surface-variant pb-2">Price Range</h3>
<div className="flex items-center gap-2">
<input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-1 py-1 text-sm transition-colors placeholder:text-outline-variant" placeholder="Min" type="text"/>
<span className="text-outline-variant">-</span>
<input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-1 py-1 text-sm transition-colors placeholder:text-outline-variant" placeholder="Max" type="text"/>
</div>
</div>
</div>
</div>
</aside>
{/*  Product Grid Content  */}
<section className="flex-grow pb-section-gap">
<div className="flex justify-between items-end mb-8">
<h1 className="font-headline-xl text-headline-xl text-primary">Solid Wood Collection</h1>
<div className="text-on-surface-variant text-sm">Showing 1-9 of 42 results</div>
</div>
{/*  Bento-style Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Product Card 1  */}
<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(54,33,21,0.08)]">
<div className="relative h-[320px] overflow-hidden bg-surface-variant">
<img alt="Solid Walnut Door" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-end, minimalist photograph of a solid walnut interior door in a brightly lit, modern living space. The wood grain is rich and tactile, contrasting gently with a cream-colored wall. Soft, diffused daylight highlights the brushed brass handle. The overall aesthetic is warm, hygge, and distinctly premium." src="/images/products/门/4.png"/>
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-label-caps text-outline mb-1">Walnut • Modern</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Heritage Walnut Door</h3>
<p className="text-on-surface-variant text-sm mb-6 flex-grow">Seamless grain flow with hidden hinges for a truly minimalist profile.</p>
<div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-surface-variant">
<button className="text-primary font-label-caps text-label-caps hover:opacity-70 transition-opacity flex items-center gap-1">
                                Inquiry <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-4 py-2 rounded hover:bg-outline-variant transition-colors">
                                Add to Cart
                             </button>
</div>
</div>
</div>
{/*  Product Card 2  */}
<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(54,33,21,0.08)]">
<div className="relative h-[320px] overflow-hidden bg-surface-variant">
<img alt="Oak Wine Cabinet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated lifestyle shot showing a bespoke oak wine cabinet integrated into a minimalist dining room. The natural light from an unseen window casts soft ambient shadows across the textured wood. The palette is dominated by creamy neutrals and deep earthy browns, exuding a tactile minimalism." src="/images/products/门/5.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-label-caps text-outline mb-1">Oak • Classic</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Sommelier Oak Cabinet</h3>
<p className="text-on-surface-variant text-sm mb-6 flex-grow">Climate-controlled interior wrapped in traditionally joined white oak.</p>
<div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-surface-variant">
<button className="text-primary font-label-caps text-label-caps hover:opacity-70 transition-opacity flex items-center gap-1">
                                Inquiry <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-4 py-2 rounded hover:bg-outline-variant transition-colors">
                                Add to Cart
                             </button>
</div>
</div>
</div>
{/*  Product Card 3  */}
<div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(54,33,21,0.08)] lg:col-span-1 md:col-span-2">
<div className="relative h-[320px] overflow-hidden bg-surface-variant">
<img alt="Pine Window Frame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A detailed close-up of a massive reclaimed pine window frame in a sun-drenched architectural space. The wood shows subtle rustic character, contrasting with the stark, clean lines of the contemporary glass pane. The lighting is bright and ethereal, emphasizing the organic warmth of the timber against a pristine background." src="/images/products/门/6.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-label-caps text-outline mb-1">Pine • Rustic</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Arbor Window Frame</h3>
<p className="text-on-surface-variant text-sm mb-6 flex-grow">Expansive views framed by sustainably sourced, thermally modified pine.</p>
<div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-surface-variant">
<button className="text-primary font-label-caps text-label-caps hover:opacity-70 transition-opacity flex items-center gap-1">
                                Inquiry <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-4 py-2 rounded hover:bg-outline-variant transition-colors">
                                Add to Cart
                             </button>
</div>
</div>
</div>
</div>
{/*  Pagination / Load More  */}
<div className="mt-16 flex justify-center">
<button className="border border-outline-variant text-primary font-label-caps text-label-caps px-8 py-3 rounded-full hover:bg-surface-container transition-colors">
                    Load More Pieces
                </button>
</div>
</section>
</main>
{/*  Footer  */}


    </div>
  );
}
