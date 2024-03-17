import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { IOption, OPTIONS } from './selectOptions';

interface Props {
	handleChangePageCount: (selectedValue: number) => void;
}

export const SelectPageSize = ({ handleChangePageCount }: Props) => {
	const [selectedOption, setSelectedOption] = useState<IOption | null>(OPTIONS[0]);

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
