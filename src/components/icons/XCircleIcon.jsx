const XCircleIcon = (props) => (
	<svg
		data-slot='icon'
		fill='none'
		strokeWidth='1.5'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden='true'
		{...props}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
		></path>
	</svg>
);

export default XCircleIcon;
