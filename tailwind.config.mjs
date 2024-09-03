/** @type {import('tailwindcss').Config} */

// const { spectrum } = require('./src/theme')
import { spectrum } from './src/theme'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: spectrum
    }
  },
  plugins: []
}
