import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineDelete } from "react-icons/ai";
import { RxColumnSpacing } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";

const Task = ({ id, field, handleChange, handleToggle, handleDeleteField }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id});

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
        field.collapsed
          ? "bg-slate-400 p-5 border-dashed rounded-md w-96 mx-auto my-5"
          : "bg-slate-400 p-5 border-dashed rounded-md my-5"
      }
    >
      <div className="text-right text-black text-2xl">
        <button
          className="text-xl p-1 btnColl mr-3"
          onClick={() => {
            handleToggle(field.user_id);
          }}
        >
          {field.collapsed ? <RxColumnSpacing /> : <VscChromeMinimize />}
        </button>
        <button
          onClick={() => {
            handleDeleteField(field.user_order);
          }}
          className="p-5"
        >
          <AiOutlineDelete />
        </button>
      </div>
      <form action="">
        <div className="text-black">
          <label className="text-black font-bold">User Name:</label>
          <input
            className="bg-slate-400 border rounded px-3 ml-3 py-1"
            type="text"
            name="user_name"
            defaultValue={field.user_name}
            onChange={(e) => handleChange(field.user_order, e)}
          />
        </div>
        <div
          className={
            field.collapsed ? "hidden" : "text-black mt-5 flex flex-row gap-2"
          }
        >
          <div className="flex flex-col w-32">
            <label className="text-black font-bold">Job Title:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="text"
              name="user_job_title"
              defaultValue={field.user_job_title}
              onChange={(e) => handleChange(field.user_order, e)}
            />
          </div>
          <div className="flex flex-col w-48">
            <label className="text-black font-bold">Email:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="email"
              name="user_email"
              defaultValue={field.user_email}
              onChange={(e) => handleChange(field.user_order, e)}
            />
          </div>
          <div className="flex flex-col w-32">
            <label className="text-black font-bold">Department:</label>
            <input
              className="bg-slate-400 border rounded px-3 py-1"
              type="text"
              name="user_department_id"
              defaultValue={field.user_department_id}
              onChange={(e) => handleChange(field.user_order, e)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  field: PropTypes.shape({
    user_order: PropTypes.number.isRequired,
    collapsed: PropTypes.bool.isRequired,
    user_name: PropTypes.string.isRequired,
    user_job_title: PropTypes.string,
    user_email: PropTypes.string,
    user_department_id: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDeleteField: PropTypes.func.isRequired,
};

export default Task;
