import style from './Button.module.css';

const Button = ({ kind = 'primary', className, ...props }) => {
	const KIND_CLASSNAME = {
		primary: style.primary,
		secondary: style.secondary
	};
	return (
		<button
			{...props}
			className={`${style.button} ${KIND_CLASSNAME[kind]} ${className || ''}`}
		></button>
	);
};

export default Button;
