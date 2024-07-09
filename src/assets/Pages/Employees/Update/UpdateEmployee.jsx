import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const UpdateEmployee = ({ employee, onUpdated }) => {
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [empFirstName, setEmpFirstName] = useState('');
  const [empLastName, setEmpLastName] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const [empJobTitle, setEmpJobTitle] = useState('');
  const [empDeptId, setEmpDeptId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (employee) {
      setEmpId(employee.employees_id);
      setEmpName(employee.employee_name);
      setEmpFirstName(employee.first_name);
      setEmpLastName(employee.last_name);
      setEmpEmail(employee.email);
      setEmpJobTitle(employee.job_title);
      setEmpDeptId(employee.department_id);
    }
  }, [employee]);

  const handleUpdateEmployee = (event) => {
    event.preventDefault();
    const updateEmployeePost = { 
        employee_name: empName, 
        first_name: empFirstName,
        last_name: empLastName,
        email: empEmail,
        job_title: empJobTitle,
        department_id: empDeptId
    };

    fetch(`http://localhost:3000/employees/${empId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEmployeePost),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Updated!",
          text: "Your employee has been updated.",
          icon: "success",
        });
        if (data) {
          navigate("/employees");
          onUpdated(data);
        }
        console.log(data);
      });
  };

  if (!employee) return null;

  return (
    <tr>
      <td></td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Employee Id</span>
          </label>
          <input
            type="text"
            name="empId"
            value={empId}
            className="input input-bordered bg-white p-2 text-black mx-2"
            readOnly
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Employee Name</span>
          </label>
          <input
            type="text"
            name="empName"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">First Name</span>
          </label>
          <input
            type="text"
            name="empFirstName"
            value={empFirstName}
            onChange={(e) => setEmpFirstName(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Last Name</span>
          </label>
          <input
            type="text"
            name="empLastName"
            value={empLastName}
            onChange={(e) => setEmpLastName(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Email</span>
          </label>
          <input
            type="text"
            name="empEmail"
            value={empEmail}
            onChange={(e) => setEmpEmail(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Job Titele</span>
          </label>
          <input
            type="text"
            name="empJobTitle"
            value={empJobTitle}
            onChange={(e) => setEmpJobTitle(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Department Id</span>
          </label>
          <input
            type="text"
            name="empDeptId"
            value={empDeptId}
            onChange={(e) => setEmpDeptId(e.target.value)}
            className="input input-bordered bg-white p-2 text-black mx-2"
            required
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control mt-5 w-48 mx-auto">
          <button className="btn bg-slate-300 w-28 mb-2" type="button" onClick={onUpdated}>
            Cancel
          </button>
          <button type="button" className="btn btn-light w-28 mb-2" onClick={handleUpdateEmployee}>
            Update
          </button>
        </div>
      </td>
    </tr>
  );
};
UpdateEmployee.propTypes = {
  department: PropTypes.shape({
    departments_id: PropTypes.string.isRequired,
    departments_name: PropTypes.string.isRequired,
  }),
  onUpdated: PropTypes.func.isRequired,
};

export default UpdateEmployee;