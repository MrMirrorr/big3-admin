export const convertISOToDateString = (isoDateString: string) => {
	const dateObject = new Date(isoDateString);
	const year = dateObject.getFullYear();
	const month = String(dateObject.getMonth() + 1).padStart(2, '0');
	const day = String(dateObject.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};
