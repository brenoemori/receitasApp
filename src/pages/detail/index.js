import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Modal, Share } from 'react-native';
import { useRoute, useNavigation,  } from "@react-navigation/native";
import { Ingredients } from '../../components/ingredients'
import { Instructions } from '../../components/instructions';
import { VideoView } from '../../components/video';

import {isFavorite, saveFavorite, removeItem} from '../../utils/storage'

import { Entypo, AntDesign, Feather } from '@expo/vector-icons'

export function Detail(){

    const route = useRoute();
    const navigation = useNavigation();

    const [showVideo, setshowVideo] = useState(false)
    const [favorite, setFavorite] = useState(false);


    useLayoutEffect(() => {

        async function getStatusFavorites(){
            const receipeFavorite = await isFavorite(route.params?.data)
            setFavorite(receipeFavorite)
        }
        getStatusFavorites();


        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable 
                onPress={() => handleFavoriteReceipe(route.params?.data)}
                >

                { favorite ? (
                    <Entypo
                    name='heart'
                    size={28}
                    color='#FF4141'
                    />
                ):(
                    <Entypo
                    name='heart-outlined'
                    size={28}
                    color='#FF4141'
                    />
                )}
                </Pressable>
            )
        })
    },[navigation, route.params?.data, favorite])


    async function handleFavoriteReceipe(receipe){
        if(favorite){
            await removeItem(receipe.id)
            setFavorite(false)
        } else{
            await saveFavorite("@appreceitas", receipe)
            setFavorite(true);
        }
    }

    function handleOpenVideo(){
        setshowVideo(true)
    }

    async function shareReceipe(){
        try{
            await Share.share({ 
                url: route.params?.data.video,
                message: `Receita: ${route.params?.data.name} `
                
            })
        }catch(error){
            alert('erro ao tentar compartilhar')
        }
    }

    return(
        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
        >
            <Pressable style={styles.coverContainer}
            onPress={handleOpenVideo}
            
            >
               <View style={styles.playIcon}>
                <AntDesign
                name="playcircleo"
                size={48}
                color="#FAFAFA"
                />
               </View>

                <Image
                    source={{uri: route.params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}> 
                <View>
                    <Text style={styles.title}>
                        {route.params?.data.name}
                    </Text>
                    <Text style={styles.ingredientsText}>
                        Ingredientes ({route.params?.data.total_ingredients})
                    </Text>
                </View>

                <Pressable
                onPress={shareReceipe}
                >
                    <Feather
                    name='share-2'
                    size={26}
                    color={'#121212'}
                    />
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item) => (
                <Ingredients key={item.id} data={item}/>
            ) )}

            
            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsTitle}>Modo de preparo</Text>

                <Feather
                name='arrow-down'
                size={24}
                color='#ffffff'
                />

            </View>
                
            {route.params?.data.instructions.map((item, index) => (
                <Instructions
                key={item.id} 
                data={item}
                index={index}
                />
            ))}


            <Modal 
            visible={showVideo}
            animationType='slide'
            >
                <VideoView
                handleClose={() => {setshowVideo(false)}}
                videoUrl={route.params?.data.video}
                />
            </Modal>


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
    },
    playIcon: {
        position: 'absolute',
        zIndex: 1,

    },
    headerDetails:{
        flexDirection:'row',
        marginTop: 14,
        marginBottom: 14,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000',
    },
    ingredientsText: {
        marginBottom: 14,
        fontSize: 16
    },
    instructionsArea:{
        backgroundColor: '#4CBE6C',
        flexDirection:'row',
        marginTop: 8,
        paddingStart: 12,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 12,
        marginBottom: 20
    },
    instructionsTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f1f1f1',
        marginRight: 8

    }
})
