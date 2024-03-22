import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { OPTIONS } from './selectOptions';
import { IOption } from '../../../ui/sharedTypes';

interface Props {
	pageSize: number;
	handleChangePageCount: (selectedValue: number) => void;
}

export const SelectPageSize = ({ pageSize, handleChangePageCount }: Props) => {
	const initialOption = OPTIONS.find((option) => option.value === pageSize);
	const [selectedOption, setSelectedOption] = useState<IOption<number> | null>(
		initialOption ? initialOption : null,
	);

	const handleChangeOption = (selected: SingleValue<IOption<number>>) => {
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
