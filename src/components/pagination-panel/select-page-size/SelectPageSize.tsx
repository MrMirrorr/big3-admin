import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { IOption, OPTIONS } from './selectOptions';

interface Props {
	pageSize: number;
	handleChangePageCount: (selectedValue: number) => void;
}

export const SelectPageSize = ({ pageSize, handleChangePageCount }: Props) => {
	const initialOption = OPTIONS.find((option) => option.value === pageSize);
	const [selectedOption, setSelectedOption] = useState<IOption | null>(
		initialOption ? initialOption : null,
	);

	const handleChangeOption = (selected: SingleValue<IOption>) => {
		setSelectedOption(selected);

		if (selected?.value) {
			handleChangePageCount(selected?.value);
		}
	};

	return (
		<Select
			className="select select--mini"
			classNamePrefix="custom-select"
			options={OPTIONS}
			value={selectedOption}
			onChange={handleChangeOption}
			menuPlacement={'top'}
			isSearchable={false}
		/>
	);
};
