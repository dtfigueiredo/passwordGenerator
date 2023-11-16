import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Generator } from './components/Generator';

export function App() {
	return (
		<div className='bg-amethyst-700'>
			<div className='h-screen flex flex-col'>
				<header className='bg-amethyst-950 font-poppins text-2xl text-center text-amethyst-50 py-5 shadow shadow-amethyst-500'>
					Online Password Generator
				</header>

				<main className='flex-1 flex justify-between gap-4 w-4/5 max-w-6xl mx-auto mt-16'>
					<Generator />
				</main>

				<footer className='bg-amethyst-950 font-poppins text-center text-amethyst-50 py-2 mt-16'>
					<p className='flex justify-center items-center gap-2'>
						desenvolvido por <strong>Daniel Figueiredo</strong>
						<a
							href='https://github.com/dtfigueiredo'
							target='_blank'
							rel='noopener noreferrer'
							className='transition-all hover:text-amethyst-600'>
							<GithubLogo size={24} />
						</a>
						<a
							href='https://www.linkedin.com/in/dtfigueiredo/'
							target='_blank'
							rel='noopener noreferrer'
							className='transition-all hover:text-amethyst-600'>
							<LinkedinLogo size={24} />
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
