import { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { IOption } from '../sharedTypes';

interface Props<T extends string | number> {
	options: IOption<T>[];
	onChangeHandler: (selectedValues: T[]) => void;
}

export const MultiSelect = <T extends string | number>({
	options,
	onChangeHandler,
}: Props<T>) => {
	const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

	const getValues = (): IOption<T>[] => {
		return selectedOptions
			? options.filter((o) => selectedOptions.indexOf(o.value) >= 0)
			: [];
	};

	const onChangeMulti = (selected: MultiValue<IOption<T>>) => {
		const selectedValues = selected.map((o) => o.value);
		setSelectedOptions(selectedValues);
		onChangeHandler(selectedValues);
	};

	return (
		<Select
			className="select select--multi"
			classNamePrefix="custom-select"
			options={options}
			value={getValues()}
			onChange={onChangeMulti}
			isMulti
		/>
	);
};
