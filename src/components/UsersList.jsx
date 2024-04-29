import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(({ id, name, active, role }) => (
				<UserRow key={id} name={name} active={active} role={role} />
			))
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<div className={style.list}>
			<h1>Lista de usuarios</h1>
			{usersRendered}
		</div>
	);
};

export default UsersList;
