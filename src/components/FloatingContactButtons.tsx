"use client";

import React from 'react';

const contactChannels = [
  {
    name: 'Email',
    label: 'Email Us',
    href: 'mailto:info@BrySun.com',
    bgColor: 'bg-[#C5A080]', // Elegant wood/gold color from the image
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    label: 'WhatsApp',
    href: 'https://wa.me/8619017111088',
    bgColor: 'bg-[#25D366]', // WhatsApp green
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.428 2.03 13.96 1 11.32 1c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.515 3.39 1.49 4.869L1.91 21.3l5.856-1.572c1.479.793 3.012 1.205 4.542 1.205h-.002zM17.48 15.65c-.3-.15-1.774-.875-2.05-.975-.273-.1-.471-.15-.67.15-.197.3-.761.975-.933 1.175-.173.2-.345.225-.644.075-.3-.15-1.264-.467-2.41-1.492-.892-.797-1.493-1.782-1.668-2.08-.176-.3-.018-.462.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.625-.92-2.225-.244-.589-.493-.51-.67-.518-.173-.008-.37-.01-.568-.01-.2 0-.522.075-.795.374-.273.3-1.042 1.074-1.042 2.62 0 1.545 1.121 3.039 1.27 3.239.15.2 2.207 3.37 5.348 4.73.746.323 1.329.517 1.783.662.75.239 1.433.205 1.974.13.6-.085 1.774-.724 2.022-1.388.248-.663.248-1.23.173-1.388-.074-.15-.272-.225-.572-.375z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    bgColor: 'bg-[#1877F2]', // Facebook blue
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    bgColor: 'bg-[#E1306C]', // Instagram pink/magenta
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a9 9 0 019-9h0a9 9 0 019 9v6a9 9 0 01-9 9h0a9 9 0 01-9-9V9z" className="hidden" />
        {/* Custom SVG Path for Instagram camera to match exact branding */}
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    label: 'TikTok',
    href: 'https://tiktok.com',
    bgColor: 'bg-[#000000]', // TikTok black
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.4-.63-.62v7.39c.04 2.44-.93 4.87-2.68 6.51-1.75 1.65-4.22 2.5-6.56 2.33-2.44-.18-4.75-1.46-5.91-3.61-1.15-2.15-1.14-4.83.04-6.97 1.19-2.13 3.51-3.37 5.94-3.51v4.13c-1.25.07-2.52.62-3.19 1.62-.68 1-.68 2.37-.02 3.37.66.99 1.91 1.54 3.11 1.47 1.19-.07 2.32-.82 2.67-1.95.17-.55.22-1.13.2-1.7V.02z" />
      </svg>
    ),
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-4 md:right-6 bottom-10 md:bottom-12 z-[9999] flex flex-col gap-3">
      {contactChannels.map((channel) => (
        <a
          key={channel.name}
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${channel.bgColor} text-white rounded-xl md:rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300`}
          aria-label={channel.label}
        >
          {/* Label Tooltip sliding out to the left */}
          <span className="absolute right-14 md:right-16 opacity-0 scale-95 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 bg-neutral-900/90 backdrop-blur-sm text-white text-xs md:text-sm font-semibold tracking-wider uppercase py-2 px-4 shadow-md transition-all duration-300 whitespace-nowrap border border-white/10 rounded-md">
            {channel.label}
          </span>
          
          {/* Custom Icon wrapper */}
          <div className="flex items-center justify-center shrink-0 w-6 h-6 md:w-7 md:h-7">
            {channel.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
