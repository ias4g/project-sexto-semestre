import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { theme } from '@/theme'
import { BellRinging, Gear, PencilLine } from 'phosphor-react-native'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Settings, StyleSheet, Text, TextInput, View } from 'react-native'

type FormeProps = {
  name?: string
  birth?: Date
  height?: number
  weight?: number
}

export default function Profile() {
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormeProps>()
  const birthRef = useRef<TextInput>(null)
  const heightRef = useRef<TextInput>(null)
  const weightRef = useRef<TextInput>(null)

  function handleSave(data: any) {
    console.log(data)
    reset()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Gear color={theme.colors.blue[700]} size={24} weight='bold' />
          <Text style={styles.text}>Configurações</Text>
        </View>
        <PencilLine color={theme.colors.blue[700]} size={24} weight='bold' />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: 'https://github.com/ias4g.png' }}
        />

        <Input
          icon="account"
          error={errors.name?.message}
          formProps={{
            name: "name",
            control,
            rules: {
              required: 'Nome é obrigátorio!'
            }
          }}
          inputProps={{
            placeholder: 'Nome Completo',
            onSubmitEditing: () => birthRef.current?.focus(),
            returnKeyType: 'next'
          }}
        />

        <Input
          ref={birthRef}
          icon="calendar"
          error={errors.birth?.message}
          formProps={{
            name: "birth",
            control,
            rules: {
              required: 'Data de nascimento é obrigátorio!'
            }
          }}
          inputProps={{
            placeholder: 'Data de nascimento',
            onSubmitEditing: () => heightRef.current?.focus(),
            returnKeyType: 'next'
          }}
        />

        <Input
          ref={heightRef}
          icon="human-male-height-variant"
          error={errors.height?.message}
          formProps={{
            name: "height",
            control,
            rules: {
              required: 'Altura é obrigátorio!'
            }
          }}
          inputProps={{
            placeholder: 'Ex: 175cm',
            onSubmitEditing: () => weightRef.current?.focus(),
            returnKeyType: 'next'
          }}
        />

        <Input
          ref={weightRef}
          icon="weight-kilogram"
          error={errors.weight?.message}
          formProps={{
            name: "weight",
            control,
            rules: {
              required: 'Peso é obrigátorio!'
            }
          }}
          inputProps={{
            placeholder: 'Ex: 78kg',
            onSubmitEditing: handleSubmit(handleSave)
          }}
        />

        <Button
          title="Salvar"
          onPress={handleSubmit(handleSave)}
          onLongPress={() => reset()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 24,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: theme.colors.gray[200]
  },
  content: {
    // flex:1,
    width: '100%',
    alignItems: 'center',
    gap: 16
    // justifyContent:'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center'
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 50,
    marginTop: 24
  },
  text: {
    fontSize: 22,
    color: theme.colors.blue[700],
    fontFamily: theme.fontFamily.bold
  }
})