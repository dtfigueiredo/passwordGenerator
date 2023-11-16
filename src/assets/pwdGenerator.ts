const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
const symbols = '!@#$&*?|%+-_./:;=()[]{}'.split('');
const numbers = '0123456789'.split('');

export const passwordGenerator = (
	length: number,
	hasUppercase: boolean,
	hasLowercase: boolean,
	hasSymbol: boolean,
	hasNumber: boolean
) => {
	let pwdChars = [] as string[];
	hasUppercase && (pwdChars = [...pwdChars, ...uppercaseChars]);
	hasLowercase && (pwdChars = [...pwdChars, ...lowercaseChars]);
	hasSymbol && (pwdChars = [...pwdChars, ...symbols]);
	hasNumber && (pwdChars = [...pwdChars, ...numbers]);

	const finalPassword = Array.from(
		crypto.getRandomValues(new Uint32Array(length))
	)
		.map((x) => pwdChars[x % pwdChars.length])
		.join('');

	return finalPassword;
};
