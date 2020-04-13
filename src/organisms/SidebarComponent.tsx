import { FC } from 'react';

import StoreBanner from 'molecules/StoreBanner';
import NavLink, { navLinkProps } from 'atoms/NavLink';

type sidebarComponentProps = {};

const sidebarLinks: Array<navLinkProps> = [
    {
        title: 'لباس',
        href: '/categories/dress/',
    },
    {
        title: 'شلوار',
        href: '/categories/pant/',
    },
    {
        title: 'طراحی',
        href: '/design/',
    },
];

const SidebarComponent: FC<sidebarComponentProps> = () => {
    return (
        <div className="bg-tertiary h-full w-64 flex flex-col items-center">
            <StoreBanner src="/images/icons/icon-96x144.png" name="تلویزیونی سپهر" href="/stores/1/" />

            <div className="w-full h-0 mt-4"></div>

            {sidebarLinks.map(({ title, href }, index) => (
                <NavLink title={title} href={href} withBorder key={`${title}-${index}`} />
            ))}
        </div>
    );
};
export default SidebarComponent;
