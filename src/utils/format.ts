export const formatNumber = (num: number) => {
	if (typeof num !== 'number') return '';

	const numString = String(num);
	const parts = [];
	let count = 0;

	for (let i = numString.length - 1; i >= 0; i--) {
		parts.unshift(numString[i]);
		count++;

		if (count % 3 === 0 && i !== 0) {
			parts.unshift(' ');
		}
	}

	return parts.join('');
};
