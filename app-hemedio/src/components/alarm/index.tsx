import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function Alarm() {
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.title}>Dipirona</Text>
        <Image style={styles.image} source={{ uri: "https://github.com/ias4g.png" }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Todos os dias</Text>
        <Text style={styles.text}>de 12 em 12 horas</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Período</Text>
        <Text style={styles.text}>Por 7 dias</Text>
      </View>
    </View>
  )
}