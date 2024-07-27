import Image from "next/image";

interface ItemServicesProps {
    imgSrc:string;
    name: string;
    alt: string;
}
export function ItemServices({ imgSrc , name, alt }: ItemServicesProps){
    return(
        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
            <div className="w-7 h-7 flex items-center justify-center"> 
                <Image src={imgSrc} alt={alt} width={28} height={28}/>
            </div>
            <p className="flex-1 text-txt-gray pr-2">{name}</p>
        </li>
    )
}