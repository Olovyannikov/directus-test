import {Maybe} from "@/services/generated";
import {ASSETS_URL} from "@/shared/constants";

interface PostCardProps {
    image?: Maybe<string>;
    title?: Maybe<string>;
    body?: Maybe<string>;
}

export const PostCard = ({image, title, body}: PostCardProps) => {
    return (
        <div className=" rounded overflow-hidden shadow-lg my-2">
            <img className="w-full" src={`${ASSETS_URL}/${image}`}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-grey-darker text-base">{body}</p>
            </div>
        </div>
    )
}