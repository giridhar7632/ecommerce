export const Bag = ({ size }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size || 24}
		height={size || 24}
		viewBox={`0 0 ${size || 24} ${size || 24}`}
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V15q0-1.2.9-2.1.9-.9 2.1-.9h5.5v-.5q0-3.15 2.175-5.325Q20.85 4 24 4q3.15 0 5.325 2.175Q31.5 8.35 31.5 11.5v.5H37q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm8.5-32.5v.5h9v-.5q0-1.9-1.3-3.2Q25.9 7 24 7q-1.9 0-3.2 1.3-1.3 1.3-1.3 3.2ZM11 41h26V15h-5.5v4.5q0 .65-.425 1.075Q30.65 21 30 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15h-9v4.5q0 .65-.425 1.075Q18.65 21 18 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15H11v26Zm0 0V15v26Z' />
	</svg>
)
export const CartIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='shopping-cart'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<circle cx='6' cy='19' r='2' />
		<circle cx='17' cy='19' r='2' />
		<path d='M17 17h-11v-14h-2' />
		<path d='M6 5l14 1l-1 7h-13' />
	</svg>
)

export const Instagram = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='brand-instagram'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<rect x='4' y='4' width='16' height='16' rx='4' />
		<circle cx='12' cy='12' r='3' />
		<line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
	</svg>
)

export const LeftArrow = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='arrow-narrow-left'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<line x1='5' y1='12' x2='19' y2='12' />
		<line x1='5' y1='12' x2='9' y2='16' />
		<line x1='5' y1='12' x2='9' y2='8' />
	</svg>
)

export const Minus = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='circle-minus'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<circle cx='12' cy='12' r='9' />
		<line x1='9' y1='12' x2='15' y2='12' />
	</svg>
)

export const Plus = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='circle-plus'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<circle cx='12' cy='12' r='9' />
		<line x1='9' y1='12' x2='15' y2='12' />
		<line x1='12' y1='9' x2='12' y2='15' />
	</svg>
)

export const Star = ({ fill = 'none' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='star'
		width='16'
		height='16'
		viewBox='0 0 24 24'
		strokeWidth='1'
		stroke='currentColor'
		fill={fill}
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
	</svg>
)

export const Trash = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='trash'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<line x1='4' y1='7' x2='20' y2='7' />
		<line x1='10' y1='11' x2='10' y2='17' />
		<line x1='14' y1='11' x2='14' y2='17' />
		<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
		<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
	</svg>
)

export const Twitter = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='brand-twitter'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
	</svg>
)
