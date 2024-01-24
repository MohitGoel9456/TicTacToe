import { Dimensions } from "react-native";

export const getWidth = (): number => {
    return Dimensions.get('window').width;
}

export const getHeight = (): number => {
    return Dimensions.get('window').height;
}