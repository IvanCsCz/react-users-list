import { useState } from 'react';
import IconButtton from '../buttons/IconButton';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import Modal from '../modal/Modal';
import UserDeleteForm from '../user-forms/UserDeleteForm';
import UserEditForm from '../user-forms/UserEditForm';

const UserActions = ({ user }) => {
	const [modalContent, setModalContent] = useState();

	return (
		<>
			<Modal closeModal={() => setModalContent()}>{modalContent}</Modal>

			<IconButtton
				icon={PencilIcon}
				onClick={() =>
					setModalContent(
						<UserEditForm
							closeModal={() => setModalContent()}
							currentUser={user}
						/>
					)
				}
			/>
			<IconButtton
				icon={TrashIcon}
				kind='red'
				onClick={() =>
					setModalContent(
						<UserDeleteForm
							closeModal={() => setModalContent()}
							currentUser={user}
						/>
					)
				}
			/>
		</>
	);
};

export default UserActions;
