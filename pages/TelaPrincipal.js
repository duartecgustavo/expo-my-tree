import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Chat from '../Chat';


export default function TelaPrincipal({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <View style={styles.navbar}>
                <Text style={styles.heading}>MyTree</Text>
                <Text style={styles.heading} onPress={() => navigation.navigate('Tela Principal')}>Cultivar</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>Bem-vindo</Text>
                        <Text style={styles.subheading}>Um novo jeito de pensar sobre cultivo e agricultura.</Text>
                    </View>
                    <Image source={require('../assets/jardinagem.png')} style={styles.imgbody} />
                </View>
                <Chat />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: '#00AEEF',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
    },
    navbarImage: {
        width: 45,
        height: 45,
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 24,
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    body: {
        width: '100%',
        backgroundColor: '#00AEEF',
        alignItems: 'center',
        padding: '20%'
    },
    bodyTexts: {
        width: '100%',
        alignItems: 'flex-start',
        gap: '30px'
    },
    imgbody: {
        marginTop: "20%",
        width: 300,
        height: 300,
    },
})
