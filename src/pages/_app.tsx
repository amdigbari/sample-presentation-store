import { AppProps } from 'next/app';
import { useCallback, FC } from 'react';

import Sidebar, { renderType } from 'components/Sidebar';
import ResponsiveHeader from 'organisms/ResponsiveHeader';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    const renderPage: renderType = useCallback(({ openSidebar }) => {
        return (
            <main className="w-full h-full flex flex-col">
                <ResponsiveHeader openSidebar={openSidebar} />
                <Component {...pageProps} />
            </main>
        );
    }, []);

    return <Sidebar RenderPage={renderPage} />;
};
export default CustomApp;
