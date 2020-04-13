import { FC } from 'react';

type productImageProps = {
    src: string;
};

const ProductImage: FC<productImageProps> = ({ src }) => {
    return (
        <div className="w-full h-48 rounded bg-tertiary overflow-hidden flex items-center justify-center">
            <img className="max-w-full max-h-full" src={src} alt="product image" />
        </div>
    );
};
export default ProductImage;
