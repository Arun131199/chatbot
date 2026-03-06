import App from "../App";
import Login from "../pages/Login";

const mainRouter = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "auth",
        Component: Login,
      },
    ],
  },
];

export default mainRouter;