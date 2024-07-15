import PropTypes from "prop-types";
import { useState } from "react";
import DragItem from "./DragItem";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const DragColum = ({ employees }) => {
  // Initialize collapsedForm as an object
  const [collapsedForm, setCollapsedForm] = useState({});

  // Toggle function to handle form collapse state
  const handleToggleForm = (id) => {
    setCollapsedForm((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="p-5 bg-slate-200">
      <div className="flex flex-row gap-3 text-2xl text-black">
        <button className="bg-slate-500 p-3 btn-circle"><FaRegSave /></button>
        <button className="bg-slate-500 p-3 btn-circle"><MdOutlineCreateNewFolder /></button>
      </div>
      <SortableContext items={employees} strategy={verticalListSortingStrategy}>
        {employees.map((employee) => (
          <DragItem
            key={employee.employees_id}
            id={employee.employees_id}
            employee={employee}
            handleToggleForm={handleToggleForm}
            collapsedForm={collapsedForm[employee.employees_id] || false}
            className="my-3"
          />
        ))}
      </SortableContext>
    </div>
  );
};

DragColum.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      employees_id: PropTypes.number.isRequired,
      employee_name: PropTypes.string.isRequired,
      job_title: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DragColum;
