import { useState } from 'react';

type InputProps = {
	id: string;
	label: string;
	updateCheckedState: (id: string, newCheckedState: boolean) => void;
};

export function CheckInput({ id, label, updateCheckedState }: InputProps) {
	const initialCheck = (label === 'Uppercase' || label === 'Lowercase') && true;
	const [isChecked, setIsChecked] = useState<boolean>(initialCheck);

	function handleInputCheck() {
		isChecked === true ? setIsChecked(false) : setIsChecked(true);
		updateCheckedState(id, !isChecked);
	}

	return (
		<div className='flex gap-2'>
			<input
				id={label}
				name={label}
				type='checkbox'
				checked={isChecked}
				onChange={handleInputCheck}
				className='accent-amethyst-800'
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
}
