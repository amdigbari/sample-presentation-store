import { FC, useCallback } from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

import StoreAvatar from 'atoms/StoreAvatar';

type storeBannerProps = {
    name: string;
    src: string;
    href?: string | UrlObject;
    as?: string;
};

const StoreBanner: FC<storeBannerProps> = ({ name, src, href, as }) => {
    const RenderBanner: FC<{}> = useCallback(() => {
        return (
            <>
                <StoreAvatar src={src} />

                <p className={`text-primary mt-3 transition_color ease-linear duration-150 ${href ? 'hover:text-secondary' : ''}`}>
                    {name}
                </p>
            </>
        );
    }, [href]);

    return href ? (
        <Link href={href} {...(as ? { as } : {})}>
            <a className="w-full flex flex-col items-center p-4">
                <RenderBanner />
            </a>
        </Link>
    ) : (
        <div className="w-full flex flex-col items-center p-4">
            <RenderBanner />
        </div>
    );
};
export default StoreBanner;
