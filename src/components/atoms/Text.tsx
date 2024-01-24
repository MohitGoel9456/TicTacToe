import React from "react";
import {
    View,
    Text,
    TextStyle,
    StyleSheet
} from "react-native";

interface TextViewProps {
    textType?: 'regular' | 'bold' | 'light',
    style?: TextStyle | TextStyle[],
    textsize?: 'small' | 'medium' | 'large',
    title?: string
}

export const TextView: React.FC<TextViewProps> = (props): JSX.Element => {
    const { textType, style, textsize, title } = props;
    let textStyle = { ...styles.default };

    switch (textType) {
        case 'regular':
            textStyle = { ...textStyle, ...styles.regular }
            break;
        case 'bold':
            textStyle = { ...textStyle, ...styles.bold }
            break;
        case 'light':
            textStyle = { ...textStyle, ...styles.light }
            break;
    }

    switch (textsize) {
        case "small":
            textStyle = { ...textStyle, ...styles.small }
            break;
        case "medium":
            textStyle = { ...textStyle, ...styles.medium }
            break
        case "large":
            textStyle = { ...textStyle, ...styles.large }
            break;
    }

    const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;

    return (
        <View>
            <Text
                style={[textStyle, { ...passedStyles }]}
                {...props}
            >
                {title}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'sans-serif' //need to add theme
    },
    bold: {
        fontFamily: 'sans-serif'  //need to add theme
    },
    light: {
        fontFamily: 'sans-serif'   //need to add theme
    },
    small: {
        fontSize: 14,
    },
    medium: {
        fontSize: 16
    },
    large: {
        fontSize: 18
    },
    default: {
        fontFamily: 'Cochin',
        fontSize: 14,
        color: "#000",
    }
})