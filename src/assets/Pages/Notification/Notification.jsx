import { LuInbox } from "react-icons/lu";
import { RiDraftLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Notification = () => {
    return (
        <div>
            <h1 className="text-black font-bold text-center text-3xl">Notification</h1>
            <div className="grid grid-cols-7 gap-5 pt-16">
            <div >
            <Link className="text-xl text-black flex flex-row items-center gap-3 border px-7 py-2 rounded bg-white" to={"inbox"}><LuInbox /> Inbox</Link>
            <Link className="text-xl flex flex-row items-center gap-3 px-7" to={"sent"}><TbBrandTelegram /> Sent</Link>
            <Link className="text-xl flex flex-row items-center gap-3 px-7" to={"draft"}><RiDraftLine /> Draft</Link>
            </div>
            <div className="col-start-2 col-end-13 px-5 py-3 border rounded">
            <Outlet></Outlet>
            </div>
            
        </div>
        </div>
    );
};

export default Notification;