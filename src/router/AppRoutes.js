import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute";

//LAYOUTS
import MainLayout from "layouts/Main";

// MAIN
import Users from "pages/main/Users";

// GLOBAL
import NotFound from "pages/global/NotFound";

const mainRoutes = [
  {
    path: "/",
    component: Users
  }
];

export default function AppRoutes() {
  const DynamicLayout = MainLayout;

  return (
    <DynamicLayout>
      <Switch>
        {mainRoutes.map(route => <AppRoute key={route.path} {...route} />)}
        <NotFound/>
      </Switch>
    </DynamicLayout>
  );
}
