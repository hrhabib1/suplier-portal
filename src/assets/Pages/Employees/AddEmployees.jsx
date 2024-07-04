import { useEffect, useState } from "react";

const AddEmployees = () => {
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


  const handleAddEmployee = (event) => {
    event.preventDefault();
    const form = event.target;
    const employees_id = form.empId.value;
    const employee_name = form.empName.value;
    const first_name = form.firstName.value;
    const last_name = form.lastName.value;
    const email = form.email.value;
    const job_title = form.jobTitle.value;
    const department_id = form.deptId.value;

    const addEmployeePost = {
      employees_id,
      employee_name,
      first_name,
      last_name,
      email,
      job_title,
      department_id,
    };
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addEmployeePost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    form.reset();
  };

  return (
    <div className="hero bg-slate-50 ">
      <div className="hero-content">
        <div className="card bg-base-400 shrink-0 shadow-2xl p-10">
          <div className="text-center">
            <h1 className="text-2xl text-black">Create Employee</h1>
          </div>
          <form onSubmit={handleAddEmployee} className="card-body py-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Employee Id
                </span>
              </label>
              <input
                type="text"
                name="empId"
                placeholder="Enter Employee Id"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Employee Name
                </span>
              </label>
              <input
                type="text"
                name="empName"
                placeholder="Enter Employee Name"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Job Title
                </span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter Job Title"
                className="input input-bordered bg-white inp text-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Select Departments ID:</label>
              <select
                id="deptId"
                name="deptId"
                className="input input-bordered bg-white inp text-black"
              >
               {departments.map((department) => (
            <option
            className="text-xl"
              key={department.departments_id}
              value={department.departments_id}
            >
                {department.departments_id} ({department.departments_name})
            </option>
          ))}
              </select>
            </div>

            <div className="form-control mt-5 w-48 mx-auto">
              <button type="submit" className="btn btn-light px-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployees;
