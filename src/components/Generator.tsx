import { CopySimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
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

	function handleIncreaseInputLength() {
		setInputLength((prev) => (prev + 1 >= 32 ? 32 : prev + 1));
	}

	function handleDecreaseInputLength() {
		setInputLength((prev) => (prev - 1 <= 16 ? 16 : prev - 1));
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
		<section
			className='w-4/5 max-w-4xl flex flex-col justify-center items-center py-20 px-4 mt-14 mx-auto
			bg-layout-black rounded-2xl shadow-sm shadow-layout-mediumgray relative
				before:absolute before:h-4/5 before:w-2 before:left-[-4px] before:bg-layout-orange'>
			<span className='text-white text-xl'>Your password is</span>

			{/* password display */}
			<div className='w-4/5 max-w-xl gap-4 py-4 px-6 mt-4 bg-zinc-950 text-white shadow-sm shadow-layout-mediumgray rounded-2xl relative'>
				<p className='w-11/12 break-words text-sm'>{password}</p>
				<button
					className='absolute bottom-4 right-6 transition-all hover:text-layout-orange'
					onClick={handleCopyToClipboard}>
					<CopySimple size={24} />
				</button>
			</div>
			{copiedToClipboard && <Feedback />}

			<div className='flex justify-center items-start mt-4 gap-6'>
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

			{/* input length */}
			<div className='flex items-center gap-4 mt-4 text-center text-white'>
				<label htmlFor='pwdLength'>Password Length:</label>

				<div className='flex gap-4 text-white text-xl font-bold'>
					<button
						className='hover:text-layout-orange disabled:text-layout-lightgray disabled:cursor-not-allowed'
						disabled={inputLength === 16}
						onClick={handleDecreaseInputLength}>
						-
					</button>
					<p>{inputLength}</p>
					<button
						className='hover:text-layout-orange disabled:text-layout-lightgray disabled:cursor-not-allowed'
						disabled={inputLength === 32}
						onClick={handleIncreaseInputLength}>
						+
					</button>
				</div>
			</div>
			{/*  */}

			<button
				onClick={handleGeneratePassword}
				className='min-w-[200px] gap-4 py-5 px-6 mt-16 bg-layout-orange text-white rounded-2xl transition-all hover:bg-amber-600'>
				Regenerate Password
			</button>

			<div className='flex gap-2 absolute bottom-2 text-white'>
				<a
					href='https://github.com/dtfigueiredo'
					target='_blank'
					rel='noopener noreferrer'
					className='transition-all hover:text-layout-orange'>
					<GithubLogo size={24} />
				</a>
				<a
					href='https://www.linkedin.com/in/dtfigueiredo/'
					target='_blank'
					rel='noopener noreferrer'
					className='transition-all hover:text-layout-orange'>
					<LinkedinLogo size={24} />
				</a>
			</div>
		</section>
	);
}
