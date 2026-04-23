// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import partytown from '@astrojs/partytown';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://dmorison.github.io',
    base: '/dave-morison',
    image: {
        responsiveStyles: true
    },
    integrations: [
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
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
