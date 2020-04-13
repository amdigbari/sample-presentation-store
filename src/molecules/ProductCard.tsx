import { FC } from 'react';
import { productType } from 'pages/products/[id]';
import ProductImage from 'atoms/ProductImage';
import Link from 'next/link';

type productCardProps = { product: productType };

const ProductCard: FC<productCardProps> = ({ product }) => {
    return (
        <Link href="/products/[id]" as={`/products/${product.id}`}>
            <a className="rounded w-full">
                <ProductImage src={product.image} />

                <div className="flex items-center justify-between p-3 bg-tertiary">
                    <p className="text-long">{product.name}</p>

                    <p className="text-long">{product.price}</p>
                </div>
            </a>
        </Link>
    );
};
export default ProductCard;
