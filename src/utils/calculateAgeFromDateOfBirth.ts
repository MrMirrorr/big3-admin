export const calculateAgeFromDateOfBirth = (birthdayString: string) => {
	const birthday = new Date(birthdayString);
	const currentDate = new Date();
	const differenceInMs = currentDate.getTime() - birthday.getTime();
	const age = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365.25));
	return age;
};
