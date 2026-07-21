import { Category } from "./posts";

type CategoryMeta = {
  label: string;
  bg: string;
  headlineColor: string;
  metaColor: string;
  /** Sets --accent to this category's color, for use in prose-streetpoint (drop cap, blockquote, links). */
  accentVar: string;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  observations: {
    label: "Observations",
    bg: "bg-observations",
    headlineColor: "text-terracotta-headline",
    metaColor: "text-terracotta-meta",
    accentVar: "[--accent:theme(colors.observations)]",
  },
  readings: {
    label: "Readings",
    bg: "bg-readings",
    headlineColor: "text-green-headline",
    metaColor: "text-green-meta",
    accentVar: "[--accent:theme(colors.readings)]",
  },
  experiments: {
    label: "Experiments",
    bg: "bg-experiments",
    headlineColor: "text-mustard-headline",
    metaColor: "text-mustard-meta",
    accentVar: "[--accent:theme(colors.experiments)]",
  },
};
