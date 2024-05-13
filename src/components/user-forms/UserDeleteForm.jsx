import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = () => {
	const { onSuccess, currentUser, setFiltersForm } =
		useContext(UserFormsContext);

	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			onSubmit={(ev) =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess)
			}
		>
			<p className={style.text}>
				¿Estás seguro de que quieres eliminar al usuario {'"'}
				{currentUser.name}
				{'"'}?
			</p>
			<div className={style.row}>
				<Button
					type='button'
					kind='secondary'
					onClick={setFiltersForm}
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Cargando...' : 'Cancelar'}
				</Button>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Eliminar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, userId, setIsSubmitting, onSuccess) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const success = await deleteUserById(userId);

	if (success) {
		onSuccess();
	} else setIsSubmitting(false);
};

export default UserDeleteForm;
