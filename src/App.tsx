import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './interface';
import { routes } from './config/route';
function generationRoutes(route: route): ReactNode {
  let { path, element, children } = route;
  let Element: React.FC = element();
  let routeComponent = (
    <Route key={path} path={path} element={<Element />}>
      {children.map((item: route) => {
        return generationRoutes(item);
      })}
    </Route>
  );
  return routeComponent;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>{generationRoutes(routes)}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
