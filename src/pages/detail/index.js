import { useLayoutEffect } from 'react';
import { StyleSheet, Text, Image, ScrollView, Pressable } from 'react-native';
import { useRoute, useNavigation,  } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons'

export function Detail(){

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable 
                onPress={() => alert('Testando coração')}
                >

                <Entypo
                name='heart'
                size={28}
                color='red'
                />
                </Pressable>
            )
        })
    },[navigation, route.params?.data])

    return(
        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
        >
            <Pressable style={styles.coverContainer}>
                <Image
                    source={{uri: route.params?.data.cover}}
                    style={styles.cover}
                />
                
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f3f9ff',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14
    },
    coverContainer: {
        justifyContent: 'center',
        alignItems:'center'
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 14
    }
})
