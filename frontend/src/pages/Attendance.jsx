import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";

const BASE_URL = "https://demo-hrms-lite.onrender.com";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 GET EMPLOYEES
  useEffect(() => {
    axios.get(`${BASE_URL}/employees`).then((res) => {
      setEmployees(res.data);
    });
  }, []);

  // 🔹 GET ATTENDANCE
  const fetchAttendance = async (id) => {
    if (!id) return;

    setSelectedId(id);
    setLoading(true);

    const res = await axios.get(`${BASE_URL}/attendance/${id}`);
    setRecords(res.data);

    setLoading(false);
  };

  // 🔹 MARK ATTENDANCE
  const markAttendance = async (status) => {
    await axios.post(`${BASE_URL}/attendance`, {
      employee_id: Number(selectedId),
      date: new Date().toISOString().split("T")[0],
      status,
    });

    fetchAttendance(selectedId);
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        title="Select Employee"
        subtitle="Choose an employee to view or mark attendance"
      >
        <select
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
          onChange={(e) => fetchAttendance(e.target.value)}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        {selectedId && (
          <div className="flex gap-3 mt-4">
            <Button onClick={() => markAttendance("Present")}>
              Mark Present
            </Button>
            <Button
              variant="secondary"
              onClick={() => markAttendance("Absent")}
            >
              Mark Absent
            </Button>
          </div>
        )}
      </Card>

      <Card
        title={
          selectedId ? "Attendance Records" : "No Employee Selected"
        }
        subtitle={
          selectedId
            ? "Employee attendance history"
            : "Select an employee to view records"
        }
      >
        {loading ? (
          <p className="text-slate-400">Loading...</p>
        ) : records.length === 0 ? (
          <p className="text-slate-500">No records</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-2 text-left">Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b border-slate-800">
                  <td className="py-2">{r.date}</td>
                  <td
                    className={
                      r.status === "Present"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
