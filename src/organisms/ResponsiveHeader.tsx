import { FC } from 'react';
import { AlignJustify } from 'react-feather';

import { openSidebarType } from 'components/Sidebar';

type responsiveHeaderProps = {
    openSidebar: openSidebarType;
};

const ResponsiveHeader: FC<responsiveHeaderProps> = ({ openSidebar }) => {
    return (
        <header className="px-3 py-2 flex items-center bg-tertiary md:hidden">
            <AlignJustify size={24} className="text-dark" onClick={openSidebar} />
        </header>
    );
};
export default ResponsiveHeader;
