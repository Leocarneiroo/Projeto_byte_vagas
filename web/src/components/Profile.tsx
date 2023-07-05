import { getUser } from '@/lib/auth'
import Image from 'next/image';

export function Profile() {
    const { name, avatarUrl } = getUser()

    return (
      <div
        className="flex items-center gap-3 text-left">
        {/* User icon */}
        <Image src={avatarUrl} width={40} height={40} alt="" className="h-10 w-10 rounded-full"/>
  
        {/* Create account text */}
        <p className="max-w-[140px] text-sm leading-snug">
          {name}
          <a href="/api/auth/logout" className="block text-red-300 hover:text-red-600">
            Quero sair
          </a>
        </p>
      </div>
    );
}