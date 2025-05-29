import { USER_ROLES } from '../../constants/userRoles';
import style from './UserRole.module.css';

const ROLE_STYLES = {
	[USER_ROLES.TEACHER]: ['Teacher', style.teacher],
	[USER_ROLES.STUDENT]: ['Student', style.student],
	[USER_ROLES.OTHER]: ['Other', style.other]
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};

export default UserRole;
