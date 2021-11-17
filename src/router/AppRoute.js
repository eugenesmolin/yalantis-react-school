import { Route } from "react-router-dom";

function AppRoute(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

export default AppRoute;
