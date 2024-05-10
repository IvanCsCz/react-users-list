import IconButtton from '../buttons/IconButton';
import XMarkIcon from '../icons/XMarkIcon';
import style from './UserFormLayout.module.css';

const UserFormLayout = ({ onClose, children }) => (
	<div className={style.wrapper}>
		<IconButtton
			className={style.close}
			icon={XMarkIcon}
			filled
			onClick={onClose}
		/>
		{children}
	</div>
);

export default UserFormLayout;
