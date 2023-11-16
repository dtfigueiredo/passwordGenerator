import { CopySimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { passwordGenerator } from '../assets/pwdGenerator';
import { CheckInput } from './CheckInput';
import { Feedback } from './Feedback';

export function Generator() {
	const [password, setPassword] = useState<string>('');
	const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
	const [inputLength, setInputLength] = useState<number>(24);

	const isLowercaseChecked = true;
	const [isUppercaseChecked, setIsUppercaseChecked] = useState<boolean>(true);
	const [isSymbolsChecked, setIsSymbolsChecked] = useState<boolean>(false);
	const [isNumbersChecked, setIsNumbersChecked] = useState<boolean>(false);

	function handleCopyToClipboard() {
		setCopiedToClipboard(true);
		navigator.clipboard.writeText(password);
		setTimeout(() => {
			setCopiedToClipboard(false);
		}, 2000);
	}

	function handleGeneratePassword() {
		const pwd = passwordGenerator(
			inputLength,
			isUppercaseChecked,
			isLowercaseChecked,
			isSymbolsChecked,
			isNumbersChecked
		);
		setPassword(pwd);
	}

	function updateCheckedState(id: string, newCheckedState: boolean) {
		switch (id) {
			case 'Uppercase':
				setIsUppercaseChecked(newCheckedState);
				break;
			case 'Symbols':
				setIsSymbolsChecked(newCheckedState);
				break;
			case 'Numbers':
				setIsNumbersChecked(newCheckedState);
				break;

			default:
				break;
		}
	}

	useEffect(() => {
		handleGeneratePassword();
	}, [
		inputLength,
		isUppercaseChecked,
		isLowercaseChecked,
		isSymbolsChecked,
		isNumbersChecked,
	]);

	return (
		<section className='w-full max-w-4xl bg-amethyst-300 font-noto p-6 mx-auto rounded-xl shadow shadow-bunker-600'>
			<h1 className='font-poppins text-xl font-bold text-center pt-6'>
				GENERATOR
			</h1>

			<div
				className='w-4/5 max-w-4xl flex flex-col justify-center items-center gap-8 p-12 mt-8 mx-auto bg-tidal-300 rounded-xl
				shadow shadow-bunker-600'>
				<div className='w-full gap-4 py-4 px-6 bg-amethyst-50 border border-amethyst-400 rounded-xl relative'>
					<p className='w-11/12 break-words text-sm'>{password}</p>
					<button
						className='absolute bottom-4 right-6 transition-all hover:text-amethyst-600'
						onClick={handleCopyToClipboard}>
						<CopySimple size={24} />
					</button>
				</div>
				{copiedToClipboard && <Feedback />}

				<div className='w-4/5 flex flex-col justify-start items-center gap-8'>
					<div className='flex flex-col justify-center items-start gap-6'>
						<CheckInput
							id='Uppercase'
							label='Uppercase'
							updateCheckedState={updateCheckedState}
						/>

						<CheckInput
							id='Symbols'
							label='Symbols'
							updateCheckedState={updateCheckedState}
						/>

						<CheckInput
							id='Numbers'
							label='Numbers'
							updateCheckedState={updateCheckedState}
						/>
					</div>

					{/* range input */}
					<div className='flex flex-col gap-4 text-center'>
						<label htmlFor='pwdLength'>
							Password Length:
							<strong className='text-xl'> {inputLength}</strong>
						</label>
						<input
							type='range'
							min={16}
							max={32}
							defaultValue={inputLength}
							onChange={(e) => setInputLength(+e.target.value)}
							className='h-2 bg-bunker-100 border border-amethyst-950 appearance-none cursor-pointer rounded-xl'
						/>
					</div>
					{/*  */}

					<button
						onClick={handleGeneratePassword}
						className='w-full flex justify-center items-center gap-4 py-4 px-6 bg-amethyst-950 text-amethyst-50 hover:font-bold
						rounded-xl transition-all hover:bg-amethyst-900'>
						Generate Password
					</button>
				</div>
			</div>
		</section>
	);
}
