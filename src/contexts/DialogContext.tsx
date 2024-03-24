import { createContext, useContext, useState, ReactNode } from 'react';

interface IDialogData {
	title: string;
	text: string;
	onConfirm: () => void;
}

interface IInitialValue {
	isOpen: boolean;
	dialogData: IDialogData;
	openDialog: (dialogData: IDialogData) => void;
	closeDialog: () => void;
}

const initialValue: IInitialValue = {
	isOpen: false,
	dialogData: {
		title: '',
		text: '',
		onConfirm: () => {},
	},
	openDialog: () => {},
	closeDialog: () => {},
};

const DialogContext = createContext(initialValue);

interface Props {
	children: ReactNode;
}

export const DialogProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [dialogData, setDialogData] = useState({
		title: '',
		text: '',
		onConfirm: () => {},
	});

	const openDialog = ({ title, text, onConfirm }: IDialogData) => {
		setIsOpen(true);
		setDialogData({ title, text, onConfirm });
	};

	const closeDialog = () => {
		setIsOpen(false);
		setDialogData({ title: '', text: '', onConfirm: () => {} });
	};

	return (
		<DialogContext.Provider value={{ isOpen, dialogData, openDialog, closeDialog }}>
			{children}
		</DialogContext.Provider>
	);
};

export const useDialog = () => useContext(DialogContext);
