import { PAGINATION } from '../../constants/pagination';
import {
	itemsPerPageChanged,
	pageChanged
} from '../../lib/actions/filtersActions';
import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import style from './UsersListPagination.module.css';

const UsersListPagination = ({
	page,
	itemsPerPage,
	totalUsers,
	dispatchFilters
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={(ev) =>
					dispatchFilters(itemsPerPageChanged(Number(ev.target.value)))
				}
			>
				{PAGINATION.ITEMS_PER_PAGE_VALUES.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</Select>
			<p>Items per page</p>
		</div>
		<PageSelector
			page={page}
			setPage={(newPage) => dispatchFilters(pageChanged(newPage))}
			totalPages={Math.ceil(totalUsers / itemsPerPage)}
		/>
	</div>
);

export default UsersListPagination;
