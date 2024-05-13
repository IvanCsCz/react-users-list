const ListIcon = (props) => (
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
			d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
		></path>
	</svg>
);

export default ListIcon;
