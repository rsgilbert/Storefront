
import colors from 'tailwindcss/colors'
import headlessuiTailwindcss from '@headlessui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['selector'],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [headlessuiTailwindcss],

}

