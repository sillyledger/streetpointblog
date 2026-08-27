import { Category } from "./posts";

type CategoryMeta = {
  label: string;
  /** Background color class for the small category dot. */
  dot: string;
  /** Text color class for the category-colored headline on the post page. */
  text: string;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  observations: {
    label: "Observations",
    dot: "bg-observations",
    text: "text-observations",
  },
  readings: {
    label: "Readings",
    dot: "bg-readings",
    text: "text-readings",
  },
  experiments: {
    label: "Experiments",
    dot: "bg-experiments",
    text: "text-experiments",
  },
};

/** Safe lookup: any category value that isn't one of the three known keys renders with 'observations' styling instead of crashing. */
export function getCategoryMeta(category: Category): CategoryMeta {
  return CATEGORY_META[category] ?? CATEGORY_META.observations;
}
