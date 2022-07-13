	/*	Imports
	-------------------------------------------------------------------------------*/
	import path from 'path';


	import { defineConfig, loadEnv } from 'vite';


	import vue from '@vitejs/plugin-vue';








	/*	Data Static
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Src
		---------------------------------------------------------------------------*/
		const src																	=   `${path.resolve(__dirname, 'src')}`;










	/*	Export
	-------------------------------------------------------------------------------*/
	export default defineConfig(({ command, mode }) => {





		process.env 																=	{ ...process.env, ...loadEnv(mode, process.cwd()) };





		return	{





			/*	Vue/Vite Sync
			-----------------------------------------------------------------------*/
			plugins																	:   [vue()]





		}





	});
