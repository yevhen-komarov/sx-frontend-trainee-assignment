import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';

const NavButton = forwardRef<ButtonProps, 'div'>((props, ref) => (
	<Button
		size='xs'
		variant='outline'
		color='white'
		_hover={{ bg: 'hackernews.500' }}
		_active={{
			bg: 'white',
			color: 'hackernews.400',
		}}
		borderRadius='0'
		ref={ref}
		{...props}
	/>
));

export default NavButton;
