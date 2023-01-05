import { Container } from '@chakra-ui/react';
import useDocumentTitle from 'src/hooks/use-document-title';

const Home = () => {
	useDocumentTitle('Stories');

	return <Container maxW='container.xl'></Container>;
};

export default Home;
