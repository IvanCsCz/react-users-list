import UsersList from './components/UsersList';

const USERS = [
	{
		id: 1,
		name: 'Luis',
		active: true,
		role: 'student'
	},
	{
		id: 2,
		name: 'Yola',
		active: true,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Gus',
		active: true,
		role: 'teacher'
	},
	{
		id: 4,
		name: 'Vale',
		active: false,
		role: 'student'
	},
	{
		id: 5,
		name: 'Jose Ivan Campos Chavez',
		active: true,
		role: ''
	}
];

const App = () => <UsersList users={USERS} />;

export default App;
