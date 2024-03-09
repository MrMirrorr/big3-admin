export const authValidationScheme = {
	name: {
		required: 'Required',
		maxLength: {
			value: 32,
			message: 'Maximum 32 characters',
		},
		minLength: {
			value: 3,
			message: 'Minimum 3 characters',
		},
		pattern: {
			value: /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})?$/,
			message: 'Invalid name',
		},
	},
	login: {
		required: 'Required',
		maxLength: {
			value: 16,
			message: 'Maximum 16 characters',
		},
		minLength: {
			value: 3,
			message: 'Minimum 3 characters',
		},
		pattern: {
			value: /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]+$/gm,
			message:
				'Login must begin with a letter, consist of letters, numbers, periods and minus, but only end with letters or numbers',
		},
	},
	password: {
		required: 'Required',
		maxLength: {
			value: 32,
			message: 'Maximum 30 characters',
		},
		minLength: {
			value: 6,
			message: 'Minimum 6 characters',
		},
		pattern: {
			value: /^[\w#%]+$/,
			message: 'Password must consist of letters, numbers and symbols # %',
		},
	},
	confirm: {
		required: 'Required',
	},
	accept: {
		required: 'Required',
	},
};
