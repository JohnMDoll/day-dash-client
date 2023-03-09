import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../home/home"; 
import { Profile } from "../profile/Profile";

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
