/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./src/components/*.{js,jsx,ts,tsx}",
        "./src/App.tsx"
    ],
    theme: {
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor'),
            'solid': '#7D7D7D'
        }),
        extend: {
            fontFamily: {
                badScript: ['"Bad Script"', ...defaultTheme.fontFamily.sans],
                Roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
            }
        },
        variants: {
            fill: ['hover']
        }
    },
    plugins: [],
};
