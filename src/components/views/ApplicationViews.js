import { Navigate, Route, Routes } from "react-router-dom"
import { FriendProfile } from "../friendpage/FriendProfile";
import { Home } from "../home/home"; 
import { Profile } from "../profile/Profile";

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/day-dash-client" element={<Navigate to="/home" replace />} />
      <Route path="/day-dash-client/home" element={<Home />} />
      <Route path={`/day-dash-client/friend/:id`} element={<FriendProfile />} />
      <Route path="/day-dash-client/profile" element={<Profile />} />
    </Routes>
  );
}
