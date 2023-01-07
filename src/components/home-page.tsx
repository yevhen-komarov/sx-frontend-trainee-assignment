import { useRef, useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useGetNewstoriesQuery, useGetUpdatesMutation } from '../services/hacker-news';
import useDocumentTitle from 'src/hooks/use-document-title';
import StoryExcerpt from './story-excerpt';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const HomePage = () => {
	const pollingInterval = useSelector((state: RootState) => state.main.pollingInterval);
	const interval = useRef<NodeJS.Timer>();
	const [trigger] = useGetUpdatesMutation();

	const { data } = useGetNewstoriesQuery(undefined, {
		pollingInterval: pollingInterval,
	});

	useEffect(() => {
		interval.current = setInterval(() => trigger(), pollingInterval);
		return () => clearInterval(interval.current);
	}, [trigger, pollingInterval]);

	useDocumentTitle('Hacker News');

	return (
		<Box overflow='auto' flex={1}>
			<Stack>
				{data?.map((id) => (
					<StoryExcerpt key={id} id={id} index={data.indexOf(id)} />
				))}
			</Stack>
		</Box>
	);
};

export default HomePage;
