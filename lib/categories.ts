export type Category = "observations" | "readings" | "experiments";

type CategoryMeta = {
  label: string;
  bg: string;
  headlineColor: string;
  metaColor: string;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  observations: {
    label: "Observations",
    bg: "bg-observations",
    headlineColor: "text-terracotta-headline",
    metaColor: "text-terracotta-meta",
  },
  readings: {
    label: "Readings",
    bg: "bg-readings",
    headlineColor: "text-green-headline",
    metaColor: "text-green-meta",
  },
  experiments: {
    label: "Experiments",
    bg: "bg-experiments",
    headlineColor: "text-mustard-headline",
    metaColor: "text-mustard-meta",
  },
};
