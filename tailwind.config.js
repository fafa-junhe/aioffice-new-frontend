/** @type {import('tailwindcss').Config} */


function getColorScale(name) {
  let scale = {};
  for (let i = 1; i <= 12; i++) {
    scale[i] = `var(--${name}-${i})`;
    // next line only needed if using alpha values
    scale[`a${i}`] = `var(--${name}-a${i})`;
  }

  return scale;
}

export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: getColorScale('red'),
        gray: getColorScale('mauve'),
        normal: getColorScale('mauve'),
      },
    },
  },
  safelist: [
    {
      pattern: /border-t-.*-1/
    },
    {
      pattern: /bg-.*-4/
    },
    {
      pattern: /border-b-.*-5/
    },
    {
      pattern: /bg-.*-9/
    },
    {
      pattern: /bg-.*-3/
    },
    {
      pattern: /border-b-.*-8/
    },
    {
      pattern: /text-.*-10/
    },
    {
      pattern: /bg-.*-7/
    },
  ],
  plugins: [],
}

