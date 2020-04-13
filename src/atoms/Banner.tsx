import { FC } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';

type bannerProps = {
    src: string;
    href: string | UrlObject;
};

const Banner: FC<bannerProps> = ({ src, href }) => {
    return (
        <Link href={href}>
            <a className="w-full h-auto bg-gray-lighter rounded overflow-hidden">
                <img className="object-contain" src={src} alt={`banner for ${href}`} />
            </a>
        </Link>
    );
};
export default Banner;
