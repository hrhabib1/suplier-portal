
    import { Link } from "react-router-dom";

    const EmployeeTableRow = ({ employee, handleDelete}) => {
          const  {employees_id, employee_name, first_name, last_name, email, job_title, department_id} = employee;
            return (
                <tr>
                      <td className="p-3 border">{employees_id}</td>
                      <td className="p-3 border w-60">{employee_name}</td>
                      <td className="p-3 border">{first_name}</td>
                      <td className="p-3 border">{last_name}</td>
                      <td className="p-3 border">{email}</td>
                      <td className="p-3 border w-60">{job_title}</td>
                      <td className="p-3 border">{department_id}</td>
                      <td className="p-3 border w-60">
                        <div>
                        <Link className=" p-2 rounded mr-2" 
                        // to={`/departments/${department_id}`}
                        ><button className="bg-slate-200 p-2 rounded mr-5">Update</button></Link>
                            <button 
                            onClick={()=>handleDelete(employees_id)}
                             >Delate</button>
                        </div>
                      </td>
                    </tr>
            );
        };
    
export default EmployeeTableRow;