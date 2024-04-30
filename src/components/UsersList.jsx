import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const [search, setSearch] = useState('jo');

	const normalizedSearch = search.toLowerCase();

	const usersFiltered = search
		? users.filter((user) =>
				user.name.toLowerCase().startsWith(normalizedSearch)
		  )
		: users;

	const usersRendered =
		usersFiltered.length > 0 ? (
			usersFiltered.map(({ id, name, active, role }) => (
				<UserRow key={id} name={name} active={active} role={role} />
			))
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<div className={style.list}>
			<h1>Lista de usuarios</h1>
			<input
				type='text'
				value={search}
				onChange={(ev) => setSearch(ev.target.value)}
			/>
			{/* Formato no controlado
			<form
				onSubmit={(ev) => {
					ev.preventDefault();
					setSearch(ev.target.search.value);
				}}
			>
				<input type='text' name='search'></input>
				<button type='submit'>Buscar</button>
			</form> */}
			{usersRendered}
		</div>
	);
};

export default UsersList;
