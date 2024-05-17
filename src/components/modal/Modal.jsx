import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconButtton from '../buttons/IconButton';
import XMarkIcon from '../icons/XMarkIcon';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
		if (!children) return;

		document.body.classList.add(style.bodyOverflow);

		return () => {
			document.body.classList.remove(style.bodyOverflow);
		};
	}, [children]);

	if (!children) return null;

	return createPortal(
		<div className={style.overlay}>
			<div className={style.modal}>
				<IconButtton
					className={style.close}
					icon={XMarkIcon}
					filled
					onClick={closeModal}
				/>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
