import EmployeeDepartmentTable from "./EmployeeDepartmentTable";

const Employees = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="card bg-white rounded-box grid h-60 place-items-center overflow-scroll">
        <h1 className="text-center text-black font-bold mb-5 text-xl">Departments</h1>
        <EmployeeDepartmentTable></EmployeeDepartmentTable>
      </div>
      <div className="divider text-black bg-black h-1"></div>
      <div className="card bg-white rounded-box grid h-80 place-items-center">
        content
      </div>
    </div>
  );
};

export default Employees;
