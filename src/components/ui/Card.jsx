export default function Card({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`rounded-3xl bg-white shadow-card ring-1 ring-slate-900/5 ${className}`}
    >
      {children}
    </Tag>
  );
}
