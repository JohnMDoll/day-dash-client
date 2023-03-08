import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Authorized } from './components/views/Authorized';
import { ApplicationViews } from './components/views/ApplicationViews';


export const DayDash = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />

		<Route path="*" element={
			<Authorized>
				<ApplicationViews />
			</Authorized>
		} />
	</Routes>
}