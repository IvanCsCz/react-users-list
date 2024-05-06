import { useState } from 'react';
import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
};

const useUsers = (initialUsers) => {
	const [users, setUsers] = useState(initialUsers);

	return { users };
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

	const setOnlyActive = (onlyActive) => {
		if (onlyActive && filters.sortBy === 3) {
			setFilters({
				...filters,
				onlyActive,
				sortBy: 0
			});
		}
		setFilters({
			...filters,
			onlyActive
		});
	};

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
		user.name.toLowerCase().includes(lowerCaseSearch)
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
		case 2:
			return sortedUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === 'teacher') return -1;
				if (a.role === 'student' && b.role === 'other') return -1;
				return 1;
			});
		case 3:
			return sortedUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
