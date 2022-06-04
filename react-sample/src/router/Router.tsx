import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleDetail } from "../components/pages/ArticleDetail";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { User } from "../components/pages/User";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<ArticleDetail />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
