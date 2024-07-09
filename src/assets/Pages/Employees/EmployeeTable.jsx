import { useEffect, useState } from "react";
import EmployeeTableRow from "./EmployeeTableRow";
import Swal from "sweetalert2";
import UpdateEmployee from "./Update/UpdateEmployee";
import { Link } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const EmployeeTable = ({ departmentId }) => {
  const [employees, setEmployees] = useState([]);
  const [employeeToUpdate, setEmployeeToUpdate] = useState(null);

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
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
          method: "DELETE",
        });

        // Check if the response has content before parsing it as JSON
        let data = {};
        if (response.headers.get("content-length") == "0") {
          data = await response.json();
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your employee has been deleted.",
          icon: "success",
        });

        setEmployees(employees.filter((employee) => employee.employees_id !== id));
        console.log(data);
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };
  const handleUpdateClick = (employee) => {
    console.log("Updating employee:", employee);
    setEmployeeToUpdate(employee);
  };

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
            <th className="text-start p-2 border">
            <Menu>
            <SubMenu label='Action'>
          <MenuItem>
            <Link to="/addEmployee" className=" flex flex-row items-center px-2">
            <ImUserPlus className='text-xl'/> <span>Add Employee</span>
            </Link>
          </MenuItem>
        </SubMenu>
            </Menu>
              </th>
          </tr>
        </thead>
        <tbody className="text-black">
        {employeeToUpdate && (
            <UpdateEmployee 
              employee={employeeToUpdate}
              onUpdated={() => setEmployeeToUpdate(null)}
            />
          )}
          {employees.map((employee) => (
            <EmployeeTableRow
              key={employee.employees_id}
              employee={employee}
              handleDelete={handleDelete}
              handleUpdateClick={handleUpdateClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
