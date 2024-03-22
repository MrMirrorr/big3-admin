export const teamFormValidation = {
	name: {
		required: 'Required',
		pattern: {
			value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
			message:
				'Must start with letters, consist of letters and spaces, and end with a letter.',
		},
	},
	position: {
		required: 'Required',
	},
	team: {
		required: 'Required',
	},
	height: {
		required: 'Required',
		pattern: {
			value: /^\d{3}$/,
			message: 'Invalid height. Must consist of 3 digits',
		},
	},
	weight: {
		required: 'Required',
		pattern: {
			value: /^\d{2,3}$/,
			message: 'Invalid weight. Must consist of 2 or 3 digits',
		},
	},
	birthday: {
		required: 'Required',
	},
	number: {
		required: 'Required',
		pattern: {
			value: /^\d{1,2}$/,
			message: 'Invalid number. Must consist of 1 or 2 digits',
		},
	},
};
