import React from 'react';

export default function Orders() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased">
      
{/*  TopNavBar  */}

{/*  Main Content Layout  */}
<div className="flex-grow pt-24 max-w-container-max mx-auto w-full px-margin-edge pb-section-gap flex flex-col lg:flex-row gap-gutter">
{/*  SideNav (Dashboard Context)  */}
<aside className="hidden lg:flex flex-col w-64 flex-shrink-0 space-y-8">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-2">My Account</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your bespoke orders</p>
</div>
<nav className="flex flex-col space-y-2">
<a className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:translate-x-1 transition-transform duration-200 ease-out font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined">person</span>
<span>Profile</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg bg-secondary-container text-on-secondary-container font-bold font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined" data-weight="fill">inventory_2</span>
<span>Order History</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:translate-x-1 transition-transform duration-200 ease-out font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined">favorite</span>
<span>Saved Designs</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant hover:translate-x-1 transition-transform duration-200 ease-out font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
</aside>
{/*  Main Canvas  */}
<main className="flex-grow flex flex-col space-y-12">
{/*  Page Header  */}

{/*  Active Orders Area  */}
<section className="space-y-6">
<h2 className="font-headline-lg text-headline-lg text-primary">Active Commissions</h2>
{/*  Order Card 1: Processing  */}
<div className="bg-surface-container-lowest ambient-shadow rounded-lg p-8 flex flex-col md:flex-row gap-8">
{/*  Image Area  */}
<div className="w-full md:w-1/3 aspect-[4/3] rounded overflow-hidden relative bg-surface-variant">
<img alt="Custom Walnut Wine Cabinet" className="object-cover w-full h-full" data-alt="A meticulously crafted custom walnut wine cabinet in a softly lit artisan workshop. Wood shavings rest on a sturdy workbench nearby. The lighting is warm and directional, emphasizing the rich, deep grain of the wood and the tactile minimalist aesthetic. The overall mood conveys heritage craftsmanship and quiet dedication." src="/images/products/门/12.png"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded font-label-caps text-label-caps text-primary border border-primary/20">
                            Processing
                        </div>
</div>
{/*  Details Area  */}
<div className="w-full md:w-2/3 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Custom Walnut Wine Cabinet</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Order #LX-9402 • Placed Oct 12, 2024</p>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-primary">$4,200</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-surface-container-low p-4 rounded">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Estimated Completion</p>
<p className="font-body-lg text-body-lg text-primary">Nov 28, 2024</p>
</div>
<div className="bg-surface-container-low p-4 rounded">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Artisan Assigned</p>
<p className="font-body-lg text-body-lg text-primary">Elias Thorne</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 items-center">
<button className="bg-primary text-on-primary font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-tint transition-colors ambient-shadow flex items-center space-x-2 uppercase">
<span className="material-symbols-outlined text-[18px]">build</span>
<span>View Workshop Notes</span>
</button>
<button className="bg-transparent border border-outline text-primary font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-container transition-colors flex items-center space-x-2 uppercase">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Invoice</span>
</button>
</div>
</div>
</div>
{/*  Order Card 2: Shipped  */}
<div className="bg-surface-container-lowest ambient-shadow rounded-lg p-8 flex flex-col md:flex-row gap-8">
{/*  Image Area  */}
<div className="w-full md:w-1/3 aspect-[4/3] rounded overflow-hidden relative bg-surface-variant">
<img alt="Heritage Oak Entry Door" className="object-cover w-full h-full" data-alt="A massive heritage oak entry door with minimalist brushed brass hardware, leaning against an off-white gallery wall. The wood shows natural knots and a soft, matte finish. Natural sunlight streams from a nearby window, casting soft ambient shadows that highlight the tactile quality of the piece. The setting is clean, modern, and serene." src="/images/factory/工厂照片/3.jpg"/>
<div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container backdrop-blur px-3 py-1 rounded font-label-caps text-label-caps border border-tertiary/20">
                            Shipped
                        </div>
</div>
{/*  Details Area  */}
<div className="w-full md:w-2/3 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Heritage Oak Entry Door</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Order #LX-9388 • Placed Sep 04, 2024</p>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-primary">$2,850</p>
</div>
</div>
<div className="bg-surface-container-low p-4 rounded mb-6 flex items-center justify-between border-l-4 border-tertiary">
<div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Tracking Number</p>
<p className="font-body-lg text-body-lg text-primary font-mono tracking-widest">LX-FRT-99201A</p>
</div>
<div className="text-right">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Expected Delivery</p>
<p className="font-body-lg text-body-lg text-primary">Oct 26, 2024</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 items-center">
<button className="bg-primary text-on-primary font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-tint transition-colors ambient-shadow flex items-center space-x-2 uppercase">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
<span>Track Shipment</span>
</button>
<button className="bg-transparent border border-outline text-primary font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-container transition-colors flex items-center space-x-2 uppercase">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Invoice</span>
</button>
</div>
</div>
</div>
</section>
{/*  Past Orders Area  */}
<section className="space-y-6 pt-8 border-t border-surface-variant">
<h2 className="font-headline-lg text-headline-lg text-primary">Past Acquisitions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Past Order Card 1  */}
<div className="bg-surface-container-lowest ambient-shadow rounded-lg p-6 border border-surface-variant">
<div className="flex gap-4 items-start mb-4">
<div className="w-24 h-24 rounded overflow-hidden bg-surface-variant flex-shrink-0">
<img alt="Minimalist Ash Wardrobe" className="object-cover w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" data-alt="A minimalist ash wood wardrobe standing in a bright, airy bedroom with cream-colored walls. The wood has a pale, soft tone. Sunlight creates gentle tonal layers across the smooth surface. The overall style is tactile minimalism with a deep sense of hygge warmth and tranquility." src="/images/factory/工厂照片/4.jpg"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[20px]">Minimalist Ash Wardrobe</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 text-sm">Order #LX-8912 • Delivered May 2024</p>
<span className="inline-block mt-2 text-xs font-label-caps text-label-caps bg-surface-container-high text-on-surface px-2 py-1 rounded">Delivered</span>
</div>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-surface-variant">
<button className="text-primary font-label-caps text-label-caps hover:text-surface-tint transition-colors flex items-center space-x-1 uppercase">
<span className="material-symbols-outlined text-[16px]">replay</span>
<span>Reorder Similar</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
{/*  Past Order Card 2  */}
<div className="bg-surface-container-lowest ambient-shadow rounded-lg p-6 border border-surface-variant">
<div className="flex gap-4 items-start mb-4">
<div className="w-24 h-24 rounded overflow-hidden bg-surface-variant flex-shrink-0">
<img alt="Slatted Teak Room Divider" className="object-cover w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" data-alt="A close-up of a slatted teak wood room divider in a modern heritage home setting. The rich, warm tones of the teak are highlighted by natural light filtering through the slats, creating a rhythmic pattern of shadows. The environment is calm, refined, and embraces tactile minimalism." src="/images/products/窗/3.png"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-[20px]">Slatted Teak Divider</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 text-sm">Order #LX-8750 • Delivered Feb 2024</p>
<span className="inline-block mt-2 text-xs font-label-caps text-label-caps bg-surface-container-high text-on-surface px-2 py-1 rounded">Delivered</span>
</div>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-surface-variant">
<button className="text-primary font-label-caps text-label-caps hover:text-surface-tint transition-colors flex items-center space-x-1 uppercase">
<span className="material-symbols-outlined text-[16px]">replay</span>
<span>Reorder Similar</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
</div>
</section>
</main>
</div>
{/*  Footer  */}


    </div>
  );
}
