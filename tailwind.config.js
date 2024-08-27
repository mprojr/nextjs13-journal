/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-teal-coral": "linear-gradient(90deg, #e0f7fa, #ec407a)", // Custom gradient
      },
      colors: {
        'teal-coral-1': '#e0f7fa',  // Light Teal
        'teal-coral-2': '#b2ebf2',  // Pale Teal
        'teal-coral-3': '#80deea',  // Soft Teal
        'teal-coral-4': '#4dd0e1',  // Teal
        'teal-coral-5': '#26c6da',  // Bright Teal
        'teal-coral-6': '#00acc1',  // Strong Teal
        'teal-coral-7': '#00838f',  // Deep Teal
        'teal-coral-8': '#f48fb1',  // Pale Coral
        'teal-coral-9': '#f06292',  // Soft Coral
        'teal-coral-10': '#ec407a', // Coral
      },
    },
  },
  plugins: [],
};
