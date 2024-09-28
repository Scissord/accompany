import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { View } from '@context';
import NotFound from '@pages/404';
import routes from '@routes';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<View title={route.title} display={route.element} />}
          />
        ))}

        {/* 404 */}
        <Route
          path="*"
          element={<View title={"404"} display={<NotFound/>} />}
        />
      </Routes>
    </Router>
  )
}

export default App
