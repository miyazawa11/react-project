import type { AppProps } from "next/app";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '../globals.css'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
        <Component {...pageProps} />
    </MantineProvider>
    );
}