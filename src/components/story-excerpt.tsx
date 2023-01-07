import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, HStack, Skeleton, Box, Link, Flex } from '@chakra-ui/react';
import { useGetItemQuery } from '../services/hacker-news';
import ItemSubline from './item-subline';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const StoryExcerpt = ({ id, index }: { id: number; index: number }) => {
	const { data } = useGetItemQuery(id);
	const navigate = useNavigate();

	const titleSkeletonWidth = useMemo(() => 300 + Math.round(Math.random() * 400), [id]); // eslint-disable-line react-hooks/exhaustive-deps
	const descriptionSkeletonWidth = useMemo(() => 300 + Math.round(Math.random() * 100), [id]); // eslint-disable-line react-hooks/exhaustive-deps

	const title = data && (
		<Flex color='hackernews.400' alignItems='center' as='b' textDecorationColor='hackernews.400'>
			{data.title}
			{data?.url && <ExternalLinkIcon mx='8px' />}
		</Flex>
	);

	return (
		<HStack spacing='4' alignItems='flex-start'>
			<Text color='hackernews.400' as='b' width='8' align='end'>
				{index + 1}
			</Text>
			<Box>
				{data ? (
					<>
						{data?.url ? (
							<Link href={data?.url} isExternal>
								{title}
							</Link>
						) : (
							<>{title}</>
						)}
						<ItemSubline {...data} onClick={() => navigate(`/${id}`)} />
					</>
				) : (
					<>
						<Skeleton mt='10px' h='14px' w={`${titleSkeletonWidth}px`} startColor='hackernews.100' endColor='hackernews.300' />
						<Skeleton mt='10px' h='8px' w={`${descriptionSkeletonWidth}px`} />
					</>
				)}
			</Box>
		</HStack>
	);
};

export default StoryExcerpt;
