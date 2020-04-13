import { NextPage } from 'next';
import { useCallback } from 'react';

import Banner from 'atoms/Banner';
import CustomSlider, { customSliderProps } from 'organisms/CustomSlider';

type itemType = { name: string };

const items: Array<itemType> = [
    { name: 'First Item' },
    { name: 'Second Item' },
    { name: 'Third Item' },
    { name: 'Fourth Item' },
    { name: 'Fifth Item' },
    { name: 'Sixth Item' },
    { name: 'Seventh Item' },
    { name: 'Eighth Item' },
    { name: 'Ninth Item' },
    { name: 'Tenth Item' },
];

const Home: NextPage<{}> = () => {
    const RenderItem: customSliderProps<itemType>['renderItem'] = useCallback(({ item }) => {
        return <div className="bg-gray-light h-20 flex align-center justify-center">{item.name}</div>;
    }, []);

    return (
        <div className="flex flex-col container items-center p-3">
            <div className="w-5/6 mt-8">
                <Banner src="/images/homepage/design_banner.jpg" href="/design/" />
            </div>

            <div className="w-full w-5/6 mt-12" dir="ltr">
                <h5 className="text-short text-right mb-3" dir="rtl">
                    تخفیف‌دارها:
                </h5>

                <CustomSlider<itemType> items={items} renderItem={RenderItem} />
            </div>
            <div className="w-full w-5/6 mt-12" dir="ltr">
                <h5 className="text-short text-right mb-3" dir="rtl">
                    جدیدها:
                </h5>

                <CustomSlider<itemType> items={items} renderItem={RenderItem} />
            </div>
        </div>
    );
};
export default Home;
