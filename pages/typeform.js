import Script from 'next/script';
import { useEffect } from 'react';

export default function Typeform() {
	// useEffect(() => {
	// 	window.location.reload();
	// }, []);
	return (
		<>
			<div
				data-tf-widget='yqmp7o0D'
				data-tf-opacity='100'
				data-tf-chat
				data-tf-iframe-props='title=The Fresh Bay Waitlist Form'
				data-tf-transitive-search-params
				data-tf-medium='snippet'
				style={{ width: '100%', height: '100vh' }}
			></div>
			<Script src='//embed.typeform.com/next/embed.js'></Script>
		</>
	);
}
