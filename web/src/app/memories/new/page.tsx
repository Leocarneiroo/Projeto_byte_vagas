import { MediaPicker } from "@/components/MediaPicker";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray100">
                <ChevronLeft className="h-4 w-4"/>
                Voltar
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-4">
                    <label htmlFor="media" className="flex cursor-poiter items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">

                        <Camera className="h-4 w-4"/>
                        Anexar mídia
                    </label>
                    
                    <label htmlFor="isPublic" className="flex cursor-poiter items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                        <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rouded border-gray-400 bg-gray-700 text-purple-500"></input>
                        Tornar público
                    </label>
                </div>
                <MediaPicker />
                <textarea 
                    name="content"
                    spellCheck="false"
                    className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
                    placeholder="Adicione aqui uma mensagem, fotos, vídeos ou relatos..."
                />

                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                    Salvar
                </button>
            </form>
        </div>
    )
}