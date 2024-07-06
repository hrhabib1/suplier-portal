const EmployeeDepartmentTableRow = ({ department, selectedDepartmentId, handleSelect, handleDelete, handleUpdateClick }) => {
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
          <button 
            className="bg-slate-200 p-2 rounded mr-5" 
            onClick={() => handleUpdateClick(department)}
          >
            Update
          </button>
          <button 
            onClick={() => handleDelete(departments_id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeDepartmentTableRow;
