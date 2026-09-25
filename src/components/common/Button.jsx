import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20",
    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:border-emerald-500 hover:text-emerald-700",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
        {icon && <ArrowUpRight size={17} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowUpRight size={17} />}
    </button>
  );
}

export default Button;