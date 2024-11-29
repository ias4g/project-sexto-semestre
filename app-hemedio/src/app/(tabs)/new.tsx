import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[200]
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  }
})