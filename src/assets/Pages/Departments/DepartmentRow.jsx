import { Link } from "react-router-dom";

const DepartmentRow = ({ department, handleDelete}) => {
  const  {departments_id, departments_name} = department;
    return (
        <tr>
              <td className="p-5 border w-96">{departments_id}</td>
              <td className="p-5 border">{departments_name}</td>
              <td className="p-5 border w-60">
                <div>
                <Link className=" p-2 rounded mr-2" to={`/departments/${departments_id}`}><button className="bg-slate-200 p-2 rounded mr-5">Update</button></Link>
                    <button onClick={()=>handleDelete(departments_id)} >Delate</button>
                </div>
              </td>
            </tr>
    );
};

export default DepartmentRow;