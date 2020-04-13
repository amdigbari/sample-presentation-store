import { FC } from 'react';

import { openSidebarType } from 'components/Sidebar';
import SidebarIcon from 'atoms/SidebarIcon';
import Username from 'atoms/Username';
import NavLink from 'atoms/NavLink';

type headerProps = {
    openSidebar: openSidebarType;
    showIcon?: boolean;
    className?: string;
};

const Header: FC<headerProps> = ({ openSidebar, showIcon = false, className = '' }) => {
    return (
        <header className={`px-3 py-2 items-center justify-between bg-tertiary shadow z-10 ${className}`}>
            {showIcon && <SidebarIcon onClick={openSidebar} />}

            <Username username="Agha Feli" />

            <NavLink href="/purchase-card" title="خرید" />
        </header>
    );
};
export default Header;
