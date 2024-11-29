import { Alarm } from '@/components/alarm'
import { theme } from '@/theme'
import { BellRinging } from 'phosphor-react-native'
import { ScrollView, Text } from 'react-native'
import { StyleSheet, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Hémedio</Text>
        <BellRinging color={theme.colors.blue[700]} size={24} />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{
        gap: 16,
        paddingBottom: 64
      }}>
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
    // marginTop: 64,
    // justifyContent: 'center',
    backgroundColor: theme.colors.gray[200]
  },
  content: {
    width: '100%',
    flex: 1
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  logo: {
    fontSize: 24,
    color: theme.colors.blue[700],
    fontFamily: theme.fontFamily.bold,
    textTransform: 'uppercase'
  }
})