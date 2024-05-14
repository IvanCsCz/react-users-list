import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import style from './UsersListPagination.module.css';

const UsersListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalUsers
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={(ev) => setItemsPerPage(Number(ev.target.value))}
			>
				<option value={4}>4</option>
				<option value={6}>6</option>
				<option value={8}>8</option>
			</Select>
			<p>Elementos por página</p>
		</div>
		<PageSelector
			page={page}
			setPage={setPage}
			totalPages={Math.ceil(totalUsers / itemsPerPage)}
		/>
	</div>
);

export default UsersListPagination;
