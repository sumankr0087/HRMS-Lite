export function Input({ label, required, ...props }) {
    return (
      <div>
        <label className="block text-sm mb-1 text-slate-300">
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
        <input
          {...props}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }
  