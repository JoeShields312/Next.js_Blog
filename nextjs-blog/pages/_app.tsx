import 'styles/global.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

config.autoAddCss = false;

export function reportWebVitals(metric: any): void {
	// These metrics can be sent to any analytics service
	console.log(metric);
}

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export default App;
