import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"
import { useNavigation } from "@react-navigation/native"

type FormeProps = {
    name?: string
    birth?: Date
}

export function FormStepOne() {
    const birthRef = useRef<TextInput>(null)
    const { control, reset, handleSubmit, formState: { errors } } = useForm<FormeProps>()
    const { navigate } = useNavigation()

    function handleNext(data: any) {
        console.log(data)
        reset()
        navigate("formStepTwo")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha as informações</Text>
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
                        required: 'Data é obrigátorio!',
                        pattern: {
                            value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                            message: "Data invalido!"
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Data De Nascimento',
                    onSubmitEditing: handleSubmit(handleNext),
                }}
            />

            <Button
                title='Salvar'
                onPress={handleSubmit(handleNext)}
            />
        </View>
    )
}