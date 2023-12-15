import UserCard from "../../components/user/UserCard";

export default function UserHome() {
    return (
        <div aria-label="group of cards" tabindex="0" class="focus:outline-none w-full">
            <div class="lg:flex justify-center w-full pt-8 bg-stone-200 dark:bg-gray-900 h-screen">
                <UserCard tourImage={"https://encurtador.com.br/pJX45"} tourName={"Porto, Portugal"} tourCategorie={"Europe"} tourDescription={"O Porto é a segunda maior cidade de Portugal e aquela que deu nome ao país. Desde 1996 que o seu centro histórico está classificado como Património Mundial pela UNESCO."} />
                <UserCard tourImage={"https://encurtador.com.br/bsGQY"} tourName={"Ghent, Belgium"} tourCategorie={"Europe"} tourDescription={"Capital da província de Flandres Oriental, Gent nasceu de um assentamento celta na confluência dos rios Lys e Scheldt, na Idade Média. Chegou a ser uma das cidades mais ricas e prósperas do norte da Europa. Hoje é a terceira maior cidade da Bélgica e tem pouco mais de 200 mil habitantes."} />
            </div>
        </div>
    );
}