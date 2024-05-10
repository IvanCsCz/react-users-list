import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';

const INITIAL_STATE = {
	search: '',
	onlyActive: false,
	sortBy: SORT_OPTIONS.DEFAULT,
	page: 1,
	itemsPerPage: 6
};

export const useFilters = () => {
	const [filters, setFilters] = useState(INITIAL_STATE);

	const setSearch = (search) =>
		setFilters({
			...filters,
			page: 1,
			search
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			page: 1,
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
			page: 1,
			itemsPerPage
		});
	};

	const resetFilters = () => {
		setFilters(INITIAL_STATE);
	};

	const { search, onlyActive, sortBy, page, itemsPerPage } = filters;

	return {
		filters: {
			search,
			onlyActive,
			sortBy
		},
		pagination: {
			page,
			itemsPerPage
		},
		filtersSetters: {
			setSearch,
			setOnlyActive,
			setSortBy
		},
		paginationSetters: {
			setPage,
			setItemsPerPage
		},
		resetFilters
	};
};
