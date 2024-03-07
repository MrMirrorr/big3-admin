import Select, { MultiValue } from 'react-select';
import { IPositionOption } from '../../dto/IPositionOption';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface Props {
	options: IPositionOption[];
	value: [] | IPositionOption[];
	onChange: (newValue: MultiValue<'' | IPositionOption>) => void;
}

export const MultiSelect = ({ options, value, onChange }: Props) => {
	return (
		<Select
			className="single-select"
			classNamePrefix="custom-select"
			components={animatedComponents}
			options={options}
			value={value}
			onChange={onChange}
			isMulti={true}
		/>
	);
};
