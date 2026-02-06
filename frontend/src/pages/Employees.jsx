import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { Input } from "../components/Input";

const BASE_URL = "https://demo-hrms-lite.onrender.com";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  // 🔹 GET EMPLOYEES
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/employees`);
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // 🔹 ADD EMPLOYEE
  const addEmployee = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`${BASE_URL}/employees`, form);
      setOpen(false);
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
      fetchEmployees();
    } catch (err) {
      setError(err.response?.data?.detail || "Error adding employee");
    }
  };

  // 🔹 DELETE EMPLOYEE
  const deleteEmployee = async (id) => {
    if (!confirm("Delete this employee?")) return;

    try {
      await axios.delete(`${BASE_URL}/employees/${id}`);
      fetchEmployees();
    } catch {
      alert("Failed to delete employee");
    }
  };

  return (
    <>
      <div className="mt-6">
        <Card
          title="Employee Management"
          subtitle="Manage your organization's employees"
          action={<Button onClick={() => setOpen(true)}>＋ Add Employee</Button>}
        >
          {loading ? (
            <p className="text-center py-10 text-slate-400">Loading...</p>
          ) : employees.length === 0 ? (
            <p className="text-center py-10 text-slate-500">
              No data available
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-800 text-slate-400">
                  <tr>
                    <th className="py-3 text-left">Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr
                      key={emp.id}
                      className="border-b border-slate-800"
                    >
                      <td className="py-3">{emp.full_name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.department}</td>
                      <td className="text-right">
                        <button
                          onClick={() => deleteEmployee(emp.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-3">{error}</p>
          )}
        </Card>
      </div>

      {/* 🔹 ADD EMPLOYEE MODAL */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Add New Employee"
      >
        <form onSubmit={addEmployee} className="space-y-4">
          <Input
            label="Employee ID"
            required
            value={form.employee_id}
            onChange={(e) =>
              setForm({ ...form, employee_id: e.target.value })
            }
          />

          <Input
            label="Full Name"
            required
            value={form.full_name}
            onChange={(e) =>
              setForm({ ...form, full_name: e.target.value })
            }
          />

          <Input
            label="Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div>
            <label className="block text-sm mb-1 text-slate-300">
              Department<span className="text-red-400">*</span>
            </label>
            <select
              required
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
            >
              <option value="">Select Department</option>
              <option>Finance</option>
              <option>HR</option>
              <option>Engineering</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add Employee</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
