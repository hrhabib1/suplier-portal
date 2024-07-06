import { useState } from "react";
import EmployeeDepartmentTable from "./EmployeeDepartmentTable";
import EmployeeTable from "./EmployeeTable";

const Employees = () => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  return (
    <div className="flex w-full flex-col">
      <div className="card bg-white rounded-box grid h-60 place-items-center overflow-scroll">
        <h1 className="text-center text-black font-bold mb-5 text-xl">Departments</h1>
        <EmployeeDepartmentTable onDepartmentSelect={setSelectedDepartmentId} />
      </div>
      <div className="divider text-black bg-black h-1"></div>
      <div className="card bg-white rounded-box grid h-72 place-items-center overflow-scroll">
        <h1 className="text-center text-black font-bold mb-5 text-xl">Employees</h1>
        <EmployeeTable 
        departmentId={selectedDepartmentId} 
        />
      </div>
    </div>
  );
};

export default Employees;
