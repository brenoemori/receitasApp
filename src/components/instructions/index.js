import { Text, View, StyleSheet } from "react-native"


export function Instructions({ data, index }){
    return(
       <View style={styles.container}>
        <Text style={styles.instructionNumber}>
            {index + 1}- </Text>
        <Text style={styles.instructionText}>
         {data.text}
        </Text>
       </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8
    },
    instructionNumber:{
        fontWeight: 'bold',
        fontSize: 18
    },
    instructionText: {
        lineHeight: 20
    }
})