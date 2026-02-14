export default function Footer() {
  return (
    <footer className="border-t-2 border-white/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-neutral-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Akeyless Alternatives. All information is provided for comparison purposes.
        </p>
        <p className="text-neutral-700 text-xs leading-relaxed max-w-2xl mx-auto">
          Disclaimer: Information on this site is provided &ldquo;as is&rdquo; for general informational and comparison purposes only and may not reflect the most current pricing, features, or availability. We recommend verifying details directly with each vendor before making purchasing decisions.
        </p>
      </div>
    </footer>
  );
}
