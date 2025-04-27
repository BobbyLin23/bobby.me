import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: 'DM Mono:400,500,600',
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-md inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors',
    'btn-primary': 'btn bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50',
    'btn-outline': 'btn border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
  },
})
