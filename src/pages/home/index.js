import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View , TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../../components/logo';
import { FoodList } from '../../components/foodList';

import api from '../../services/api'

export function Home(){

    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi();
    }, [])

    function handleSearch(){
        alert(`Você digitou: ${inputValue}`)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combine com você!</Text>

            <View style={styles.form}>
                <TextInput 
                    placeholder='Digite o nome da comida...
                    '
                    style={styles.input}
                    value={inputValue}
                    onChangeText={ (text) => setInputValue(text) }
                />
                <TouchableOpacity
                onPress={ handleSearch }
                >
                    <Ionicons 
                    name='search'
                    size={28}
                    color='#4CBE6C'
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.saida}>{ inputValue }</Text>

            <FlatList
                data={ foods }
                keyExtractor={(item) => String(item.id) }
                renderItem={({ item }) => 
                <FoodList
                data={item}
                />}
                showsVerticalScrollIndicator={false}
                
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        fontSize: 26,
        fontWeight:'bold',
        color: "#0E0E0E",
    },
    form: {
        backgroundColor:'#fff',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    input:{
        width: '90%',
        height: 54,
        maxWidth: '90%'
    },
    saida: {
        fontSize: 21,
        color:'#d6d6d6'
    }
})
