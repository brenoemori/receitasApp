import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'

import api from '../../services/api';
import { FoodList } from '../../components/foodList'

export function Search(){

    const route = useRoute();
    const [receipes, setReceipes] = useState([])

    useEffect(() => {
        async function fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data)
        }

        fetchReceipes()
    }, [route.params?.name])

    return(
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={() => 
                    <View style={styles.findContainer}>

                    <Image
                    source={require('../../../assets/midias/noResult.png')}
                    style={styles.image}
                    resizeMode='contain'
                    />                
                    
                    <Text style={styles.text}>
                        Não encontramos o que está buscando...
                    </Text>

                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    image:{
       maxWidth: '100%',
       height: 350,
    },
    findContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})
