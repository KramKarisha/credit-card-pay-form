const clearNumber = (value = '') => {
	return value.replace(/\D+/g, '');
};

export const formatCreditCardNumber = (value: string) => {
	if (!value) {
		return value;
	}
	const clearValue = clearNumber(value);
	const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
		4,
		8
	)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
	return nextValue.trim();
};

export const formatCVC = (value: string) => {
	const clearValue = clearNumber(value);
	const maxLength = 3;
	return clearValue.slice(0, maxLength);
};

export const formatExpirationDate = (value: string) => {
	const clearValue = clearNumber(value);

	if (clearValue.length >= 3) {
		return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 6)}`;
	}

	return clearValue;
};
