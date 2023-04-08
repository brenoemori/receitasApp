import * as React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Button, StatusBar }  from 'react-native'
import { Feather } from '@expo/vector-icons'

export function VideoView({ handleClose, videoUrl }){
    return(
        <SafeAreaView 
        style={styles.container}
        >
            <TouchableOpacity style={styles.button}
            onPress={handleClose}
            >
                <Feather
                name='arrow-left'
                size={24}
                color={'#ffffff'}
                />
                <Text style={styles.textButton}> Voltar </Text>
            </TouchableOpacity>

            <WebView
                style={styles.webView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    button: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'red',
        backgroundColor: '#4CBE6C',
        width: '100%',
        height: 48,
        paddingStart: 8
    },
    textButton: {
        fontSize: 18,
        fontWeight: 500,
        color: '#ffffff',
        marginLeft: 14
    },


})