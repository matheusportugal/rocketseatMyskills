import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
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