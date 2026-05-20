// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://dmorison.github.io',
    base: '/dave-morison',
    image: {
        responsiveStyles: true
    },
    integrations: [
        icon({
            iconDir: "src/assets/icons",
        }),
    ],
    experimental: {
        fonts: [{
            provider: fontProviders.fontsource(),
            name: "Montserrat",
            cssVariable: "--font-montserrat",
        }]
    },
});
