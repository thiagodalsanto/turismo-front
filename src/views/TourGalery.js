import TourCard from "../components/TourCard";

export default function TourGalery() {
    return (
        <>
            <section class="pt-16 bg-gray-50 dark:bg-gray-900 flex justify-center align-center">
                <div className="grid grid-cols-4 gap-4">
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </div>
            </section>
        </>
    );
}