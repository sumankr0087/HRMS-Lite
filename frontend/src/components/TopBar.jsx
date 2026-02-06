export default function TopBar() {
    return (
      <header className="py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            👥
          </div>
          <div>
            <h1 className="text-xl font-semibold">HRMS Lite</h1>
            <p className="text-sm text-slate-400">
              Employee and Attendance Management System
            </p>
          </div>
        </div>
      </header>
    );
  }
  