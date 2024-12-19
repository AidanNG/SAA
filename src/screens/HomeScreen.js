import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to SAA!</Text>
            <Button
                title="Go to Example"
                onPress={() => navigation.navigate('Example')}
            />
        </View>
    );
};

export default HomeScreen;