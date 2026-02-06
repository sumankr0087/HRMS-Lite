export default function Tabs({ active, setActive }) {
    return (
      <div className="flex gap-8 border-b border-slate-800 mt-6">
        {["Employees", "Attendance"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 text-sm font-medium ${
              active === tab
                ? "text-blue-400 border-b-2 border-blue-500"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }
  