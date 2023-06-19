import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import bgBlur from './src/assets/bg-blur.png'
import Coracao from './src/assets/coracao.svg'

// medidas no ambiente mobile são diferentes de pixels por isso nao se usa px nas medidas

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={bgBlur}
      className=" realtive flex-1 items-center bg-zinc-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <View className="flex-1 items-center justify-center gap-6">
        <Coracao />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Transforme o mundo com a sua jornada!
          </Text>
          <Text className="p-5 text-center font-body text-base leading-relaxed text-gray-50">
            Descubra seu potencial: Encontre a melhor empresa para otimizar seus
            talentos!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-400 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            CADASTRAR CURRICULUM
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com carinho por Equipe Byte
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
