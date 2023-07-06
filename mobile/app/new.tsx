import { ScrollView, Switch, Text, TextInput, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import Coracao from '../src/assets/coracao.svg'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function NewMemories() {
  const { bottom, top } = useSafeAreaInsets()
  const [isPublic, setIsPublic] = useState(false)

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <Coracao />

        <Link href="/memories" asChild>
          <TouchableOpacity className="rouded-full h-10 w-10 justify-center bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch value={isPublic} onValueChange={setIsPublic} />
          <Text className="font-body text-base text-gray-200">
            Tornar público
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-400 bg-black/20"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF"></Icon>
            <Text>Adicionar arquivo</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          multiline
          className="p-0 font-body text-lg text-gray-50"
          placeholderTextColor="#56565a"
          placeholder="Fique livre para adicionar sobre sua experiência!"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-full bg-green-400 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
