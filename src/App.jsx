import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AboutPage,
  BlogPage,
  Contact,
  Footer,
  Header,
  Home,
  Page404,
  ProductsPage,
} from "./components/utils/helper";

import "./styles/app.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  );
}

export default App;
