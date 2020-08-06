import React from 'react';
// createBottomTabNavigator => 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// pacotes de icones
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                // estilo do container das abas
                style: {
                    // propriedade de sombras no Android e no iOS
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                // estilização de cada uma das abas
                tabStyle: {
                    // um icone e um texto um do lado do outro
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                // cor de fundo do background quando não está/está selecionada
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                // cor do texto não selecionado/selecionado
                inactiveTintColor: '#c1bccc',
                activeTintColor:'#32264d'
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    // label da aba
                    tabBarLabel: 'Proffys',
                    // ícone da aba
                    // focused => verificar se esta acionada
                    tabBarIcon: ( { color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                        )
                    }
                }}
            />
            
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    // label da aba
                    tabBarLabel: 'Favoritos',
                    // ícone da aba
                    tabBarIcon: ( { color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;