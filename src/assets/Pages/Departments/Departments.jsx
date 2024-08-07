import { useEffect, useState } from "react";
import DepartmentRow from "./DepartmentRow";
import Swal from "sweetalert2";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

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

        // Check if the response has content before parsing it as JSON
        let data = {};
        if (response.headers.get("content-length") == "0") {
          data = await response.json();
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your department has been deleted.",
          icon: "success",
        });

        setDepartments(departments.filter((department) => department.departments_id !== id));
        console.log(data);
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-black font-bold py-2 border mb-5 text-xl">
        Departments
      </h1>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-start p-2 border">Department ID</th>
            <th className="text-start p-2 border">Department Name</th>
            <th className="text-start p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {departments.map((department) => (
            <DepartmentRow
              key={department.departments_id}
              department={department}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
