import { Container } from "./Container"
import Image from "next/image"

import ImgAppleStore from '@/assets/btn-apple-store.svg'
import ImgGooglePlay from '@/assets/btn-google-play.svg'

import Arrow from '@/assets/arrow-explorer.svg'
import WomanImage from '@/assets/woman.png'

export function SectionHero(){
    return(
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
        <Container>
            <div className="flex-1 max-w-[500px]">
                <h1 className="text-white text-7xl font-bold mb-4">Você no futuro das finanças com o Bradesco.</h1>
                <p className="text-white text-xl max-w[408px] mb-8">O nosso aplicativo oferece todas as soluções bancárias que você precisa, com a segurança e a confiança que você merece. Simples, eficiente e ao seu alcance.</p>
                <div className="flex gap-4 mb-24">
                    <button>
                        <a href="https://apps.apple.com/br/app/banco-bradesco/id336954985" target="_blank" rel="noopener noreferrer"><Image src={ImgAppleStore} alt="Apple Store" /></a>
                    </button>
                    <button>
                        <a href="https://play.google.com/store/apps/details?id=com.bradesco&hl=pt_BR" target="_blank" rel="noopener noreferrer"><Image src={ImgGooglePlay} alt="Google Play" /></a>
                    </button>
                </div>
                <button className="flex items-center gap-3">
                    <Image src={Arrow} alt="Arrow Down" />
                    <a href="#SectionServices"><span className="text-white text-sm font-bold">Continue Explorando</span></a>
                </button>
            </div>
            <Image src={WomanImage} alt="Woman Image" className="mr-[-41px] w-[60%] h-[90%] translate-y-[7.4%]"/>
        </Container>
        </section>
    )
}