import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Notification from "../Pages/Notification/Notification";
import Inbox from "../Pages/Notification/Inbox";
import Sent from "../Pages/Notification/Sent";
import Draft from "../Pages/Notification/Draft";
import AddUser from "../Pages/User/AddUser";
import InviteUser from "../Pages/User/InviteUser";
import Item from "../Pages/Item/Item";
import AllUser from "../Pages/User/AllUser";
import Profile from "../Pages/Profile/Profile";
import Departments from "../Pages/Departments/Departments";
import CreateDepartments from "../Pages/Departments/CreateDepartments";
import UpdateDepartment from "../Pages/Departments/UpdateDepartment";
import Employees from "../Pages/Employees/Employees";
import AddEmployees from "../Pages/Employees/AddEmployees";
import EmployeeTable from "../Pages/Employees/EmployeeTable";
import DragAndDrop from "../Pages/DragAndDrop/DragAndDrop";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/invite-users",
        element: <InviteUser />,
      },
      {
        path: "/all-users",
        element: <AllUser />,
      },
      {
        path: "/dnd",
        element: <DragAndDrop />,
      },
      {
        path: "/item",
        element: <Item />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/create-departments",
        element: <CreateDepartments />,
      },
      {
        path: "/departments/:id",
        element: <UpdateDepartment />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/departments/${params.id}`),
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/employees/:id",
        element: <EmployeeTable />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/employees/${params.id}`),
      },
      {
        path: "/addEmployee",
        element: <AddEmployees />,
      },
      {
        path: "/mail",
        element: <Notification />,
        children: [
          { path: "", element: <Inbox /> },
          { path: "sent", element: <Sent /> },
          { path: "draft", element: <Draft /> },
        ],
      },
    ],
  },
  { path: "/logIn", element: <LogIn /> },
  {
    path: "*",
    element: (
      <div className="text-black p-10 text-center">
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    ),
  },
]);
