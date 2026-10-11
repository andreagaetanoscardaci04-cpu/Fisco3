export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-container px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
