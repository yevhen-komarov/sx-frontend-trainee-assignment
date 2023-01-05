import { Outlet } from 'react-router';
import { Container, Flex, Box } from '@chakra-ui/react';
import Navbar from './navbar';

const MainLayout = () => {
	return (
		<Container maxW='container.xl'>
			<Flex h='100vh' flexDirection='column' mt='2'>
				<Navbar />
				<Box as='main' overflow='auto' flex={1} py={4}>
					<Outlet />
				</Box>
			</Flex>
		</Container>
	);
};

export default MainLayout;
