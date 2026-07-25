import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/writing",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    dateText: z.string(),
    date: z.coerce.date(),
    locale: z.enum(["en", "zh-cn", "zh-hk"]),
    translationKey: z.string(),
    slug: z.string(),
    featured: z.boolean().default(false),
    priority: z.number().int().default(0),
  }),
});

export const collections = { writing };
