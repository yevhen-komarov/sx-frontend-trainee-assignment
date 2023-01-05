import { Link as ReachLink } from 'react-router-dom';
import { HStack, Heading, Image } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<HStack h='32px' px='4' align='center' as={ReachLink} bg='rgb(255, 102, 0)' to='/'>
			<Image src='https://news.ycombinator.com/y18.gif' alt='logo' border='1px white solid' />
			<Heading as='h1' size='md' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' flexGrow={1}>
				Hacker News
			</Heading>
		</HStack>
	);
};

export default Navbar;
