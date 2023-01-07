import { useCallback } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Flex, HStack, Heading, Image } from '@chakra-ui/react';
import logo from '../images/y18.gif';
import NavButton from './nav-button';
import { useGetUpdatesMutation, useLazyGetNewstoriesQuery } from 'src/services/hacker-news';

const MainLayout = () => {
	const location = useLocation();

	const [updatesTrigger] = useGetUpdatesMutation();
	const [newstoriesTrigger] = useLazyGetNewstoriesQuery();

	const isHome = location.pathname === '/';

	const reloadCallback = useCallback(() => {
		isHome && newstoriesTrigger();
		updatesTrigger();
	}, [isHome, newstoriesTrigger, updatesTrigger]);

	return (
		<Container maxW='container.xl'>
			<Flex h='100vh' flexDirection='column'>
				<HStack h='48px' px='4' align='center' bg='hackernews.400' mt='2' mb={4}>
					{location.pathname !== '/' && (
						<NavButton as={Link} to='/'>
							Home
						</NavButton>
					)}

					<Image src={logo} alt='logo' border='1px white solid' w='24px' h='24px' />
					<Heading as='h1' size='md' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
						Hacker News
					</Heading>

					<NavButton onClick={() => reloadCallback()}>Reload</NavButton>
				</HStack>

				<Outlet />
			</Flex>
		</Container>
	);
};

export default MainLayout;
