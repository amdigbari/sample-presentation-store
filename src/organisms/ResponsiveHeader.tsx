import { FC } from 'react';
import { AlignJustify } from 'react-feather';

import { openSidebarType } from 'components/Sidebar';
import SidebarIcon from 'atoms/SidebarIcon';
import Username from 'atoms/Username';

type responsiveHeaderProps = {
    openSidebar: openSidebarType;
};

const ResponsiveHeader: FC<responsiveHeaderProps> = ({ openSidebar }) => {
    return (
        <header className="px-3 py-2 flex items-center justify-between bg-tertiary md:hidden shadow">
            <SidebarIcon onClick={openSidebar} />

            <Username username="Agha Feli" />
        </header>
    );
};
export default ResponsiveHeader;
