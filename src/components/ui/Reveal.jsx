import { useInView, inViewAttr } from "../../lib/useInView.js";

// Comparsa leggera (dissolvenza e salita di 12px) quando entra nello schermo
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`fade-rise ${className}`} {...inViewAttr(inView)} {...props}>
      {children}
    </Tag>
  );
}
