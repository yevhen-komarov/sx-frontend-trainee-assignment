import Comment from './comment';

const Comments = ({ items }: { items?: number[] }) => {
	return items ? (
		<>
			{items.map((id) => (
				<Comment key={id} id={id} />
			))}
		</>
	) : null;
};

export default Comments;
