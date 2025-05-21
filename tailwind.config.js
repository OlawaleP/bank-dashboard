/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2E5CA8',
          DEFAULT: '#0F3775',
          dark: '#092A5E',
        },
        secondary: {
          light: '#FFA726',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
        textColor: {
          100: "#121212",
          200: "#001735",
          300: "D0D5DD",
          400: "#29A174",
          500: "#E78020",
          600: "#7E8B9C",
        },
        sideText: '#D0D5DD',
        sidebar: '#002F6C',
        sideSelect: '#E4F0FF',
        iconBg: '#014DAF',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FFC107',
        danger: '#F44336',
        card1: '#F1F7FF',
        card2: "#EFFAF6",
        chart1: "#014DAF",
        chart2: "#CCE2FF",
        chart3: '#E2E2E2',
        background: {
          light: '#F7FAFC',
          DEFAULT: '#EDF2F7',
          dark: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
      },
      fontSize: {
          
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}