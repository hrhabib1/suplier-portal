import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RxColumnSpacing } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";
const SideDrag = () => {
    const [collapsed, setCollapsed] = useState(true);
    const handleToggle = () => {
        setCollapsed(collapsed);
      };
    return (
        <div className="p-5">
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
            <div className="text-black">
              <label className="text-black font-bold">User Name:</label>
              <input
                className="bg-slate-400 border rounded px-3 ml-3 py-1"
                type="text"
                name="unam"
              />
            </div>
            <div
              className={
                collapsed ? "hidden" : "text-black mt-5 flex flex-row gap-2"
              }
            >
              <div className="flex flex-col w-32">
                <label className="text-black font-bold">Job Title:</label>
                <input
                  className="bg-slate-400 border rounded px-3 py-1"
                  type="text"
                  name="jobTitle"
                />
              </div>
              <div className="flex flex-col w-48">
                <label className="text-black font-bold">Email:</label>
                <input
                  className="bg-slate-400 border rounded px-3 py-1"
                  type="email"
                  name="email"
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
      </div>
    );
};

export default SideDrag;