import TourDetail from "../../components/tour/TourDetail";

export default function DetailPage() {
    return (
        <>
            <section className="pt-10 bg-stone-200 dark:bg-gray-900 h-max w-screen flex items-center flex-col">
                <TourDetail placeName={"Porto, Portugal"} placeImage={"https://abre.ai/hs4X"} price={"599"} description={"Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet"} />
            </section>
        </>
    );
}