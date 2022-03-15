import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../screen/about/about';
import AppKu from '../screen/landing-page/landing-page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppKu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
