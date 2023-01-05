import { Box, Center, Heading } from '@chakra-ui/react';
import useDocumentTitle from 'src/hooks/use-document-title';

const NotFoundPage = () => {
	useDocumentTitle('Item not found | Hacker News');

	return (
		<Center minH='100%'>
			<Box>
				<Heading as='h1' size='4xl' fontSize='100px'>
					Oops!
				</Heading>
				<Heading as='h2' size='2xl'>
					It looks like you've lost your way
				</Heading>
			</Box>
		</Center>
	);
};

export default NotFoundPage;
