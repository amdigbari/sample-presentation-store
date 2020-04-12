import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="application-name" content="Feli" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Feli" />
                    <meta name="description" content="eggplant" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#890066" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    />

                    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon-85x128.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/icon-64x96.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/images/icons/icon-48x72.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/images/icons/icon-48x72.png" />
                    <link rel="stylesheet" href="/styles/tailwind/tailwind.css" />
                </Head>

                <body dir="rtl">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
