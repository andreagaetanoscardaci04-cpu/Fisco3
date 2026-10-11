export default function Card({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`rounded-md border border-pietra bg-bianco ${className}`}>
      {children}
    </Tag>
  );
}
