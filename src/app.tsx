import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import ItemPage from './components/item-page';
import MainLayout from './components/main-layout';
import NotFoundPage from './components/not-found-page';
import ThemeProvider from './theme/theme-provider';

function App() {
	return (
		<BrowserRouter basename=''>
			<ThemeProvider>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/:id' element={<ItemPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
