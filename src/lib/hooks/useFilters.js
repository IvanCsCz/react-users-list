import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT,
		page: 1,
		itemsPerPage: 2
	});

	const setSearch = (search) =>
		setFilters({
			...filters,
			page: 1,
			search
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			sortBy
		});

	const setOnlyActive = (onlyActive) => {
		const newSortBy =
			onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
				? SORT_OPTIONS.DEFAULT
				: filters.sortBy;

		setFilters({
			...filters,
			sortBy: newSortBy,
			page: 1,
			onlyActive
		});
	};

	const setPage = (page) => {
		setFilters({
			...filters,
			page
		});
	};
	const setItemsPerPage = (itemsPerPage) => {
		setFilters({
			...filters,
			itemsPerPage
		});
	};
	return {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	};
};
