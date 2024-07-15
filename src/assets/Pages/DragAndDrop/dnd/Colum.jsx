import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineDelete } from "react-icons/ai";
import { RxColumnSpacing } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";

const Colum = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const field = {
    user_name: "",
    user_email: "",
    user_job_title: "",
    user_department_id: "",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-5"
    >
      <div
        className={
          collapsed
            ? "bg-slate-400 p-5 border-dashed rounded-md w-96 mx-auto"
            : "bg-slate-400 p-5 border-dashed rounded-md"
        }
      >
        <div className="text-right text-black text-2xl">
          <button className="text-xl p-1 btnColl" onClick={handleToggle}>
            {collapsed ? <RxColumnSpacing /> : <VscChromeMinimize />}
          </button>
          <button>
            <AiOutlineDelete />
          </button>
        </div>
        <form action="">
          <div>
            <label className="text-black font-bold">User Name:</label>
            <input
              className="p-2 w-full bg-slate-300"
              type="text"
              readOnly
              name="user_name"
             defaultValue={field.user_name}
            />
            <div  className={
              collapsed ? "hidden" : "text-black mt-5 flex flex-row gap-2"
            }>
              <label className="text-black font-bold">User Email:</label>
              <input
                className="p-2 w-full"
                type="text"
                name="user_email"
               defaultValue={field.user_email}
              />
            <label className="text-black font-bold">User Job Title:</label>

            <input
              className="p-2 w-full"
              type="text"
              name="user_job_title"
             defaultValue={field.user_job_title}
            />
            <label className="text-black font-bold">User Department ID:</label>
            <input
              className="p-2 w-full"
              type="text"
              name="user_department_id"
             defaultValue={field.user_department_id}
            />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Colum;
