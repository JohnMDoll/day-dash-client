import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Authorized } from './components/views/Authorized';
import { ApplicationViews } from './components/views/ApplicationViews';
import { Navbar } from './components/nav/Navbar';


export const DayDash = () => {
	return <Routes>
		<Route path="/day-dash-client//login" element={<Login />} />

		<Route path="/day-dash-client/*" element={
			<Authorized>
				<Navbar />
				<ApplicationViews />
			</Authorized>
		} />
	</Routes>
}