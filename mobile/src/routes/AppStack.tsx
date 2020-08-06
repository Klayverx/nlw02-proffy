import React from 'react';
// NavigationContainer => elemento que fica por volta das rotas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

// Navigator => Navegação em pilha
// Screen => Cada tela a navegação
const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            {/* screenOptions => para estilizar/ retirar a barra nativa do navegador Stack */}
            <Navigator screenOptions={{ headerShown: false }}>
                {/* name => geralmente o nome da página
                    component => página que será mostrada */}
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
};

export default AppStack;
