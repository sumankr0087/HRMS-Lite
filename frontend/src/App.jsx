import { useState } from "react";
import Layout from "./components/Layout";
import TopBar from "./components/TopBar";
import Tabs from "./components/Tabs";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";

export default function App() {
  const [active, setActive] = useState("Employees");

  return (
    <Layout>
      <TopBar />
      <Tabs active={active} setActive={setActive} />
      {active === "Employees" ? <Employees /> : <Attendance />}
    </Layout>
  );
}
