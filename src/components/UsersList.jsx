import { useState } from 'react';
import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users, toggleUserActive } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1>Lista de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows
				users={usersFiltered}
				toggleUserActive={toggleUserActive}
			/>
		</div>
	);
};

const useUsers = (initialUsers) => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = (userId) => {
		const newUsers = [...users];

		const userIndex = newUsers.findIndex((user) => user.id === userId);
		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;

		setUsers(newUsers);
	};

	return {
		users,
		toggleUserActive
	};
};
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const setSearch = (search) =>
		setFilters({
			...filters,
			search
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			sortBy
		});

	const setOnlyActive = (onlyActive) =>
		setFilters({
			...filters,
			onlyActive
		});

	return { ...filters, setSearch, setOnlyActive, setSortBy };
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter((user) => user.active);
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLowerCase();

	return users.filter((user) =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
