import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
import EmployeeDepartmentTableRow from "./EmployeeDepartmentTableRow";

const EmployeeDepartmentTable = ({ onDepartmentSelect }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const handleSelect = (id) => {
    const newSelectedId = selectedDepartmentId === id ? null : id;
    setSelectedDepartmentId(newSelectedId);
    onDepartmentSelect(newSelectedId);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:3000/departments");
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-start p-2 border">Check</th>
            <th className="text-start p-2 border">Department ID</th>
            <th className="text-start p-2 border">Department Name</th>
            <th className="text-start p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {departments.map((department) => (
            <EmployeeDepartmentTableRow
              key={department.departments_id}
              department={department}
              selectedDepartmentId={selectedDepartmentId}
              handleSelect={handleSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDepartmentTable;
