import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useGetItemQuery } from 'src/services/hacker-news';
import Comments from './comments';
import ItemSubline from './item-subline';

const Comment = ({ id }: { id: number }) => {
	const { data } = useGetItemQuery(id);
	const [expanded, setExpanded] = useState<boolean>(false);

	return data ? (
		<Box mt={4} px={4} borderLeft='2px' borderLeftColor='hackernews.300'>
			<Text fontSize='xs'>
				<span dangerouslySetInnerHTML={{ __html: data.text || '' }} />
			</Text>
			<ItemSubline {...data} onClick={() => setExpanded((expanded) => !expanded)} />
			{expanded && (
				<Box ml={4}>
					<Comments items={data.kids} />
				</Box>
			)}
		</Box>
	) : null;
};

export default Comment;
