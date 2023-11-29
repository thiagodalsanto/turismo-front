import TourDetail from "../components/TourDetail";

export default function DetailPage() {
    return (
        <>
        <section className="pt-10 pb-16 bg-gray-50 dark:bg-gray-900 h-screen">
            <TourDetail placeName={"Porto, Portugal"} placeImage={"https://abre.ai/hs4X"} price={"599"} description={"Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet"} reviews={"2"} />
        </section>
        </>
    );
}