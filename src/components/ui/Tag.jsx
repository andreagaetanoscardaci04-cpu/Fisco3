export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
      {children}
    </span>
  );
}
