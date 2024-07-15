import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineDelete } from "react-icons/ai";
import { RxColumnSpacing } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";

const DragItem = ({ employee, collapsedForm, handleToggleForm, id }) => {
  const { employee_name, job_title, email, } = employee;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={
        collapsedForm
          ? "bg-slate-400 p-5 border-dashed rounded-md w-96 mx-auto my-3"
          : "bg-slate-400 p-5 border-dashed rounded-md my-3"
      }
    >
      <div className="text-right text-black text-2xl">
        <button
          className="text-xl p-1 btnColl"
          onClick={() => handleToggleForm(id)}
        >
          {collapsedForm ? <RxColumnSpacing /> : <VscChromeMinimize />}
        </button>
        <button>
          <AiOutlineDelete />
        </button>
      </div>
      <form action="">
        <div className="text-black">
          <label className="text-black font-bold">User Name:</label>
          <input
            className="bg-slate-400 border rounded px-3 ml-3 py-1"
            type="text"
            name="unam"
            defaultValue={employee_name}
          />
        </div>
        <div className={collapsedForm ? "hidden" : "text-black mt-5 flex flex-row gap-2"}>
          <div className="flex flex-col w-32">
            <label className="text-black font-bold">Job Title:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="text"
              name="jobTitle"
              defaultValue={job_title}
            />
          </div>
          <div className="flex flex-col w-48">
            <label className="text-black font-bold">Email:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="email"
              name="email"
              defaultValue={email}
            />
          </div>
          <div className="flex flex-col w-32">
            <label className="text-black font-bold">Department:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="text"
              name="dept"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

DragItem.propTypes = {
  employee: PropTypes.shape({
    employees_id: PropTypes.number.isRequired,
    employee_name: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  collapsedForm: PropTypes.bool.isRequired,
  handleToggleForm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DragItem;
