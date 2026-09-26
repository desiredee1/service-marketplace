module.exports = {
  plugins: ["tailwindcss"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9edff',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a'
        }
      },
      boxShadow: {
        soft: '0 18px 45px -18px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};
