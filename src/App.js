import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <Router basename="/hi88-mb/">
      <div style={{ display: "flex", height: "100%" }}>
        <Routes>
          {/* Đặt trang mặc định */}
          <Route path="/" element={<Navigate to="/hi88-mb/" />} />
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
