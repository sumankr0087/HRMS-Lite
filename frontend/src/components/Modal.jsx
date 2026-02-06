export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
  
        {/* Modal Card */}
        <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-xl">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-slate-100">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200 text-xl"
            >
              ×
            </button>
          </div>
  
          {/* Body */}
          <div className="px-6 py-5">{children}</div>
        </div>
      </div>
    );
  }
  