/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [     
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      white: "#fffff",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "7f81e8",
        DEFAULT: "#5F62E2",
        600: "#5658CB",

      },
      secondary: {
        200: "#EAF8F4",
        300: "#BFE9DE",
        400: "#56C4A7",
        DEFAULT: "#2AB691",
        600: "#26A482",

      },
      gray: {
        400: "#26A482",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",        
      },
    },
    fontSize: {
        '8xl': [
          '120px',
          {
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
        },
      ],
        '7xl': [
          '72px', 
          {
          lineHeight: '80px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
        },
      ],
        '6xl': [
          '55px', 
          {
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
        },
      ],
        '5xl': [
          '48px', 
          {
          lineHeight: '54px',
          letterSpacing: '-1.60px',
          fontWeight: '500',
        },
      ],
        '4xl': [
          '36px', 
          {
          lineHeight: '44px',
          letterSpacing: '-1.20px',
          fontWeight: '500',
        },
      ],
        '3xl': [
          '28px', 
          {
          lineHeight: '34px',
          letterSpacing: '-0.80px',
          fontWeight: '500',
        },
      ],
        '2xl': [
          '24px', 
          {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
        xl: [
          '24px', 
          {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
        lg: [
          '21px', 
          {
          lineHeight: '30px',
          letterSpacing: '-0.8000px',
          fontWeight: '400',
        },
      ],
        base: [
          '17px', 
          {
          lineHeight: '25px',
          letterSpacing: '-0.69999px',
          fontWeight: '400',
        },
      ],
        sm: [
          '15px', 
          {
          lineHeight: '23px',
          letterSpacing: '-0.6000px',
          fontWeight: '400',
        },
      ],
        caption1: [
          '20px', 
          {
          lineHeight: '24px',
          letterSpacing: '-0.6000px',
          fontWeight: '400',
        },
      ],
        caption2: [
          '20px', 
          {
          lineHeight: '20px',
          letterSpacing: '-0.30px',
          fontWeight: '400',
        },
      ],
        caption3: [
          '16px', 
          {
          lineHeight: '18px',
          letterSpacing: '-0.5000px',
          fontWeight: '400',
        },
      ],
        caption4: [
          '13px', 
          {
          lineHeight: '15px',
          letterSpacing: '-0.2000px',
          fontWeight: '400',
        },
      ],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  plugins: [],
}

