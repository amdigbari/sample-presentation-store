import { NextPage } from 'next';

import NavLink from 'atoms/NavLink';
import Banner from 'atoms/Banner';

const Home: NextPage<{}> = () => {
    return (
        <div className="flex flex-col container items-center p-3">
            <div className="w-full flex justify-end">
                <NavLink href="/purchase/" title="خرید" />
            </div>

            <div className="w-5/6 mt-8">
                <Banner src="/images/homepage/design_banner.jpg" href="/design/" />
            </div>
        </div>
    );
};
export default Home;
