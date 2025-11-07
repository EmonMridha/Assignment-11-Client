import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import VolunteerNeedsNow from "../Pages/Home/VolunteerNeedsNow";
import AddVolunterNeedPage from "../Pages/AddVolunterNeedPage";
import PostDetails from "../Pages/Home/PostDetails";
import BeVolunteer from "../Pages/BeVolunteer";
import AllVolunteerNeedPosts from "../Pages/AllVolunteerNeedPosts";
import ManageMyPosts from "../Pages/ManageMyPosts";
import UpdatePosts from "../Pages/UpdatePosts";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://volunteer-server-inky.vercel.app/posts').then(res => res.json()),
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path:'/managePosts',
        Component: ManageMyPosts
      },
      {
        path: '/allVolunterNeed',
        loader: ()=> fetch('https://volunteer-server-inky.vercel.app/posts'),
        Component: AllVolunteerNeedPosts
      },
      {
        path: '/addVolunteer',
        Component: AddVolunterNeedPage
      },
      {
        path: '/posts/:id',
        loader: ({ params }) => fetch(`https://volunteer-server-inky.vercel.app/posts/${params.id}`),
        Component: PostDetails,
      }, 
      {
        path: '/beVolunteer/:id',
        loader: ({params})=>fetch(`https://volunteer-server-inky.vercel.app/posts/${params.id}`),
        Component: BeVolunteer
      },
      {
        path:'/updatePosts/:id',
        Component: UpdatePosts
      }
    ]
  },
]);

export default Router;