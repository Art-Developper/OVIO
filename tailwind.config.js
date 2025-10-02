module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#00e9dd', // Ձեր #00e9dd գույնի համար
        'dark-purple': '#5e00b3', // Ձեր #5e00b3 գույնի համար
        'pink-accent': '#e60073', // Ձեր #e60073 գույնի համար
        // Այլ գույներ
      },
      spacing: {
        '15': '60px', // w-15 => width: 60px
        '35': '140px', // h-35 => height: 140px
      },
      // Կարող եք ավելացնել այլ հարմարեցումներ
    },
  },
  plugins: [],
}