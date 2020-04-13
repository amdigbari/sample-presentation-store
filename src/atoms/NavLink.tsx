import { FC } from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

export type navLinkProps = {
    href: string | UrlObject;
    title: string;
};

const NavLink: FC<navLinkProps> = ({ title, href }) => {
    return (
        <Link href={href}>
            <a className="w-full border-b border-t border-gray px-4 py-2 transition-colors ease-linear duration-150 text-short hover:text-secondary">
                {title}
            </a>
        </Link>
    );
};
export default NavLink;
