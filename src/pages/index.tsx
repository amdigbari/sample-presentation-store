import { NextPage } from 'next';
import { useCallback } from 'react';

import Banner from 'atoms/Banner';
import CustomSlider, { customSliderProps } from 'organisms/CustomSlider';
import { productType } from './products/[id]';
import ProductCard from 'molecules/ProductCard';

type itemType = productType;

const sampleProduct: productType = {
    id: 1,
    name: 'سپهر',
    image: '/images/icons/icon-96x144.png',
    store: 'تولیدی سپهر',
    price: 120000,
    sizes: [34, 36, 38],
    features: ['مفت نمیارزه', 'خری اگه بخریش'],
};
const products = [
    sampleProduct,
    { ...sampleProduct, id: 2 },
    { ...sampleProduct, id: 3 },
    { ...sampleProduct, id: 4 },
    { ...sampleProduct, id: 5 },
    { ...sampleProduct, id: 6 },
    { ...sampleProduct, id: 7 },
    { ...sampleProduct, id: 8 },
    { ...sampleProduct, id: 9 },
    { ...sampleProduct, id: 10 },
];

const Home: NextPage<{}> = () => {
    const RenderItem: customSliderProps<itemType>['renderItem'] = useCallback(({ item }) => {
        return <ProductCard product={item} />;
    }, []);

    return (
        <div className="flex flex-col container items-center p-3">
            <div className="w-5/6 mt-8">
                <Banner src="/images/homepage/design_banner.jpg" href="/design" />
            </div>

            <div className="w-full w-5/6 mt-12" dir="ltr">
                <h5 className="text-short text-right mb-3" dir="rtl">
                    تخفیف‌دارها:
                </h5>

                <CustomSlider<itemType> items={products} renderItem={RenderItem} />
            </div>
            <div className="w-full w-5/6 mt-12" dir="ltr">
                <h5 className="text-short text-right mb-3" dir="rtl">
                    جدیدها:
                </h5>

                <CustomSlider<itemType> items={products} renderItem={RenderItem} />
            </div>
        </div>
    );
};
export default Home;
