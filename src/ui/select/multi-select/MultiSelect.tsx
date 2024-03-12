import Select, { MultiValue } from 'react-select';
import { IPositionOption } from '../../../dto-mock/IPositionOption';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface Props {
	options: IPositionOption[] | undefined;
	value: [] | IPositionOption[];
	onChange: (newValue: MultiValue<'' | IPositionOption>) => void;
}

// const [currentPositions, setCurrentPositions] = useState(['']);

// const getValues = () => {
// 	return currentPositions
// 		? options.filter((o) => currentPositions.indexOf(o.value) >= 0)
// 		: [];
// };

// const onChangeMulti = (newValue: MultiValue<'' | IPositionOption>) => {
// 	setCurrentPositions(newValue.map((v: any) => v.value));
// };

export const MultiSelect = ({ options, value, onChange }: Props) => {
	return (
		<Select
			className="select select--multi"
			classNamePrefix="custom-select"
			components={animatedComponents}
			options={options}
			value={value}
			onChange={onChange}
			isMulti={true}
		/>
	);
};
