import CheckCircleIcon from '../icons/CheckCircleIcon';
import UpdateIcon from '../icons/UpdateIcon';
import XCircleIcon from '../icons/XCircleIcon';
import style from './InputTextAsync.module.css';

const InputTextAsync = ({
	label,
	loading,
	success,
	error,
	className,
	...props
}) => {
	const icon = getIcon(loading, success, error);

	return (
		<label className={`${style.wrapper} ${className || ''} `}>
			<span className={style.label}>{label}</span>
			<input
				{...props}
				className={`${style.input} ${error ? style.borderError : ''}`}
				type='text'
			/>
			{icon}
			{error && <span className={style.error}>{error}</span>}
		</label>
	);
};

const getIcon = (loading, success, error) => {
	if (loading) return <UpdateIcon className={style.loadingIcon} />;
	if (success) return <CheckCircleIcon className={style.successIcon} />;
	if (error) return <XCircleIcon className={style.errorIcon} />;

	return null;
};
export default InputTextAsync;
