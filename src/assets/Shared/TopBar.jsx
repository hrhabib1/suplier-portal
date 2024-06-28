import { CgLogOff } from "react-icons/cg";
import { CiHome, CiMail } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "../Style/Style.css"
const TopBar = () => {
    return (
        <div className="navbar bg-white p-1 fixed z-10 bg-opacity-100">
            <div className="flex-1 logoImg">
            <img 
            src="https://i.ibb.co/kD2P042/Supplier-Portal.jpg" 
            alt="Supplier Portal Logo" />
            </div>
            <div className="flex-none gap-10 ">
                <Link className="text-3xl text-black p-3 hover:bg-slate-100" to={'/'}><CiHome></CiHome></Link>
            <Link className="text-3xl text-black p-3 hover:bg-slate-100" to={"/notification"}><IoIosNotificationsOutline /></Link>
            <Link className="text-3xl text-black p-3 hover:bg-slate-100" to={"/task"}><FaTasks /></Link>
            <Link className="text-3xl text-black p-3 hover:bg-slate-100" to={"/mail"}><CiMail /></Link>
            <Link className=" text-white bg-red-500 px-3 py-1 rounded" to={"/logIn"}><button className=" flex flex-row items-center"><CgLogOff className="text-3xl" />Log Out</button></Link>
            </div>
        </div>
    );
};

export default TopBar;