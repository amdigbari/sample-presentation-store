import { FC, useState, useCallback } from 'react';
import ReactSidebar from 'react-sidebar';

import SidebarComponent from 'organisms/SidebarComponent';

export type openSidebarType = () => void;

export type renderType = FC<{
    openSidebar: openSidebarType;
}>;

type sidebarProps = {
    RenderPage: renderType;
};

const Sidebar: FC<sidebarProps> = ({ RenderPage }) => {
    const [open, setOpen] = useState<boolean>(false);

    const openHandler: (_open: boolean) => void = useCallback((_open) => {
        setOpen(_open);
    }, []);

    const openSidebar: openSidebarType = useCallback(() => {
        setOpen(true);
    }, []);

    return (
        <ReactSidebar
            sidebarClassName="shadow"
            pullRight
            open={open}
            touchHandleWidth={10}
            onSetOpen={openHandler}
            sidebar={<SidebarComponent />}>
            <RenderPage openSidebar={openSidebar} />
        </ReactSidebar>
    );
};
export default Sidebar;
