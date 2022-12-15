import { Routes, Route } from "react-router-dom";
import AddNewBook from "./pages/AddNewBook";
import Home from "./pages/Home";
import NewbookDemo from "./pages/NewBookDemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add-new-book" element={<AddNewBook />}></Route>
      <Route path="/add-new-book-demo" element={<NewbookDemo />}></Route>
    </Routes>
  );
}

export default App;
