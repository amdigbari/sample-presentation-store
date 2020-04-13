import { ReactElement, useState, FC, useCallback, useMemo, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';

export type customSliderProps<T> = {
    items: Array<T>;
    renderItem: FC<{ item: T }>;
};

function CustomSlider<T>({ items, renderItem: RenderItem }: customSliderProps<T>): ReactElement {
    const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
    const [pageSize, setPageSize] = useState<string>('');

    const RenderButton: FC<{ text: string }> = useCallback(
        ({ text }) => (
            <button className="w-8 h-8 rounded-full bg-tertiary text-gray-dark focus:outline-none transition-colors ease-linear duration-150 focus:bg-gray-lightest">
                {text}
            </button>
        ),
        [],
    );

    useEffect(() => {
        setPageSize(window.innerWidth < 768 ? 'sm' : 'lg');
    }, []);

    return (
        <div style={{ padding: `0 40px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={pageSize === 'sm' ? 1 : 3}
                gutter={20}
                leftChevron={<RenderButton text="<" />}
                rightChevron={<RenderButton text=">" />}
                outsideChevron
                chevronWidth={40}>
                {items.map((item, index) => (
                    <RenderItem item={item} key={index} />
                ))}
            </ItemsCarousel>
        </div>
    );
}
export default CustomSlider;
