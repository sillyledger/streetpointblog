import { Category } from "./posts";

type CategoryMeta = {
  label: string;
  bg: string;
  headlineColor: string;
  metaColor: string;
  ruleColor: string;
  /** Sets --accent to this category's deep accent color, for use in prose-streetpoint (blockquote, links). */
  accentVar: string;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  observations: {
    label: "Observations",
    bg: "bg-observations-tint",
    headlineColor: "text-observations-headline",
    metaColor: "text-observations-meta",
    ruleColor: "border-observations-meta/[0.28]",
    accentVar: "[--accent:theme(colors.observations.accent)]",
  },
  readings: {
    label: "Readings",
    bg: "bg-readings-tint",
    headlineColor: "text-readings-headline",
    metaColor: "text-readings-meta",
    ruleColor: "border-readings-meta/[0.28]",
    accentVar: "[--accent:theme(colors.readings.accent)]",
  },
  experiments: {
    label: "Experiments",
    bg: "bg-experiments-tint",
    headlineColor: "text-experiments-headline",
    metaColor: "text-experiments-meta",
    ruleColor: "border-experiments-meta/[0.28]",
    accentVar: "[--accent:theme(colors.experiments.accent)]",
  },
};
