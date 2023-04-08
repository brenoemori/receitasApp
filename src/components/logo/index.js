import { Text, StyleSheet } from 'react-native'

import { View as MotiView } from 'moti'

export function Logo(){
    return(
        <MotiView style={styles.logoArea}
        from={{
            opacity:0,
            translateX: -50,
        }}
        animate={{
            opacity: 1,
            translateX: 0
        }}
        transition={{
            delay: 100,
            type: 'spring',
            duration: 700 
        }}       
        >
            <Text style={styles.textLogo}>
                Receita Fácil
            </Text>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#4CBE6C',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    textLogo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    }
})