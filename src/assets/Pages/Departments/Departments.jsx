import { useEffect } from "react";
import { useState } from "react";

const Departments = () => {
  const [departmentes, setDepartments] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/departments')
          .then(res => res.json())
          .then(data => setDepartments(data))
  }, [])

    return (
        <div>
      <h1 className="text-center text-black font-bold py-2 border mb-5 text-xl">Departments</h1>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-start p-2 border">Department ID</th>
            <th className="text-start p-2 border">Department Name</th>
            <th className="text-start p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {departmentes.map(department => (
            <tr 
            key={department.departments_id}
            >
              <td className="p-5 border w-96">{department.departments_id}</td>
              <td className="p-5 border">{department.departments_name}</td>
              <td className="p-5 border w-60">
                <div>
                    <button className="bg-slate-200 p-2 rounded mr-5">Update</button>
                    <button className="bg-slate-200 p-2 rounded">Delate</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Departments;