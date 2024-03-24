import { useDialog } from '../../contexts/DialogContext';
import { useBodyScrollLock } from '../../hooks';
import { Button } from '../../ui';
import { ReactComponent as CloseIcon } from './close.svg';
import styles from './Dialog.module.scss';

export const Dialog = () => {
	const { isOpen, dialogData, closeDialog } = useDialog();
	const { title, text, onConfirm } = dialogData;
	useBodyScrollLock(isOpen);

	const handleCancel = () => {
		closeDialog();
	};

	const handleConfirm = () => {
		onConfirm();
		closeDialog();
	};

	if (!isOpen) return null;

	return (
		<>
			<div className={styles.overlay} />
			<div className={styles.dialog}>
				<div className={styles.header}>
					<h2>{title}</h2>
					<CloseIcon className={styles.close} onClick={handleCancel} />
				</div>
				<p>{text}</p>
				<div className={styles.buttons}>
					<Button variant="secondary" onClick={handleCancel}>
						No
					</Button>
					<Button onClick={handleConfirm}>Yes</Button>
				</div>
			</div>
		</>
	);
};
