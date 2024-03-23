export const convertDateStringToISO = (dateString: string) => {
	const dateObject = new Date(`${dateString}T00:00:00`);
	return dateObject.toISOString();
};
