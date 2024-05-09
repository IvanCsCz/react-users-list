import { useState } from 'react';
import { USER_ROLES } from '../../constants/userRoles';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import IconButtton from '../buttons/IconButton';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import XMarkIcon from '../icons/XMarkIcon';
import style from './UserCreateForm.module.css';

const UserCreateForm = ({ onClose }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { name, username, setName, setUsername } = useCreateForm();

	const idDisabled =
		!name.value ||
		name.error ||
		!username.value ||
		username.error ||
		username.loading ||
		isSubmitting;

	return (
		<div className={style.wrapper}>
			<IconButtton
				className={style.close}
				icon={XMarkIcon}
				filled
				onClick={onClose}
			/>
			<form
				onSubmit={(ev) =>
					handleSubmit(ev, name, username, setIsSubmitting, onClose)
				}
			>
				<div className={style.row}>
					<InputText
						className={style.input}
						label='nombre'
						placeholder='John Doe'
						error={name.error}
						value={name.value}
						onChange={(ev) => setName(ev.target.value)}
					/>
					<InputTextAsync
						className={style.input}
						label='Username'
						placeholder='johndoe'
						success={username.value && !username.loading && !username.error}
						loading={username.loading}
						error={username.error}
						value={username.value}
						onChange={(ev) => setUsername(ev.target.value)}
					/>
				</div>
				<div className={style.row}>
					<Select name='role'>
						<option value={USER_ROLES.TEACHER}>Profesor</option>
						<option value={USER_ROLES.STUDENT}>Alumno</option>
						<option value={USER_ROLES.OTHER}>Otro</option>
					</Select>
					<div className={style.active}>
						<InputCheckbox name='active' />
						<span>¿Activo?</span>
					</div>
					<Button type='submit' disabled={idDisabled}>
						{isSubmitting ? 'Cargando...' : 'Crear usuario'}
					</Button>
				</div>
			</form>
		</div>
	);
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onClose) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const user = {
		id: crypto.randomUUID(),
		name: name.value,
		username: username.value,
		role: ev.target.role.value,
		active: ev.target.active.checked
	};

	const res = await fetch('http://localhost:4000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});

	if (res.ok) {
		// TODO: Actualizar los usuarios
		onClose();
	} else setIsSubmitting(false);
};

export default UserCreateForm;
