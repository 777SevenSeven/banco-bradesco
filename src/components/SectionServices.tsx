import Image from "next/image"
import PhoneIcon from '@/assets/icon-phone.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'
import ImagePhone from '@/assets/phone.png'

import { Container } from "./Container"

import { ItemServices } from "./ItemServices"

export function SectionServices(){
    return(
        <section className="w-full h-[965px] relative" id="SectionServices">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços Exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col items-start gap-9">
                    
                        <ItemServices imgSrc={PhoneIcon} name="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver" alt="Icon Phone"/>
                        
                        <ItemServices imgSrc={SolutionsIcon} name="Soluções de empréstimos e renegociação para organizar suas finanças" alt="Icon Solutions"/>
                       
                        <ItemServices imgSrc={OptionsIcon} name="Diversas opções de investimentos, de acordo com o seu perfil de investidor" alt="Icon Options"/>
                        
                        <li className="flex items-center gap-9">
                            <div className="w-7 h-7 flex items-center justify-center"> 
                            <Image src={CardIcon} alt="Card Icon"/>
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.</p>
                        </li>
                        
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 w-[32%] h-full bg-gray-phone flex items-center">
                <Image src={ImagePhone} alt="Phone" className="translate-x-[-42%] w-200 h-300"/>
            </div>
        </section>
    )
}