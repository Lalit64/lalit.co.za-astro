<script>
	import Dev from '../../public/cdn/graphics/icons/Dev.svelte';
	import GitHub from '../../public/cdn/graphics/icons/GitHub.svelte';
	import Website from '../../public/cdn/graphics/icons/Website.svelte';
</script>

<footer class='bg-white'>
	<div class='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
		<div class='mt-8 flex justify-center space-x-6'>
			<a href='https://dev.to/lalit64' target='_blank' rel='noreferrer'
				 class='text-gray-400 hover:text-gray-500 w-6 h-6 transition'><span class='sr-only'>Dev.to</span>
				<Dev />
			</a>
			<a href='https://github.com/Lalit64/' target='_blank' rel='noreferrer'
				 class='text-gray-400 hover:text-gray-500 w-6 h-6 transition'><span class='sr-only'>GitHub</span>
					<GitHub />
			</a>
			<a href='https://eduspace-gxp.vercel.app/' rel='external' target='_blank' class='text-gray-400 hover:text-gray-500 w-6 h-6 transition' >
					<span class='sr-only'>EduSpace</span>
					<Website />
			</a>
		</div>
		<p class='mt-8 text-center text-base text-gray-400'>© 2022 Lalit Yalamanchili. All rights reserved.</p></div>
</footer>
