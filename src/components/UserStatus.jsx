import style from './UserStatus.module.css';
import CheckCircleIcon from './icons/CheckCircleIcon';
import XCircleIcon from './icons/XCircleIcon';

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
