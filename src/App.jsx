import UsersList from './components/UsersList';
import { USER_ROLES } from './constants/userRoles';

const USERS = [
	{
		username: 'Luis',
		name: 'Luis Caudillo Torres',
		active: true,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'Yola',
		name: 'Yolanda Ramos Ramos',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'Gus',
		name: 'Gustavo Aguayo Yañez',
		active: true,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'Vale',
		name: 'Valeria Dominguez',
		active: false,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'Rona',
		name: 'Oscar Ronaldo Rodriguez Vega',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'Ivan',
		name: 'José Iván Campos Chavez',
		active: true,
		role: USER_ROLES.OTHER
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
