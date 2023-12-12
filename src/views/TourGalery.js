import TourCard from "../components/TourCard";

export default function TourGalery() {
    return (
        <>
            <section class="pt-10 pb-16 bg-stone-200 dark:bg-gray-900 flex justify-center align-center h-screen">
                <div className="grid grid-cols-4 gap-x-4 gap-y-4">
                    <TourCard imageURL={"https://encurtador.com.br/bksMT"} placeName={"El Nido, Philippines"} rating={"4.4"} price={"599"}/>
                    <TourCard imageURL={"https://encurtador.com.br/mIL69"} placeName={"Soneva Jani, Noonu Atoll, Maldives"} rating={"5.0"} price={"899"}/>
                    <TourCard imageURL={"https://encurtador.com.br/suvGT"} placeName={"Lauterbrunnen, Switzerland"} rating={"4.9"} price={"599"}/>
                    <TourCard imageURL={"https://encurtador.com.br/owzQY"} placeName={"Lofoten Islands, Svolvaer, Norway"} rating={"4.8"} price={"599"}/>
                    <TourCard imageURL={"https://encurtador.com.br/bsGQY"} placeName={"Ghent, Belgium"} rating={"4.7"} price={"599"}/>
                    <TourCard imageURL={"https://encurtador.com.br/pJX45"} placeName={"Porto, Portugal"} rating={"4.6"} price={"599"}/>
                </div>
            </section>
        </>
    );
}