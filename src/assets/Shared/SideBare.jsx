import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaUserPlus, FaBars, FaUser, FaTimes } from 'react-icons/fa';
import "../Style/Style.css"
import { Link, Outlet } from 'react-router-dom';
import { FaUserGroup } from 'react-icons/fa6';
import { TbBrandTelegram } from 'react-icons/tb';
const SideBare = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);

  };

  return (
    <div className={collapsed?"sideBar grid grid-cols-12 gap-5 pt-16": "sideBar grid grid-cols-7 gap-5 pt-16" } >
      <Sidebar className='sidBartop' collapsed={collapsed}>
        <div className='imgAndBtn'>
          <button className='text-xl py-3 btnColl' onClick={handleToggle}>
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <Menu iconShape="circle" className='text-black'>
        <SubMenu label='User Management'  icon={<FaUserPlus />} className='text-black mt-5'>
          <MenuItem icon={<FaUserPlus />}>
            <Link to="/add-user" className="flex flex-row items-center gap-3">
              Add User
            </Link>
          </MenuItem>
          <MenuItem icon={<FaUserGroup />}>
            <Link to="/all-users" className="flex flex-row items-center gap-3">
              All Users
            </Link>
          </MenuItem>
          <MenuItem icon={<TbBrandTelegram />}>
            <Link to="/invite-users" className="flex flex-row items-center gap-3">
              Invite Users
            </Link>
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaBars />}>
          <Link to="/items" className='text-black'>
            Items
          </Link>
        </MenuItem>
        <MenuItem icon={<FaUser />}>
          <Link to="/profile" className='text-black'>
            Profile
          </Link>
        </MenuItem>
      </Menu>
      </Sidebar>
      <main className={collapsed?"col-start-2 col-end-13 p-10": "col-start-2 col-end-8 p-10" } >
      <Outlet></Outlet>
      </main>
    </div>
  );
};

export default SideBare;
