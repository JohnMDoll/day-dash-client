import { Route, Routes } from "react-router-dom"
import { Home } from "../home/home"; 

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
