import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassName = active ? style.active : style.inactive;

	return (
		<span className={activeClassName}>{active ? 'Activo' : 'Inactivo'}</span>
	);
};

export default UserStatus;
