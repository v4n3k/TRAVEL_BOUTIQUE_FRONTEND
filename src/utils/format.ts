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

export const truncateText = (text: string, maxLength: number = 150) => {
	if (text.length <= maxLength) return text;

	const truncated = text.slice(0, maxLength);
	const lastSpaceIndex = truncated.lastIndexOf(' ');
	const safeLength = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength;

	return text.slice(0, safeLength) + '...';
};
