import UserDisplay from './UserDisplay';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import IconButtton from './buttons/IconButton';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

const UserRow = ({
	id,
	username,
	name,
	active,
	role,
	setEditForm,
	setDeleteForm
}) => {
	return (
		<div className={style.user}>
			<div className={style.name}>
				<UserDisplay name={name} username={username} />
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<IconButtton
					icon={PencilIcon}
					onClick={() => setEditForm({ id, username, name, active, role })}
				/>
				<IconButtton
					icon={TrashIcon}
					kind='red'
					onClick={() => setDeleteForm({ id, name })}
				/>
			</div>
		</div>
	);
};

export default UserRow;
