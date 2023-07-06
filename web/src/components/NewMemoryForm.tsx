'use client'

import { Camera } from "lucide-react"
import { MediaPicker } from "./MediaPicker"
import { FormEvent } from "react"
import { api } from "@/lib/api"

export function NewMemoryForm() {
    async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const fileToUpload = formData.get('coverUrl')

        let coverUrl = ''

        if(fileToUpload) {
            const uploadFormData = new FormData()
            uploadFormData.set('file', fileToUpload)

            const uploadResponse = await api.post('/upload', uploadFormData)

            coverUrl = uploadResponse.data.fileUrl
        }

        await api.post('/memories', {
            coverUrl,
            content: formData.get('content'),
            isPublic: formData.get('isPublic'),
        })
    }

    return (
        <form 
            onSubmit={handleCreateMemory}
            className="flex flex-1 flex-col gap-2">
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
    )
}