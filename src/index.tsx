import React from 'react';
import 'antd/dist/antd.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/Global.scss';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/common/Layout';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppLayout>
					<App />
				</AppLayout>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

reportWebVitals();
