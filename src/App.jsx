import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AboutPage,
  BlogPage,
  Contact,
  Footer,
  Header,
  Home,
  Page404,
  ProductsPage
} from "./components/utils/helper";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
