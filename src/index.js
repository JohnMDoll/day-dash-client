import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DayDash } from './DayDash';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter basename='/day-dash-client'>
		<DayDash />
	</HashRouter>
);

