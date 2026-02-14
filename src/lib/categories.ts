import { Category } from '@/types/category';
import categoriesData from '@/data/categories.json';

const categories = categoriesData as Category[];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}
