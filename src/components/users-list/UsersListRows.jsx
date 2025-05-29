import UserCard from './UserCard';
import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users, error, loading, showRowsFormat }) => {
	if (loading) return <p>Loading users...</p>;
	if (error) return <p>Error loading users</p>;
	if (!users.length) return <p>No users available</p>;

	const UserComponent = showRowsFormat ? UserRow : UserCard;

	return (
		<div className={style.container}>
			{users.map((user) => (
				<UserComponent key={user.id} user={user} />
			))}
		</div>
	);
};

export default UsersListRows;
