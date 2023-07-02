/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "450px",
            },
            fontFamily: {
                cabin: ["Cabin", "sans-serif"],
                lato: ["Lato", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#FFCC4A",
                secondary: "#A6EDA6",
                dark: "#181818",
                secondaryDark: "#515151",
                light: "#F5F5F5",
                textColor: "1C1C1C",
            },
            gridTemplateColumns: {
                'auto-fill-15': 'repeat(auto-fill, minmax(15em, 1fr))',
                'auto-fill-20': 'repeat(auto-fill, minmax(20em, 1fr))',

                'auto-fit-15': 'repeat(auto-fit, minmax(15em, 1fr))',
              },
        },
    },
    plugins: [],
};
