import { NextPage } from 'next';
import ProductImage from 'atoms/ProductImage';

export type productType = {
    id: number;
    name: string;
    image: string;
    store: string;
    price: number;
    sizes?: Array<number>;
    features?: Array<string>;
};

type productScreenType = {
    product: productType;
};

const ProductScreen: NextPage<productScreenType> = ({ product }) => {
    return (
        <div className="container flex flex-col items-center">
            <p className="text-short mb-6">نام‌محصول: {product.name}</p>

            <div className="w-48">
                <ProductImage src={product.image} />
            </div>

            <p className="text-short mt-6">برند: {product.store}</p>

            <p className="text-short mt-6">قیمت: {product.price}</p>

            {product.sizes && <p className="text-short mt-6">سایزهای: {product.sizes.join(', ')}</p>}

            {product.features && (
                <div className="w-48">
                    <p className="text-short mt-6">ویژگی‌ها:</p>
                    <ul className="mr-3">
                        {product.features.map((feature, index) => (
                            <li className="text-long" key={index}>
                                {index}. {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button className="bg-primary outline-none px-10 py-4 text-tertiary mt-6">افزودن به سبد خرید</button>
        </div>
    );
};
ProductScreen.getInitialProps = async (context) => {
    const sampleProduct: productType = {
        id: Number(context.query.id),
        name: 'سپهر',
        image: '/images/icons/icon-96x144.png',
        store: 'تولیدی سپهر',
        price: 120000,
        sizes: [34, 36, 38],
        features: ['مفت نمیارزه', 'خری اگه بخریش'],
    };
    return { product: sampleProduct };
};

export default ProductScreen;
