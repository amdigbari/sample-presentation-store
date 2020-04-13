import { NextPage } from 'next';
import { productType } from './products/[id]';
import ProductCard from 'molecules/ProductCard';
import { useMemo } from 'react';

type screenType = {
    products: Array<productType>;
};

const PurchaseCardScreen: NextPage<screenType> = ({ products }) => {
    const totalPrice = useMemo(() => products.reduce((a, b) => a + b.price, 0), [products]);

    return (
        <div className="container flex flex-col items-center">
            {products.map((product, index) => (
                <>
                    <div className="w-48">
                        <ProductCard key={index} product={product} />
                    </div>

                    <div className="w-0 h-0 mt-6" />
                </>
            ))}

            <div className="w-48 h-0 border-b border-gray mb-6" />

            <p className="text-long w-48">مبلغ قابل پرداخت: {totalPrice}</p>

            <button className="bg-primary outline-none px-10 py-4 text-tertiary mt-6">پرداخت</button>
        </div>
    );
};
PurchaseCardScreen.getInitialProps = async () => {
    const sampleProduct: productType = {
        id: 1,
        name: 'سپهر',
        image: '/images/icons/icon-96x144.png',
        store: 'تولیدی سپهر',
        price: 120000,
        sizes: [34, 36, 38],
        features: ['مفت نمیارزه', 'خری اگه بخریش'],
    };
    return { products: [sampleProduct, { ...sampleProduct, id: 2 }, { ...sampleProduct, id: 2 }] };
};

export default PurchaseCardScreen;
