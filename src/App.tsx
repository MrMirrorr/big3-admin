import { useState } from 'react';
import { Input } from './ui/input/Input';
import { Button } from './ui/button/Button';
import { SearchInput } from './ui/search-input/SearchInput';
import { Logo } from './ui/logo/Logo';
import { Notification } from './ui/notification/Notification';
import { SingleSelect } from './ui/single-select/SingleSelect';
import { IPositionOption } from './dto/IPositionOption';
import { MultiValue, SingleValue } from 'react-select';
import { MultiSelect } from './ui/multi-select/MultiSelect';

const options: IPositionOption[] = [
	{
		value: 'center-forward',
		label: 'Center Forward',
	},
	{
		value: 'guard-forward',
		label: 'Guard Forward',
	},
	{
		value: 'forward',
		label: 'Forward',
	},
	{
		value: 'center',
		label: 'Center',
	},
	{
		value: 'guard',
		label: 'Guard',
	},
];

export const App = () => {
	const [value, setValue] = useState('');
	const [currentPosition, setCurrentPosition] = useState('');
	const [currentPositions, setCurrentPositions] = useState(['']);

	const getValue = (): IPositionOption | '' => {
		return currentPosition
			? options.find((p) => p.value === currentPosition) || ''
			: '';
	};

	const onChangeSingle = (newValue: SingleValue<'' | IPositionOption>) => {
		if (newValue) {
			setCurrentPosition(newValue.value);
		}
	};

	const resetSingle = () => {
		setCurrentPosition('');
	};

	const getValues = () => {
		return currentPositions
			? options.filter((o) => currentPositions.indexOf(o.value) >= 0)
			: [];
	};

	const onChangeMulti = (newValue: MultiValue<'' | IPositionOption>) => {
		setCurrentPositions(newValue.map((v: any) => v.value));
	};

	return (
		<div>
			<h1>App</h1>
			<Input
				onChange={(e) => setValue(e.target.value)}
				type="password"
				value={value}
				label="Login"
				id="login"
				error={true}
				errorMessage="Required"
			/>
			<Button>Sign In</Button>
			<br />
			<Button variant="secondary" disabled>
				Cancel
			</Button>
			<br />
			<Button>Add +</Button>
			<br />
			<SearchInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search..."
			/>
			<br />
			<Logo />
			<br />
			<Notification>
				User with the specified username / password was not found.
			</Notification>
			<br />
			<br />
			<SingleSelect
				options={options}
				value={getValue()}
				onChange={onChangeSingle}
				reset={resetSingle}
			/>
			<br />
			<MultiSelect options={options} value={getValues()} onChange={onChangeMulti} />
		</div>
	);
};
