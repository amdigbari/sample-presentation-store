import { AppProps } from 'next/app';
import { useCallback, FC } from 'react';

import Sidebar, { renderType } from 'components/Sidebar';
import Header from 'organisms/Header';
import SidebarComponent from 'organisms/SidebarComponent';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    const renderPage: renderType = useCallback(({ openSidebar }) => {
        return (
            <main className="w-full h-full flex flex-col">
                <Header openSidebar={openSidebar} showIcon className="md:hidden flex" />
                <article className="w-full flex flex-1 overflow-hidden pt-3 md:pt-0 pb-6 md:pb-0">
                    <section className="h-full w-64 hidden md:block">
                        <SidebarComponent />
                    </section>

                    <section className="flex-1 flex flex-col overflow-hidden md:px-4">
                        <Header openSidebar={openSidebar} className="md:flex hidden" />

                        <div className="flex-1 overflow-y-scroll flex justify-center md:pt-3 md:pb-6">
                            <Component {...pageProps} />
                        </div>
                    </section>

                    <section className="h-full w-64 hidden md:block" style={{ visibility: 'hidden' }} />
                </article>
            </main>
        );
    }, []);

    return <Sidebar RenderPage={renderPage} />;
};
export default CustomApp;
