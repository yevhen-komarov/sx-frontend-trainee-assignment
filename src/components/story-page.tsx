import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import useDocumentTitle from 'src/hooks/use-document-title';
import NotFoundPage from './not-found-page';
import { Text, Link, Box } from '@chakra-ui/react';

import { useGetItemQuery, useGetUpdatesMutation } from 'src/services/hacker-news';
import Comments from './comments';
import ItemSubline from './item-subline';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const StoryPage = () => {
	const { id } = useParams();
	const { data, isSuccess } = useGetItemQuery(id ? +id : 0);

	const pollingInterval = useSelector((state: RootState) => state.main.pollingInterval);
	const interval = useRef<NodeJS.Timer>();
	const [trigger] = useGetUpdatesMutation();

	useEffect(() => {
		interval.current = setInterval(() => trigger(), pollingInterval);
		return () => clearInterval(interval.current);
	}, [trigger, pollingInterval]);

	useDocumentTitle((data?.title ? data?.title + ' | ' : '') + 'Hacker News');

	if (!data) {
		return isSuccess ? <NotFoundPage /> : null;
	}

	return (
		<>
			<Text color='hackernews.400' as='b'>
				{data.title}
			</Text>
			<Text as={Link} href={data.url} isExternal fontSize='md'>
				{data.url}
			</Text>
			<ItemSubline {...data} />

			<Box overflow='auto' flex={1} mt={4}>
				<Comments items={data.kids} />
			</Box>
		</>
	);
};

export default StoryPage;
