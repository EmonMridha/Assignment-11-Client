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
import PrivateRoute from "../Pages/PrivateRoute";
import NotFound from "../Pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
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
        path: '/managePosts',
        loader: () => fetch(`https://volunteer-server-inky.vercel.app/requests`).then(res => res.json()),
        Component: () => (
          <PrivateRoute>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoute>
        )
      },
      {
        path: '/allVolunterNeed',
        loader: () => fetch('https://volunteer-server-inky.vercel.app/posts'),
        Component: AllVolunteerNeedPosts
      },
      {
        path: '/addVolunteer',
        Component: () => {
          return (
            <PrivateRoute>
              <AddVolunterNeedPage />
            </PrivateRoute>
          );
        }
      },
      {
        path: '/posts/:id',
        loader: ({ params }) => fetch(`https://volunteer-server-inky.vercel.app/posts/${params.id}`),
        Component: () => (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/beVolunteer/:id',
        loader: ({ params }) => fetch(`https://volunteer-server-inky.vercel.app/posts/${params.id}`),
        Component: () => (
          <PrivateRoute>
            <BeVolunteer></BeVolunteer>
          </PrivateRoute>
        )
      },
      {
        path: '/updatePosts/:id',
        loader: ({ params }) => fetch(`https://volunteer-server-inky.vercel.app/posts/${params.id}`),
        Component: () => (
          <PrivateRoute>
            <UpdatePosts></UpdatePosts>
          </PrivateRoute>
        )
      }
    ]
  },
]);

export default Router;