import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View , TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../../components/logo';
import { FoodList } from '../../components/foodList';

import { Text as MotiText, View as MotiView } from 'moti'

import api from '../../services/api'

import { useNavigation } from '@react-navigation/native';

export function Home(){
    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi();
    }, [])

    function handleSearch(){
        if(!inputValue) return;

        let input = inputValue

        navigation.navigate("Search", { name:input })
        
        setInputValue('')
    }

    return(
        <SafeAreaView style={styles.container}> 
            <Logo/>

            <MotiText 
            style={styles.title}
            from={{
                opacity:0,
                translateY: 15,
                
            }}
            animate={{
                opacity: 1,
                translateY: 0
            }}
            transition={{
                delay: 100,
                type: 'timing',
                duration: 650
            }}
            >
                Encontre a receita
            </MotiText>

            <MotiText 
            style={styles.title}
            from={{
                opacity:0,
                translateY: 15,
                
            }}
            animate={{
                opacity: 1,
                translateY: 0
            }}
            transition={{
                delay: 200,
                type: 'timing',
                duration: 850
            }}
            >
                que combine com você!
            </MotiText>

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
    }
})
