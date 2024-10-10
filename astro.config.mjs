import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import mdx from "@astrojs/mdx";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), mdx(), partytown()]
});