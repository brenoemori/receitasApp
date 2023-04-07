import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Detail } from '../../pages/detail';

export function FoodList({ data }){


    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail", {data: data})
    }

    return(
        <TouchableOpacity 
        activeOpacity={0.6}
        style={styles.container}
        onPress={handleNavigate}
        >
            <Image
            source={{ uri: data.cover }}
            style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.subTitle}>{data.total_ingredients} ingredientes  |  {data.time} min</Text>
            </View>

            <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    cover:{
        width: '100%',
        height: 200,
        borderRadius: 14
    },
    info: {
        paddingLeft: 12,
        position: 'absolute',
        bottom: 14,
        zIndex: 99
    },
    title: {
        color: '#fff',
        paddingBottom: 6,
        fontSize: 18,
        fontWeight:'bold'
    },
    subTitle:{
        color: '#fff'
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})