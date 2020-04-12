import { FC } from 'react';

type storeAvatarProps = {
    src: string;
} & JSX.IntrinsicElements['img'];

const StoreAvatar: FC<storeAvatarProps> = ({ src, className, ...restProps }) => {
    return <img src={src} alt="avatar" className="rounded-full w-24 h-24 object-contain border border-primary-light" {...restProps} />;
};
export default StoreAvatar;
