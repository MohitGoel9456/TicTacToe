import { apiConfig } from 'config/apiConfig';
import { useGetFeedsQuery } from 'hooks/useGetFeedsQuery';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { getWidth } from 'utils/deviceConfigUtils';


const FeedsScreen = () => {
    const { data, isloading, error } = useGetFeedsQuery(apiConfig.baseUrl);

    const renderFeed = ({ item }: { item: any }) => {
        return (
            <Image
                style={styles.feedImage}
                source={{
                    uri: item.urls.regular,
                }}
            />
        )
    }

    if (!data) {
        return (
            <Text>No Feeds available</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text>This is Feed screen</Text>
            <FlatList
                data={data}
                renderItem={renderFeed}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    feedImage: {
        height: getWidth(),
        width: getWidth(),
        marginBottom: 16,
        paddingHorizontal: 16
    }
})

export default FeedsScreen;