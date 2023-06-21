import Image from "next/image"
import coracao from '../assets/coracao.svg'


export function TitleSection () {
   return (
        <div className="space-y-5">
            {/* Heart image */}
            <Image src={coracao} alt="Imagem coração" />
        
            {/* Title */}
            <div className="max-w-[420px] space-y-4">
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">
                  Transforme o mundo com a sua jornada!
                </h1>
        
                {/* Subtitle */}
                <p className="mt-1 text-lg leading-relaxed">
                  Descubra seu potencial: Encontre a melhor empresa para otimizar seus talentos!
                </p>
        
                {/* Curriculum registration button */}
                <a
                  className="inline-block rounded-full bg-green-400 px-5 py-3 font-alt text-sm leading-none uppercase text-black hover:bg-green-600"
                  href=""
                >
                  CADASTRAR CURRICULUM
                </a>
            </div>
        </div>
    );
}