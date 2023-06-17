import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// medidas no ambiente mobile são diferentes de pixels por isso nao se usa px nas medidas

export default function App() {
  return (
    <View className="bg-zinc-950 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-4xl">
        Projeto Byte Vagas
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
