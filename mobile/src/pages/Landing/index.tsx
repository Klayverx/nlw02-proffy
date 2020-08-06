import React from 'react';
// View => página em branco
// Image => imagens do react-native
// TouchableOpacity => botão
import { View, Image, Text, TouchableOpacity } from 'react-native';
// importação para as navegações
import { useNavigation } from '@react-navigation/native';
// botão retangular desta biblioteca que adapta o efeito do clique de acordo com o celular
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

// TS não entende o .png
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
    const { navigate } = useNavigation();

    // função que retorna para onde vai ser navegado usando o navigate
    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }
    // navega para a tela de navegação por abas
    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                {/* {'\n'} => quebra de linha */}
                Seja bem-vindo,{'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>

            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}

export default Landing;