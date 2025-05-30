import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import {
	onlyActiveChanged,
	searchChanged,
	sortByChanged
} from '../../lib/actions/filtersActions';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputSearch from '../forms/InputSearch';
import Select from '../forms/Select';
import Modal from '../modal/Modal';
import UserCreateForm from '../user-forms/UserCreateForm';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({ search, onlyActive, sortBy, dispatchFilters }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={style.form}>
			<Modal closeModal={() => setShowModal(false)}>
				{showModal && <UserCreateForm closeModal={() => setShowModal(false)} />}
			</Modal>
			<div className={style.row}>
				<InputSearch
					placeholder='Search...'
					value={search}
					onChange={(ev) => dispatchFilters(searchChanged(ev.target.value))}
				/>

				<Select
					value={sortBy}
					onChange={(ev) =>
						dispatchFilters(sortByChanged(Number(ev.target.value)))
					}
				>
					<option value={SORT_OPTIONS.DEFAULT}>By default</option>
					<option value={SORT_OPTIONS.NAME}>By name</option>
					<option value={SORT_OPTIONS.ROLE}>By role</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ACTIVE}>By active status</option>
					)}
				</Select>
			</div>
			<div className={style.row}>
				<div className={style.active}>
					<InputCheckbox
						className={style.checkbox}
						checked={onlyActive}
						onChange={(ev) =>
							dispatchFilters(onlyActiveChanged(ev.target.checked))
						}
					/>
					<p>Show only active</p>
				</div>
				<Button onClick={() => setShowModal(true)}>Add user</Button>
			</div>
		</div>
	);
};
export default UsersListFilters;
