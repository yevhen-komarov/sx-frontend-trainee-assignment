import { Container } from '@chakra-ui/react';
import useDocumentTitle from 'src/hooks/use-document-title';

const Story = () => {
	useDocumentTitle('Story');

	return <Container maxW='container.xl'></Container>;
};

export default Story;
