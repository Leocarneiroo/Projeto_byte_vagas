import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'
import { Blur } from '@/components/Blur'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SingIn'
import { TitleSection } from '@/components/TitleSection'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable:'--font-bai-jamjuree' })

export const metadata = {
  title: 'Banco de Vagas e Talentos',
  description: 'Uma aplicação com banco de dados de vagas e talentos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>

        <main className="grid grid-cols-2 min-h-screen">
          {/*Parte esquerda*/}
          <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
          {/*Blur da cor roxa*/}
            <Blur />
          {/*Sing in button - Create Acount*/}
            {isAuthenticated ? <Profile/> : <SignIn />}
          {/*Coração - Título - Subtítulo - Botão de Cadastro */}
            <TitleSection />
          {/*Copyright*/}
            <Copyright />
          </div>
            {/*Parte direita*/}
          <div className="flex lfex-col p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
