import React, { Children } from "react";
import {
    TouchableOpacity,
    TextStyle,
    StyleSheet
} from 'react-native';
import { TextView } from "./Text";
import colors from "../theme/colors";

interface ButtonProps {
    textType?: 'regular' | 'bold' | 'light',
    textStyle?: TextStyle | TextStyle[],
    textsize?: 'small' | 'medium' | 'large',
    containerStyle?: React.CSSProperties,
    title: string,
    onPress?: any
}

export const CustomButton = (props: ButtonProps): JSX.Element => {
    const { textType, textStyle, textsize, title, containerStyle, onPress } = props;
    const passedStyles = { ...styles.container, ...containerStyle };
    return (
        <>
            <TouchableOpacity
                style={passedStyles}
                onPress={onPress}
                {...props}
            >
                <TextView
                    {...props}
                    title={title}
                    textType={textType}
                    textsize={textsize}
                    style={textStyle}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.blue, // need to add colors from theme folder
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
    }
});