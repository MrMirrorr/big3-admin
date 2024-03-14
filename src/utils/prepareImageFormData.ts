export const prepareImageFormData = (fileImage: File | null) => {
	let formDataObject = new FormData();

	if (fileImage) {
		formDataObject.append('file', fileImage);
		console.log(formDataObject);
	}

	return formDataObject;
};
