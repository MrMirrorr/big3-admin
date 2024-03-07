import Select, { SingleValue } from 'react-select';
import { IPositionOption } from '../../../dto-mock/IPositionOption';
import { ReactComponent as Close } from '../../../assets/icons/close_24px.svg';

interface Props {
	options: IPositionOption[];
	value: '' | IPositionOption;
	onChange: (newValue: SingleValue<'' | IPositionOption>) => void;
	reset: () => void;
}

// const [currentPosition, setCurrentPosition] = useState('');

// const getValue = (): IPositionOption | '' => {
// 	return currentPosition
// 		? options.find((p) => p.value === currentPosition) || ''
// 		: '';
// };

// const onChangeSingle = (newValue: SingleValue<'' | IPositionOption>) => {
// 	if (newValue) {
// 		setCurrentPosition(newValue.value);
// 	}
// };

// const resetSingle = () => {
// 	setCurrentPosition('');
// };

export const SingleSelect = ({ options, value, onChange, reset }: Props) => {
	return (
		<div className="single-select-wrapper">
			<Select
				className="single-select"
				classNamePrefix="custom-select"
				options={options}
				value={value}
				onChange={onChange}
				isSearchable={false}
			/>
			<button className="reset-btn" onClick={reset}>
				<Close />
			</button>
		</div>
	);
};
