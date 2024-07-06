import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEmployeeDepartment = ({ department, onUpdated }) => {
  const [deptId, setDeptId] = useState('');
  const [deptName, setDeptName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (department) {
      setDeptId(department.departments_id);
      setDeptName(department.departments_name);
    }
  }, [department]);

  const handleUpdateDepartment = (event) => {
    event.preventDefault();
    const updateDepartmentPost = { departments_name: deptName };

    fetch(`http://localhost:3000/departments/${deptId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDepartmentPost),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Updated!",
          text: "Your department has been updated.",
          icon: "success",
        });
        if (data) {
          navigate("/employees");
          onUpdated(data);
        }
        console.log(data);
      });
  };

  if (!department) return null;

  return (
    <tr>
      <td></td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Department Id</span>
          </label>
          <input
            type="text"
            name="deptId"
            value={deptId}
            className="input input-bordered bg-white p-2 text-black mx-2"
            readOnly
          />
        </div>
      </td>
      <td className="border">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-semibold">Department Name</span>
          </label>
          <input
            type="text"
            name="deptName"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
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
          <button type="button" className="btn btn-light w-28 mb-2" onClick={handleUpdateDepartment}>
            Update
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UpdateEmployeeDepartment;
