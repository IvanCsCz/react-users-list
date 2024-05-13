import CheckCircleIcon from '../icons/CheckCircleIcon';
import XCircleIcon from '../icons/XCircleIcon';
import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassName = active ? style.active : style.inactive;
	const Icon = active ? CheckCircleIcon : XCircleIcon;

	return (
		<div className={activeClassName}>
			<Icon className={style.icon} />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserStatus;
