import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import IconButtton from '../buttons/IconButton';
import XMarkIcon from '../icons/XMarkIcon';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (!children) return;

		document.body.classList.add(style.bodyOverflow);

		const handleClickOutside = (ev) => {
			if (!modalRef.current.contains(ev.target)) closeModal();
		};
		document.addEventListener('click', handleClickOutside, { capture: true });

		return () => {
			document.body.classList.remove(style.bodyOverflow);
			document.removeEventListener('click', handleClickOutside, {
				capture: true
			});
		};
	}, [children, closeModal]);

	if (!children) return null;

	return createPortal(
		<div className={style.overlay}>
			<div ref={modalRef} className={style.modal}>
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
