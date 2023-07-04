import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import bgBlur from '../src/assets/bg-blur.png'
import Coracao from '../src/assets/coracao.svg'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'
import { api } from '../src/lib/api'
import { useRouter } from 'expo-router'

// medidas no ambiente mobile são diferentes de pixels por isso nao se usa px nas medidas
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/858833a036d597728078',
}

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '858833a036d597728078',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'byteapp',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/resgister', {
      code,
    })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
  }

  useEffect(() => {
    // console.log(
    // makeRedirectUri({
    //  scheme: 'byteapp',
    // }),
    // )

    if (response?.type === 'success') {
      const { code } = response.params

      handleGithubOAuthCode(code)
    }
  }, [response])

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
          onPress={() => signInWithGithub()}
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
