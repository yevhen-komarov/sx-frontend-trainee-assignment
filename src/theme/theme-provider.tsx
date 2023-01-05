import { ChakraProvider } from '@chakra-ui/react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

export default ThemeProvider;
