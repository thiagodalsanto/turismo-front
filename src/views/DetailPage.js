import TourDetail from "../components/TourDetail";
import CommentForm from "../components/CommentForm";
import PostedComments from "../components/PostedComments";

export default function DetailPage() {
    return (
        <>
            <section className="pt-10 bg-gray-50 dark:bg-gray-900 h-max w-screen flex items-center flex-col">
                <TourDetail placeName={"Porto, Portugal"} placeImage={"https://abre.ai/hs4X"} price={"599"} description={"Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet"} reviews={"2"} />
                <CommentForm />
                <PostedComments whoComment={"Jackson Sieben"} rating={"5.0"} comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque metus in erat bibendum rutrum. Quisque in elementum quam. Curabitur faucibus mauris sit amet lectus scelerisque pretium. Donec dignissim lorem venenatis erat finibus, vitae commodo odio consectetur. Aliquam eu massa tortor. Nulla facilisi. Quisque vel pharetra lacus. Quisque lacinia sem a nibh mollis tempor. Donec ullamcorper pharetra posuere. Donec nec dui gravida, vestibulum dolor eu, pharetra leo. Morbi lobortis vehicula erat. Quisque sit amet lectus mollis, rhoncus lacus id, commodo erat. Quisque tristique, augue vel rhoncus viverra, ipsum augue feugiat enim, nec pretium ante nisi et augue. Nullam at nunc eu massa lobortis pellentesque."} />
            </section>
        </>
    );
}