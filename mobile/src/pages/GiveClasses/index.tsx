import React from 'react';
// ImageBackground => imagem de fundo com filhos dentro dele (todas precisam ser definidas od tamanhos)
import { View,  ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    // método goBack => volta para a tela anterior, independente de onde veio
    const { goBack } = useNavigation();

    function handleNavigateGoBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                // resizeMode => o conteúdo ficar contido no tamanho do elemento
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={styles.content}>

                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateGoBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem!</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;