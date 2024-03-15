export const teamFormValidation = {
	name: {
		required: 'Required',
		pattern: {
			value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
			message:
				'Must start with letters, consist of letters and spaces, and end with a letter.',
		},
	},
	division: {
		required: 'Required',
		pattern: {
			value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
			message:
				'Must start with letters, consist of letters and spaces, and end with a letter.',
		},
	},
	conference: {
		required: 'Required',
		pattern: {
			value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
			message:
				'Must start with letters, consist of letters and spaces, and end with a letter.',
		},
	},
	year: {
		required: 'Required',
		pattern: {
			value: /^\d{4}$/,
			message: 'Invalid year. Must consist of 4 digits',
		},
	},
};
