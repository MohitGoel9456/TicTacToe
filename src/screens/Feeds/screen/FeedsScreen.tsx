import { apiConfig } from 'config/apiConfig';
import { useGetFeedsQuery } from 'hooks/useGetFeedsQuery';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { getWidth } from 'utils/deviceConfigUtils';
import FastImage from 'react-native-fast-image'


const FeedsScreen = () => {
    const [params, setParams] = useState({
        page: 1,
        per_page: 20
    });
    const { data, isloading, error } = useGetFeedsQuery(apiConfig.baseUrl, params);

    const renderFeed = ({ item }: { item: any }) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.user.username}</Text>
                <FastImage
                    style={styles.feedImage}
                    source={{
                        uri: item.urls.regular,
                    }}
                />
                <Text>{item.likes}</Text>
            </View>
        )
    }

    if (!data) {
        return (
            <Text>No Feeds available</Text>
        )
    }
    console.log("length ", data?.length)
    console.log("datea  ", data)

    const handleEndReached = () => {
        // Load more data when the end of the list is reached
        console.log("handleEndReached")
        setParams((prevParams) => ({ ...prevParams, page: params.page + 1 }));
    }

    return (
        <View style={styles.container}>
            <Text>This is Feed screen</Text>
            <FlatList
                data={data}
                renderItem={renderFeed}
                keyExtractor={(item, index) => item.id + index.toString()}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16
    },
    feedImage: {
        height: getWidth(),
        width: getWidth(),
    },
    itemContainer: {
        marginBottom: 16
    }
})

export default FeedsScreen;