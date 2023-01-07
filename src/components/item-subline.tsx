import { Link, Text } from '@chakra-ui/react';

type ItemSublineProps = {
	score: number;
	by: string;
	time: number;
	kids?: number[];
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
};

const ItemSubline = ({ score, by, time, kids, onClick }: ItemSublineProps) => {
	const commentPart = (kids?.length ?? 0) + ' comment' + ((kids?.length ?? 0) > 1 ? 's' : '');

	return (
		<Text fontSize='xs' color='grey'>
			{score && score + ' point' + (score > 1 ? 's ' : ' ')}
			{'by ' + by}
			{' | '}
			{new Date(time * 1000).toLocaleString()}
			{' | '}
			{onClick ? <Link onClick={onClick}>{commentPart}</Link> : <>{commentPart}</>}
		</Text>
	);
};

export default ItemSubline;
