import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaUserPlus, FaBars, FaUser, FaTimes, FaRegListAlt } from 'react-icons/fa';
import "../Style/Style.css"
import { Link, Outlet } from 'react-router-dom';
import { FaUserGroup } from 'react-icons/fa6';
import { TbBrandTelegram } from 'react-icons/tb';
import { PiNoteLight } from 'react-icons/pi';
import { ImUser, ImUserPlus } from 'react-icons/im';
import { RiDragDropFill } from 'react-icons/ri';
const SideBare = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);

  };

  return (
    <div className={collapsed?"sideBar grid grid-cols-12 gap-5 pt-16": "sideBar grid grid-cols-7 gap-5 pt-16" } >
      <div className='fixed'>
      <Sidebar className='sidBartop' collapsed={collapsed}>
        <div className='imgAndBtn'>
          <button className='text-xl p-1 btnColl' onClick={handleToggle}>
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <Menu iconShape="circle" className='text-black'>
        <SubMenu label='User Management'  icon={<FaUserPlus />} className='text-black mt-5'>
          <MenuItem>
            <Link to="/add-user" className=" flex flex-row items-center gap-3 px-7">
            <FaUserPlus /> <span>Add User</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/all-users" className=" flex flex-row items-center gap-3 px-7">
            <FaUserGroup /> <span>All Users</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/invite-users" className=" flex flex-row items-center gap-3 px-7">
            <TbBrandTelegram /> <span>Invite Users</span>
            </Link>
          </MenuItem>
        </SubMenu>
        <SubMenu label='Departments'  icon={<FaRegListAlt />} className='text-black'>
          <MenuItem>
            <Link to="/departments" className=" flex flex-row items-center gap-3 px-2">
            <FaRegListAlt /> <span>Departments</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/create-departments" className=" flex flex-row items-center gap-3 px-2">
            <PiNoteLight className='text-xl'/> <span>Create Departments</span>
            </Link>
          </MenuItem>
        </SubMenu>
        <SubMenu label='Employees'  icon={<ImUser className='text-xl' />} className='text-black'>
          <MenuItem>
            <Link to="/employees" className=" flex flex-row items-center gap-3 px-2">
            <ImUser className='text-xl' /> <span>Employees</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/addEmployee" className=" flex flex-row items-center gap-3 px-2">
            <ImUserPlus className='text-xl'/> <span>Add Employee</span>
            </Link>
          </MenuItem>
        </SubMenu>
       
          <Link to="/dnd" className=" flex flex-row items-center gap-3">
          <MenuItem icon={<RiDragDropFill />}>
           <span>Drag and Drop</span>
           </MenuItem>
          </Link>       
          <Link to="/item" className=" flex flex-row items-center gap-3">
          <MenuItem icon={<FaBars />}>
           <span>Items</span>
           </MenuItem>
          </Link>       
          <Link to="/profile"className="flex flex-row items-center gap-3">
          <MenuItem icon={<FaUser />}>
           <span>Profile</span>       
        </MenuItem>
          </Link>
      </Menu>
      </Sidebar>
      </div>
      <main className={collapsed?"col-start-2 col-end-13 py-10 pl-28 pr-10": "col-start-2 col-end-8 py-10 pl-28 pr-10" } >
      <Outlet></Outlet>
      </main>
    </div>
  );
};

export default SideBare;
