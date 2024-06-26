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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path: '/add-user',
              element: <AddUser></AddUser>
          },
          {
              path: '/invite-users',
              element: <InviteUser></InviteUser>
          },
          {
            path: 'mail',
            element: <Notification></Notification>,
            children:[
                {
                    path: 'inbox',
                    element:<Inbox></Inbox>
                },
                {
                    path: 'sent',
                    element:<Sent></Sent>
                },
                {
                    path: 'draft',
                    element:<Draft></Draft>
                },
            ]
          },
        ]},
        {
        path: "/logIn",
        element:<LogIn></LogIn>
        },
        {
            path:"*",
            element:<div className="text-black p-10 text-center">
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
          }
    ])