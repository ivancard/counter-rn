import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles"
import { FAB } from "react-native-paper"

export const CounterM3Screen = () => {

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(0)
    }

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>

            <FAB
                icon="add-outline"
                style={globalStyles.fab}
                onPress={incrementCounter}
                onLongPress={resetCounter}
            />
        </View>
    )
}

