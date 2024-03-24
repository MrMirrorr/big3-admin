import { ReactComponent as Search } from './search.svg';
import styles from './SearchInput.module.scss';

interface Props {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export const SearchInput = ({
	value = '',
	onChange = () => {},
	placeholder = '',
}: Props) => {
	return (
		<div className={styles.inputContainer}>
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<div className={styles.icon}>
				<Search />
			</div>
		</div>
	);
};
