import { useEffect, useState } from "react";
import EmployeeTableRow from "./EmployeeTableRow";

const EmployeeTable = ({ departmentId }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          departmentId ? `http://localhost:3000/employees/${departmentId}` : `http://localhost:3000/employees`
        );
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [departmentId]);

  return (
    <div>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-start p-2 border">ID</th>
            <th className="text-start p-2 border">Employee Name</th>
            <th className="text-start p-2 border">First Name</th>
            <th className="text-start p-2 border">Last Name</th>
            <th className="text-start p-2 border">email</th>
            <th className="text-start p-2 border">Job Title</th>
            <th className="text-start p-2 border">Department ID</th>
            <th className="text-start p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {employees.map((employee) => (
            <EmployeeTableRow
              key={employee.employees_id}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
