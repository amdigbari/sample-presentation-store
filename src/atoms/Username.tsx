import { FC } from 'react';
import Link from 'next/link';

export type usernameProps = {
    username: string;
};

const Username: FC<usernameProps> = ({ username }) => {
    return (
        <Link href="/users/[username]" as={`/users/${username}`}>
            <a className="text-short transition-colors ease-linear duration-150 hover:text-secondary">{username}</a>
        </Link>
    );
};
export default Username;
