import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPage, MainPage, UserPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/users" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;