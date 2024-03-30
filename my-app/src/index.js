import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";

export default function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />           
                    <Route path="blogs" element={<Blogs />} />           
                    <Route path="contact" element={<Contact />} />           <
                         Route path="*" element={<NoPage />} />         
                    </Route>       
               </Routes>     
          </BrowserRouter>   );
} 

ReactDOM.render(<App />, document.getElementById("root"));