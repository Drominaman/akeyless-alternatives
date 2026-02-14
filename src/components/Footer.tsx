export default function Footer() {
  return (
    <footer className="border-t-2 border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Akeyless Alternatives. All information is provided for comparison purposes.
        </p>
      </div>
    </footer>
  );
}
