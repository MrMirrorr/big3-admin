import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { IOption } from '../../../../ui/sharedTypes';
import styles from './ControlledSingleSelect.module.scss';

interface Props {
	id: string;
	label: string;
	options: IOption[];
	control: any;
	rules: any;
	error: boolean;
	errorMessage?: string;
}

export const ControlledSingleSelect = ({
	id,
	label,
	options = [],
	control,
	rules,
	error,
	errorMessage,
}: Props) => {
	return (
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<Controller
				name={id}
				control={control}
				render={({ field: { onChange, value, name, ref } }) => (
					<Select
						className={`select select--single ${error ? 'error' : ''}`}
						classNamePrefix="custom-select"
						options={options}
						isClearable={true}
						name={name}
						ref={ref}
						value={options.find((o) => o.value === value)}
						onChange={(e: any) =>
							e.value
								? onChange(e.value)
								: onChange(e.map((o: any) => o.value))
						}
					/>
				)}
				rules={rules}
			/>
			{error && <div className={styles.errorMsg}>{errorMessage}</div>}
		</div>
	);
};
