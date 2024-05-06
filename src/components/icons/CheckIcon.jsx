const CheckIcon = (props) => (
	<svg
		{...props}
		data-slot='icon'
		fill='none'
		strokeWidth='1.5'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden='true'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='m4.5 12.75 6 6 9-13.5'
		></path>
	</svg>
);

export default CheckIcon;
