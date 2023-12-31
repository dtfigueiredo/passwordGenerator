import { Lock } from '@phosphor-icons/react';
import { Generator } from './components/Generator';

export function App() {
	return (
		<section className='h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-layout-darkgray to-zinc-900'>
			<p className='flex items-end gap-2 text-3xl'>
				<span className='text-layout-mediumgray'>
					<Lock size={36} />
				</span>
				<span className='text-layout-orange'>Password</span>
				<span className='font-bold text-layout-lightgray'>Generator</span>
			</p>

			<Generator />
		</section>
	);
}
