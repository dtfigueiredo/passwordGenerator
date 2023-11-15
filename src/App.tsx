import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export function App() {
	return (
		<div className='bg-amethyst-700'>
			<div className='h-screen flex flex-col'>
				<header className='bg-amethyst-950 font-poppins text-2xl text-center text-amethyst-50 py-5 shadow shadow-amethyst-500'>
					Online Password Generator
				</header>

				<main className='flex-1 flex justify-between gap-4 w-4/5 max-w-6xl mx-auto mt-16'>
					<section className='w-full bg-amethyst-300 font-noto p-6 rounded-xl shadow-sm shadow-tidal-200'>
						<h1 className='font-poppins text-xl font-bold text-center pt-6'>GENERATOR</h1>
					</section>

					<aside className='w-[480px] bg-amethyst-300 font-noto p-6 rounded-xl shadow-sm shadow-tidal-200'>
						<h1 className='font-poppins text-xl font-bold text-center pt-6'>SAVED PASSWORDS</h1>
					</aside>
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
