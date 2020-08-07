import React, { useState } from 'react';

import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// para a pagina de tabs carregar automagicamente. toda vez que a tela entrar em foco
import { useFocusEffect } from '@react-navigation/native';

import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import PageHeader from '../../Components/PageHeader';

import styles from './styles';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => loadFavorites());

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys disponíveis" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {/* percorre os favoritos e mostra na tela */}
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;