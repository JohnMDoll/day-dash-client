import { Navigate, Route, Routes } from "react-router-dom"
import { FriendProfile } from "../friendpage/FriendProfile";
import { Home } from "../home/home"; 
import { Profile } from "../profile/Profile";

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="./" element={<Navigate to="/home" />} />
      <Route path="./home" element={<Home />} />
      <Route path={`./friend/:id`} element={<FriendProfile />} />
      <Route path="./profile" element={<Profile />} />
    </Routes>
  );
}
