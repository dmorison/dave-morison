// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://dmorison.github.io',
    base: '/dave-morison',
    integrations: [
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
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
