import { View, Text, TextInput, Alert } from "react-native";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef, useRef, useState } from "react";
import { NewAlarmProps } from "./new-alarm";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";

type FormeProps = {
    name?: string
    date?: string
    quantity?: string
    time?: string
}


export const NewAlarm = forwardRef<BottomSheet, NewAlarmProps>(({ onClose }, ref) => {
    const { control, reset, handleSubmit, formState: { errors } } = useForm<FormeProps>()
    const dateRef = useRef<TextInput>(null)
    const quantityRef = useRef<TextInput>(null)
    const timeRef = useRef<TextInput>(null)

    const [date, setDate] = useState<Date | undefined>(new Date())
    // const [datePicker, setDatePicker] = useState(new Date())
    const [show, setShow] = useState<boolean>(false)

    function showMode() {
        setShow(true)
    };

    function handleOnClose() {
        reset()
        onClose()
    }

    function handleNextSubmit(data: any) {
        console.log(data)
        reset()
        onClose()
    }

    return (
        <BottomSheet
            ref={ref}
            index={0}
            snapPoints={[0.01, '50%']}
            backgroundStyle={styles.container}
            handleComponent={() => null}
        >
            <BottomSheetView style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.info}>
                        <FontAwesome
                            name="close"
                            size={24}
                            onPress={handleOnClose}
                            color={theme.colors.white}
                        />

                        <Text style={styles.title}>
                            Adicionar alarme
                        </Text>

                        <FontAwesome
                            name="check"
                            size={24}
                            onPress={handleSubmit(handleNextSubmit)}
                            color={theme.colors.white}
                        />
                    </View>
                    <Text style={styles.description}>
                        O alarme disparará em {String(date?.getHours() ?? 0)} horas
                        e {String(date?.getMinutes() ?? 0)} {'\n'} minutos
                    </Text>
                </View>
                {/* <View> */}
                {/* <Button isDisabled={false} onPress={showMode} title="Show time picker!" /> */}
                {/* <Text>selected: {date?.toLocaleString()}</Text> */}
                {/* {show && (
                        <DateTimePicker
                            value={new Date()}
                            is24Hour={true}
                            mode={"time"}
                            onChange={(evt, selectedDate) => {
                                setDate(selectedDate);
                                setShow(false)
                            }}
                        />
                    )} */}

                {/* <Text>{String(date?.toLocaleString())}</Text> */}
                {/* <Text>{String(date?.getHours() ?? 0)}:{String(date?.getMinutes() ?? 0)}</Text> */}

                {/* <DatePicker
                        date={datePicker}
                        onDateChange={setDatePicker}
                    /> */}
                {/* </View> */}

                <Input
                    icon="medical-bag"
                    error={errors.name?.message}
                    formProps={{
                        name: "name",
                        control,
                        rules: {
                            required: 'Nome é obrigátorio!'
                        }
                    }}
                    inputProps={{
                        placeholder: 'Nome do remédio',
                        onSubmitEditing: () => dateRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />

                <Input
                    ref={dateRef}
                    icon="calendar"
                    error={errors.date?.message}
                    formProps={{
                        name: "date",
                        control,
                        rules: {
                            required: 'Data é obrigátorio!'
                        }
                    }}
                    inputProps={{
                        placeholder: 'Data do remédio',
                        onSubmitEditing: () => quantityRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />


                <Input
                    ref={quantityRef}
                    icon="plus-thick"
                    error={errors.quantity?.message}
                    formProps={{
                        name: "quantity",
                        control,
                        rules: {
                            required: 'Quantidade é obrigátorio!'
                        }
                    }}
                    inputProps={{
                        placeholder: 'Quantas vezes ao dia',
                        onSubmitEditing: () => timeRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />

                {/* <Input
                    ref={dateRef}
                    icon="calendar"
                    error={errors.email?.message}
                    formProps={{
                        name: "date",
                        control,
                        rules: {
                            required: 'Data é obrigatório!',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/,
                                message: "E-mail invalido!"
                            }
                        }
                    }}
                    inputProps={{
                        placeholder: 'Seu melhor e-mail',
                        onSubmitEditing: handleSubmit(handleNextSubmit)
                    }}
                /> */}
                <Input
                    ref={timeRef}
                    icon="timer-settings"
                    error={errors.time?.message}
                    formProps={{
                        name: "time",
                        control,
                        rules: {

                            required: 'Tempo é obrigatório!',
                        }
                    }}
                    inputProps={{
                        placeholder: 'Por quanto tempo?',
                        onSubmitEditing: handleSubmit(handleNextSubmit)
                    }}
                />

                <Button
                    title="Enviar"
                    onPress={handleSubmit(handleNextSubmit)}
                />
            </BottomSheetView>
        </BottomSheet>
    )
})