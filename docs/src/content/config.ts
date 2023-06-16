import { defineCollection } from 'astro:content';
import { i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
