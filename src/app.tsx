import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import ThemeProvider from './theme/theme-provider';

function App() {
	return (
		<BrowserRouter basename=''>
			<ThemeProvider>
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
