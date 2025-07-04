import { join } from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await createHighlighter({
        themes: ['poimandres'],
        langs: ['javascript', 'typescript', 'python', 'go']
      });
      await highlighter.loadLanguage('javascript', 'typescript', 'python', 'go');
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
      return `{@html \`${html}\` }`;
    }
  },
  layout: join(__dirname, './src/lib/mdlayout/layout.svelte')
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter()
  }
};

export default config;
