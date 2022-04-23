<script>
	import tilt from 'vanilla-tilt';
	import { onMount } from 'svelte';


	let card;

	onMount(() => {
		tilt.init(document.getElementById('card'), {
			max: 2,
			speed: 400,
			reverse: true,
		});
	});
</script>

<section id='work' class='w-full py-10'><h2
	class='font-bold font-header text-4xl md:text-5xl text-center text-gray-900 mx-auto mb-2'>Work samples</h2>
	<p class='text-center mx-auto text-gray-500 text-lg mb-14'>Some of the projects I worked on</p>
	<div class='max-w-7xl px-4 mx-auto flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 justify-between '>
		<a href='https://eduspace-gxp.vercel.app/' target='_blank' rel='external'
			 class='bg-accent bg-opacity-20 hover:bg-opacity-40 max-w-full transition duration-300 rounded-2xl p-6 lg:p-14 pb-8 mx-auto group '
			 style='perspective: 600px;'>
			<div
				bind:this={card}
				id='card'
				style='background: rgba(0, 0, 0, 0) radial-gradient(100.02% 136.97% at 0% 100%, #3D8FF6 0%, #1965c2 100%) repeat scroll 0% 0%; transform: rotateY(5deg) rotateX(0deg); perspective: 400px; transform-style: preserve-3d;'
				class='rounded-md p-5 relative '>
				<svg style='transform: translateZ(0px);' class='absolute md:-top-14 -top-7 -left-7 md:-left-14 w-1/3 md:w-1/2'
						 viewBox='0 0 192 189' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0)'>
						<path
							d='M111.726 119.031C74.4475 156.309 73.777 205.774 36.4986 168.496C-0.779842 131.217 -0.779842 70.7769 36.4986 33.4985C73.777 -3.77989 134.217 -3.77989 171.496 33.4985C208.774 70.7769 149.004 81.7526 111.726 119.031Z'
							fill='url(#paint0_linear)'></path>
					</g>
					<defs>
						<linearGradient id='paint0_linear' x1='178.132' y1='19.1938' x2='13.1102' y2='145.107'
														gradientUnits='userSpaceOnUse'>
							<stop stop-color='#3D8FF6'></stop>
							<stop offset='1' stop-color='#1965c2'></stop>
							<stop offset='1' stop-color='#1965c2'></stop>
						</linearGradient>
						<clipPath id='clip0'>
							<rect width='192' height='189' fill='white'></rect>
						</clipPath>
					</defs>
				</svg>

				<svg style='transform: translateZ(0px);'
						 class='absolute -bottom-7 -right-7 md:-bottom-14 md:-right-14 w-1/3 md:w-1/2 scale-[1.02]' viewBox='0 0 173 160'
						 fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0)'>
						<path
							d='M151.892 46.17C170.14 67.9489 177.441 138.087 126.518 151.732C75.5944 165.377 23.2516 135.157 9.60674 84.2335C-4.0381 33.3103 3.85094 19.3488 54.7742 5.70401C105.697 -7.94083 130.985 21.216 151.892 46.17Z'
							fill='url(#paint0_linear)'></path>
					</g>
					<defs>
						<linearGradient id='paint0_linear' x1='68.0351' y1='-45.5769' x2='94.5685' y2='160.293'
														gradientUnits='userSpaceOnUse'>
							<stop stop-color='#565EAE'></stop>
							<stop offset='1' stop-color='#141530'></stop>
							<stop offset='1' stop-color='#0F1264'></stop>
						</linearGradient>
						<clipPath id='clip0'></clipPath>
					</defs>
				</svg>

				<img class='relative w-80 rounded group-hover:scale-[1.05] transition duration-300 group-hover:shadow-xl'
						 src='/cdn/images/screenshot.png'
						 alt='EduSpace Main'></div>
			<div class='flex flex-col items-center pt-16'>
				<div class='text-accent text-sm'>Development</div>
				<h3 class='font-header font-bold text-gray-900 text-2xl'>EduSpace</h3></div>
		</a>
	</div>
</section>
