import Select, { SingleValue } from 'react-select';
import { IPositionOption } from '../../dto/IPositionOption';
import { ReactComponent as Close } from '../../assets/icons/close_24px.svg';

interface Props {
	options: IPositionOption[];
	value: '' | IPositionOption;
	onChange: (newValue: SingleValue<'' | IPositionOption>) => void;
	reset: () => void;
}

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
