import { useContext } from 'react';
import { USER_FORMS } from '../../constants/usersForms';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';
import IconButtton from '../buttons/IconButton';
import XMarkIcon from '../icons/XMarkIcon';
import UserCreateForm from './UserCreateForm';
import UserDeleteForm from './UserDeleteForm';
import UserEditForm from './UserEditForm';
import style from './UserFormContainer.module.css';

const FORMS = {
	[USER_FORMS.CREATE]: <UserCreateForm />,
	[USER_FORMS.EDIT]: <UserEditForm />,
	[USER_FORMS.DELETE]: <UserDeleteForm />
};

const UserFormContainer = () => {
	const { currentForm, setFiltersForm } = useContext(UserFormsContext);

	const form = FORMS[currentForm];

	if (!form) return null;

	return (
		<div className={style.wrapper}>
			<IconButtton
				className={style.close}
				icon={XMarkIcon}
				filled
				onClick={setFiltersForm}
			/>
			{form}
		</div>
	);
};

export default UserFormContainer;
