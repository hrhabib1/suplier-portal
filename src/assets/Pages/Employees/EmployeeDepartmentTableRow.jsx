import { Link } from "react-router-dom";
import "../../Style/Style.css";

const EmployeeDepartmentTableRow = ({ department, selectedDepartmentId, handleSelect }) => {
  const { departments_id, departments_name } = department;

  return (
    <tr>
      <td className="p-5 border">
        <input
          className="h-5 w-5 custom-checkbox"
          type="checkbox"
          checked={selectedDepartmentId === departments_id}
          onChange={() => handleSelect(departments_id)}
        />
      </td>
      <td className="p-5 border w-96">{departments_id}</td>
      <td className="p-5 border w-96">{departments_name}</td>
      <td className="p-5 border w-60">
        <div>
          <Link className="p-2 rounded mr-2" to={`/departments/${departments_id}`}>
            <button className="bg-slate-200 p-2 rounded mr-5">Update</button>
          </Link>
          <button 
        //   onClick={() => handleDelete(departments_id)}
          >Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeDepartmentTableRow;
