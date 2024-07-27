import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

import Logo from '@/assets/bradesco-logo.png';
import IconUser from '@/assets/icon-user.svg';

export function Header() {
    return (
        <header className="relative flex w-full h-20 bg-primary-orange">
            <div className="flex w-full">
                <div className="flex-1 flex items-center justify-between max-w-[1246px] px-[15px] mx-auto">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center gap-14">
                            <Image src={Logo} width={60} height={60} alt="logo" />
                            <ul className="flex items-center gap-12">
                                <li><ItemMenu name="Para você" /></li>
                                <li><ItemMenu name="Para empresas" /></li>
                                <li><ItemMenu name="Serviços" /></li>
                                <li><ItemMenu name="Ajuda" /></li>
                            </ul>
                        </div>
                        <Search />
                    </div>
                </div>
                
                <div className="w-1/5 bg-primary-blue flex items-center justify-center">
                    <button className="flex items-center gap-4 bg-primary-blue h-full text-white font-bold">
                        <Image src={IconUser} alt="Icon user" />
                        <span>Acessar conta</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
