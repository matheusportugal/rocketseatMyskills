import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        marginTop: 10,
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center'
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',

    }
});