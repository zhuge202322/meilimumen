"use client";

import React, { useState, useEffect } from 'react';

// Convert hex to rgb format for Tailwind
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null;
};

// Convert rgb string back to hex for color picker
const rgbToHex = (rgbStr: string) => {
  const [r, g, b] = rgbStr.split(' ').map(Number);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return '#000000';
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const presets = [
  {
    name: '经典酒红',
    primary: '#5B2329',
    primaryContainer: '#7A3641',
    secondary: '#9B4A59'
  },
  {
    name: '淡紫雅致',
    primary: '#4A3E5D',
    primaryContainer: '#65557E',
    secondary: '#8473A3'
  },
  {
    name: '森林墨绿',
    primary: '#234232',
    primaryContainer: '#325E47',
    secondary: '#468263'
  },
  {
    name: '海军深蓝',
    primary: '#1B3252',
    primaryContainer: '#284A7A',
    secondary: '#3A67A8'
  },
  {
    name: '咖啡金棕',
    primary: '#362115',
    primaryContainer: '#4E3629',
    secondary: '#645D56'
  },
  {
    name: '玫瑰粉调',
    primary: '#7E3F52',
    primaryContainer: '#A65A6F',
    secondary: '#C97A8E'
  }
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    primary: '#362115',
    primaryContainer: '#4E3629',
    secondary: '#645D56'
  });

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme);
      setColors(parsedTheme);
      applyTheme(parsedTheme);
    }
  }, []);

  const applyTheme = (newColors: { primary: string, primaryContainer: string, secondary: string }) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', hexToRgb(newColors.primary) || '54 33 21');
    root.style.setProperty('--color-primary-container', hexToRgb(newColors.primaryContainer) || '78 54 41');
    root.style.setProperty('--color-secondary', hexToRgb(newColors.secondary) || '100 93 86');
  };

  const handleColorChange = (key: keyof typeof colors, value: string) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    applyTheme(newColors);
    localStorage.setItem('site-theme', JSON.stringify(newColors));
  };

  const applyPreset = (preset: typeof presets[0]) => {
    const newColors = {
      primary: preset.primary,
      primaryContainer: preset.primaryContainer,
      secondary: preset.secondary
    };
    setColors(newColors);
    applyTheme(newColors);
    localStorage.setItem('site-theme', JSON.stringify(newColors));
  };

  const resetToDefault = () => {
    const defaultColors = {
      primary: '#362115',
      primaryContainer: '#4E3629',
      secondary: '#645D56'
    };
    setColors(defaultColors);
    applyTheme(defaultColors);
    localStorage.removeItem('site-theme');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[100] w-12 h-12 bg-white ambient-shadow flex items-center justify-center text-primary hover:scale-110 transition-transform"
        aria-label="主题颜色调节"
      >
        <span className="material-symbols-outlined text-2xl">palette</span>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[100] w-80 bg-white ambient-shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-surface-container">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">palette</span>
              <h3 className="font-headline-md text-[16px]">主题颜色调节</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="p-5 flex flex-col gap-6">
            {/* Presets */}
            <div>
              <p className="text-sm text-on-surface-variant mb-3">快速预设</p>
              <div className="grid grid-cols-2 gap-2">
                {presets.map(preset => {
                  const isActive = colors.primary.toUpperCase() === preset.primary.toUpperCase();
                  return (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset)}
                      className={`flex items-center gap-2 px-3 py-2 border transition-all ${
                        isActive 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-surface-container hover:border-primary/30 text-on-surface-variant'
                      }`}
                    >
                      <div className="flex w-6 h-4 overflow-hidden shrink-0">
                        <div className="w-1/2 h-full" style={{ backgroundColor: preset.primary }}></div>
                        <div className="w-1/2 h-full" style={{ backgroundColor: preset.secondary }}></div>
                      </div>
                      <span className="text-[12px] truncate">{preset.name}</span>
                      {isActive && <span className="material-symbols-outlined text-[14px] ml-auto">check</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Color Pickers */}
            <div className="flex flex-col gap-4 border-t border-surface-container pt-6">
              {/* Dark */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 shrink-0 border border-surface-container overflow-hidden p-1">
                  <input 
                    type="color" 
                    value={colors.primary}
                    onChange={(e) => handleColorChange('primary', e.target.value)}
                    className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 cursor-pointer"
                  />
                  <div className="absolute inset-1 pointer-events-none" style={{ backgroundColor: colors.primary }}></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-on-surface">深色 (顶栏/底栏/主按钮/深底纹)</span>
                  <span className="text-xs text-on-surface-variant uppercase">{colors.primary}</span>
                </div>
              </div>

              {/* Medium */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 shrink-0 border border-surface-container overflow-hidden p-1">
                  <input 
                    type="color" 
                    value={colors.primaryContainer}
                    onChange={(e) => handleColorChange('primaryContainer', e.target.value)}
                    className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 cursor-pointer"
                  />
                  <div className="absolute inset-1 pointer-events-none" style={{ backgroundColor: colors.primaryContainer }}></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-on-surface">中色 (按钮 hover / 描边)</span>
                  <span className="text-xs text-on-surface-variant uppercase">{colors.primaryContainer}</span>
                </div>
              </div>

              {/* Main */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 shrink-0 border border-surface-container overflow-hidden p-1">
                  <input 
                    type="color" 
                    value={colors.secondary}
                    onChange={(e) => handleColorChange('secondary', e.target.value)}
                    className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 cursor-pointer"
                  />
                  <div className="absolute inset-1 pointer-events-none" style={{ backgroundColor: colors.secondary }}></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-on-surface">主色 (强调字/链接/价格)</span>
                  <span className="text-xs text-on-surface-variant uppercase">{colors.secondary}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-surface-container pt-4 mt-2">
              <button 
                onClick={resetToDefault}
                className="flex items-center gap-2 px-4 py-2 border border-surface-container hover:bg-surface-container-low text-sm text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">refresh</span>
                重置为默认
              </button>
              <p className="text-[10px] text-on-surface-variant mt-4">修改会保存到浏览器，下次访问自动应用。</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
