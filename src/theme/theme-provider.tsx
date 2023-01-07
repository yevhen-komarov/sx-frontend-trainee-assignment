import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';

const theme = extendTheme({
	colors,
	fonts,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
