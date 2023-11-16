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
		<main
			className='w-4/5 max-w-4xl flex flex-col justify-center items-center py-20 px-4 mt-14 mx-auto
			bg-layout-black rounded-2xl shadow-sm shadow-layout-mediumgray relative
				before:absolute before:h-4/5 before:w-2 before:left-[-4px] before:bg-layout-orange'>
			<p className='text-white text-xl'>Your password is</p>

			{/* password display */}
			<div className='w-11/12 md:w-4/5 max-w-xl gap-4 py-4 px-3 md:px-6 mt-4 bg-zinc-950 text-white shadow-sm shadow-layout-mediumgray rounded-2xl relative'>
				<p className='w-11/12 break-words text-[10px] sm:text-sm md:text-base'>
					{password}
				</p>
				<button
					className='absolute bottom-4 right-3 md:right-6 transition-all hover:text-layout-orange'
					onClick={handleCopyToClipboard}>
					<CopySimple className='text-base sm:text-xl md:text-2xl' />
				</button>
			</div>
			{copiedToClipboard && <Feedback />}

			{/* options checkbox */}
			<section className='flex flex-col md:flex-row justify-center items-start mt-4 gap-6'>
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
			</section>

			{/* input length */}
			<section className='flex flex-col mt-4 text-center text-white'>
				<div className='flex items-center gap-4'>
					<span>Password Length:</span>
					<div className='flex gap-4 text-white text-xl font-bold'>
						<button
							className='hover:text-layout-orange disabled:hidden'
							disabled={inputLength === 16}
							onClick={handleDecreaseInputLength}>
							-
						</button>

						<p>{inputLength}</p>

						<button
							className='hover:text-layout-orange disabled:hidden'
							disabled={inputLength === 32}
							onClick={handleIncreaseInputLength}>
							+
						</button>
					</div>
				</div>
				<span className='text-sm text-layout-lightgray'>Min: 16 - Max: 32</span>
			</section>
			{/*  */}

			<button
				onClick={handleGeneratePassword}
				className='min-w-[200px] gap-4 py-5 px-6 mt-16 bg-layout-orange text-layout-darkgray rounded-2xl transition-all hover:bg-amber-600'>
				Regenerate Password
			</button>

			<footer className='flex gap-2 absolute bottom-2 text-white'>
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
			</footer>
		</main>
	);
}
