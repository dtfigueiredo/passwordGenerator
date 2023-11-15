export function App() {
	return (
		<div className='bg-zinc-700'>
			<div className='h-screen flex flex-col'>
				<header className='bg-zinc-300'>HEADER</header>

				<main className='flex-1 flex justify-between gap-4 w-4/5 max-w-6xl mx-auto mt-8'>
					<section className='w-full bg-zinc-400'>APP</section>
					<aside className='w-[320px] bg-zinc-400'>ASIDE</aside>
				</main>

				<footer className='mt-8 bg-zinc-300'>FOOTER</footer>
			</div>
		</div>
	);
}
