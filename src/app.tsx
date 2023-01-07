import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/home-page';
import StoryPage from './components/story-page';
import MainLayout from './components/main-layout';
import NotFoundPage from './components/not-found-page';
import ThemeProvider from './theme/theme-provider';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename=''>
				<ThemeProvider>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route index element={<HomePage />} />
							<Route path='/:id' element={<StoryPage />} />
							<Route path='*' element={<NotFoundPage />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
