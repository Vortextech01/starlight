import { defineData } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const data = {
  docs: defineData({ schema: docsSchema() }),
  i18n: defineData({ schema: i18nSchema() }),
};
