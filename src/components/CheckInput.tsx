type InputProps = {
	label: string;
};

export function CheckInput({ label }: InputProps) {
	return (
		<div className='flex gap-2'>
			<input
				id={label}
				name={label}
				type='checkbox'
				className='accent-amethyst-800'
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
}
