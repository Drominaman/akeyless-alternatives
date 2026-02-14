import { Metadata } from 'next';
import { getComparisonMetadata } from '@/lib/comparison-metadata';
import ComparisonTemplate from '@/components/comparison/ComparisonTemplate';

const SLUG = 'aws-secrets-manager';

export function generateMetadata(): Metadata {
  return getComparisonMetadata(SLUG);
}

export default function Page() {
  return <ComparisonTemplate slug={SLUG} />;
}
