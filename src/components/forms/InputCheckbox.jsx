import CheckIcon from '../icons/CheckIcon';
import style from './InputCheckbox.module.css';

const InputCheckbox = ({ className, ...props }) => (
	<label className={`${style.label} ${className || ''}`}>
		<input {...props} className={style.input} type='checkbox' />
		<CheckIcon className={style.check} />
	</label>
);

export default InputCheckbox;
