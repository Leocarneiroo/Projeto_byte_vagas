
import { Copyright } from '@/components/Copyright'
import { TitleSection } from '@/components/TitleSection'
import { SignIn } from '@/components/SingIn'
import { Empty } from '@/components/Empty'
import { Blur } from '@/components/Blur'

export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/*Parte esquerda*/}
    <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
      {/*Blur da cor roxa*/}
      <Blur />

      {/*Sing in button - Create Acount*/}
      <SignIn />

      {/*Coração - Título - Subtítulo - Botão de Cadastro */}
      <TitleSection />

      {/*Copyright*/}
      <Copyright />

    </div>


    {/*Parte direita*/}
    <div className="flex lfex-col p-16">
      <Empty />
    </div>
  </main>
}