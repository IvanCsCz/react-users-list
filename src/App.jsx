import UsersList from './components/UsersList';

const USERS = [
	{
		username: 'Luis',
		name: 'Luis Caudillo Torres',
		active: true,
		role: 'student'
	},
	{
		username: 'Yola',
		name: 'Yolanda Ramos Ramos',
		active: true,
		role: 'teacher'
	},
	{
		username: 'Gus',
		name: 'Gustavo Aguayo Yañez',
		active: true,
		role: 'teacher'
	},
	{
		username: 'Vale',
		name: 'Valeria Dominguez',
		active: false,
		role: 'student'
	},
	{
		username: 'Rona',
		name: 'Oscar Ronaldo Rodriguez Vega',
		active: true,
		role: 'teacher'
	},
	{
		username: 'Ivan',
		name: 'José Iván Campos Chavez',
		active: true,
		role: ''
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
