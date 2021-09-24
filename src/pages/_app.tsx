import React from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/dist/shared/lib/router/router';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<React.Fragment>
			<Head>
				<title>Ethergram</title>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
