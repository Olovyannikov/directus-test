import Image from 'next/image';

import { ASSETS_URL } from '@/shared/constants';

import { Maybe, Posts } from '@/services/generated';

type PostCardProps = Pick<Posts, 'title' | 'body'> & {
    featured_image?: Maybe<{ id: string }>;
};

export const PostCard = ({ featured_image, title, body }: PostCardProps) => (
    <div className=' rounded overflow-hidden shadow-lg my-2'>
        <Image
            className='w-full h-[467px] object-cover'
            width='672'
            height='467'
            src={`${ASSETS_URL}/${featured_image?.id}`}
            alt={`${title}`}
        />
        <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{title}</div>
            <p className='text-grey-darker text-base'>{body}</p>
        </div>
    </div>
);
