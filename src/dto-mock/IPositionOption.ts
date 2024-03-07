export interface IPositionOption {
	value: string;
	label: string;
}

export const options: IPositionOption[] = [
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
