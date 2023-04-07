import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export function Favorites(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>
            Favorites Page!
            </Text>
            <Text>
                Testando página favoritos
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'orange'
    }
})
