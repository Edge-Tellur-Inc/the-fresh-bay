import Head from 'next/head';
import { HomePage } from '../features';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home | The Fresh Bay</title>
				<meta
					name='description'
					content='A marketplace application for selling groceries. We key in on local markets and allow customers to buy groceries from the comfort of their own homes.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HomePage />
		</div>
	);
}
