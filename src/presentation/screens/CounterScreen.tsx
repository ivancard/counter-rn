import { useState } from "react"
import { StyleSheet, Text, View, Pressable, Platform } from "react-native"
import { Button } from "react-native-paper"

export const CounterScreen = () => {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button onPress={incrementCounter} onLongPress={resetCounter} mode='contained' >+1</Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
})