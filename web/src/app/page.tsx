import {User} from 'lucide-react'
import Image from 'next/image'

import coracao from '../assets/coracao.svg'

export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/*Parte esquerda*/}
    <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
      {/*Blur da cor roxa*/}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-500 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
      
      {/*Sing in button*/}
      <a 
        href={'https://github.com/login/oauth/authorize?cliente_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}'} 
        className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
      >
        
        {/*Ícone de usuário*/}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <User className='h-5 w-5 text-gray-500' />
        </div>

        <p className='max-w-[140px] text-sm leading-snug'><span className='underline'>Crie sua conta</span></p>
      </a>

      {/*Imagem do coração*/}
      <div className='space-y-5'>
        <Image src={coracao} alt="Imagem coração" />

        {/*Título*/}
        <div className='max-w-[420px] space-y-4'>
          <h1 className='mt-5 text-4xl font-bold leading-tight text-gray-50'>
            Transforme o mundo com a sua jornada!
          </h1>
          {/*Subtítulo*/}
          <p className='mt-1 text-lg leading-relaxed'>
            Descubra seu potencial: Encontre a melhor empresa para otimizar seus talentos!
          </p>
        </div>

        {/*Botão de cadastro - abaixo do título*/}
        <a className='inline-block rounded-full bg-green-400 px-5 py-3 font-alt text-sm leading-none uppercase text-black hover:bg-green-600' href="">
          CADASTRAR CURRICULUM
        </a>
      </div>

      {/*Copyright*/}
      <div className='text-sm leading-relaxed text-gray-200'>
        Feito com carinho por Equipe Byte.
      </div>

    </div>


    {/*Parte direita*/}
    <div className="flex lfex-col p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não cadastrou o seu CV,{' '}
          <a href="" className="underline text-gray-50">cadastre aqui</a>
        </p>
      </div>
    </div>
  </main>
}