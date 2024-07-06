import { useEffect, useState } from "react";
import EmployeeDepartmentTableRow from "./EmployeeDepartmentTableRow";
import Swal from "sweetalert2";
import UpdateEmployeeDepartment from "./Update/UpdateEmployeeDepartment";
import PropTypes from "prop-types";

const EmployeeDepartmentTable = ({ onDepartmentSelect }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [departmentToUpdate, setDepartmentToUpdate] = useState(null);

  const handleSelect = (id) => {
    const newSelectedId = selectedDepartmentId === id ? null : id;
    setSelectedDepartmentId(newSelectedId);
    onDepartmentSelect(newSelectedId);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/departments/${id}`, {
          method: "DELETE",
        });

        let data = {};
        if (response.headers.get("content-length") == "0") {
          data = await response.json();
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        setDepartments(departments.filter((department) => department.departments_id !== id));
        console.log(data);
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    }
  };

  const handleUpdateClick = (department) => {
    console.log("Updating department:", department);
    setDepartmentToUpdate(department);
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
          {departmentToUpdate && (
            <UpdateEmployeeDepartment 
              department={departmentToUpdate}
              onUpdated={() => setDepartmentToUpdate(null)}
            />
          )}
          {departments.map((department) => (
            <EmployeeDepartmentTableRow
              key={department.departments_id}
              department={department}
              selectedDepartmentId={selectedDepartmentId}
              handleSelect={handleSelect}
              handleDelete={handleDelete}
              handleUpdateClick={handleUpdateClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
EmployeeDepartmentTable.propTypes = {
  onDepartmentSelect: PropTypes.shape ,
  onUpdated: PropTypes.func.isRequired,
};
export default EmployeeDepartmentTable;
