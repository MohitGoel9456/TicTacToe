import React from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Image,
    Text
} from 'react-native';
import backImage from '@assets/back.png';
import { useNavigation } from '@react-navigation/native';

type Iprops = {
    title: string;
    shouldShowBackButton?: boolean;
}

const Header: React.FC<Iprops> = (props: Iprops) => {
    const { title, shouldShowBackButton = true } = props;

    const navigation = useNavigation();
    const onBackPress = (): void => {
        navigation.goBack();
    }

    const renderHeaderBack = (): JSX.Element => {
        return (
            <Pressable onPress={onBackPress}>
                <Image
                    style={styles.tinyLogo}
                    source={backImage}
                />
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                {shouldShowBackButton && renderHeaderBack()}
            </View>
            <Text style={styles.title}>{title}</Text>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'aqua',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tinyLogo: {
        width: 16,
        height: 16,
    },
});

export default Header;
