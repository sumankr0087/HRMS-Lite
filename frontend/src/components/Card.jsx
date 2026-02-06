export default function Card({ title, subtitle, children, action }) {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold">{title}</h3>
            {subtitle && (
              <p className="text-sm text-slate-400">{subtitle}</p>
            )}
          </div>
          {action}
        </div>
        {children}
      </div>
    );
  }
  