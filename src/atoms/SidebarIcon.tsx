import { FC, DOMAttributes } from 'react';
import { AlignJustify } from 'react-feather';

export type sidebarIconProps = {
    onClick?: DOMAttributes<SVGElement>['onClick'];
};

const SidebarIcon: FC<sidebarIconProps> = ({ onClick = () => {} }) => {
    return <AlignJustify size={24} className="text-gray" onClick={onClick} />;
};
export default SidebarIcon;
