import { FC } from 'react';

import { openSidebarType } from 'components/Sidebar';
import SidebarIcon from 'atoms/SidebarIcon';
import Username from 'atoms/Username';
import NavLink from 'atoms/NavLink';

type responsiveHeaderProps = {
    openSidebar: openSidebarType;
};

const ResponsiveHeader: FC<responsiveHeaderProps> = ({ openSidebar }) => {
    return (
        <header className="px-3 py-2 flex items-center justify-between bg-tertiary md:hidden shadow">
            <SidebarIcon onClick={openSidebar} />

            <Username username="Agha Feli" />

            <NavLink href="/purchase/" title="خرید" />
        </header>
    );
};
export default ResponsiveHeader;
