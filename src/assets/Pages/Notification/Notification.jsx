import { useState } from "react";
import { GoInbox } from "react-icons/go";
import { RiDraftLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import '../../Style/Style.css'

const Notification = () => {
    const [clickedLink, setClickedLink] = useState('');

    const handleLinkClick = (linkName) => {
      setClickedLink(linkName);
    };
    return (
        <div>
            <h1 className="text-black font-bold text-center text-3xl">Notification</h1>
            <div className="grid grid-cols-7 gap-5 pt-16">
            <div >
            <Link className={`text-xl text-black flex flex-row items-center gap-3 border px-7 py-2 rounded bg-white ${clickedLink === 'inbox' ? 'link-clicked' : 'link-default'}`} to={""} onClick={() => handleLinkClick('inbox')}><GoInbox /> Inbox</Link>
            <Link className={`text-xl text-black flex flex-row items-center gap-3 border px-7 py-2 rounded bg-white ${clickedLink === 'sent' ? 'link-clicked' : 'link-default'}`}  to={"sent"} onClick={() => handleLinkClick('sent')}><TbBrandTelegram /> Sent</Link>
            <Link className={`text-xl text-black flex flex-row items-center gap-3 border px-7 py-2 rounded bg-white ${clickedLink === 'draft' ? 'link-clicked' : 'link-default'}`}  to={"draft"} onClick={() => handleLinkClick('draft')}><RiDraftLine /> Draft</Link>
            </div>
            <div className="col-start-2 col-end-13 px-5 py-3 border rounded">
            <Outlet></Outlet>
            </div>
            
        </div>
        </div>
    );
};

export default Notification;