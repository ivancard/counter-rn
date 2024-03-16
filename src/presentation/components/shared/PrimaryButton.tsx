import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text } from "react-native"

interface PrimaryButtonProps {
    label: string
    onPress?: () => void
    onLongPress?: () => void
}

export const PrimaryButton = ({ label, onPress, onLongPress }: PrimaryButtonProps) => {

    const incrementCounter = () => {
        onPress && onPress()
    }
    const resetCounter = () => {
        onLongPress && onLongPress()
    }

    return (
        <Pressable style={({ pressed }) => [styles.buttonStyle, pressed && styles.buttonPressed]} onPress={incrementCounter} onLongPress={resetCounter}>
            <Text style={{ color: 'white' }} >{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: Platform.OS === 'ios' ? '#5856D6' : "#5856D6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: '#4746AB',
    }
})