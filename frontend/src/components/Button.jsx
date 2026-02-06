export default function Button({ children, variant = "primary", ...props }) {
    const styles = {
      primary: "bg-blue-600 hover:bg-blue-500",
      secondary: "bg-slate-700 hover:bg-slate-600",
    };
  
    return (
      <button
        {...props}
        className={`${styles[variant]} px-4 py-2 rounded-lg text-sm font-medium`}
      >
        {children}
      </button>
    );
  }
  