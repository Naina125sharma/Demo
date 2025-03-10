import React from "react";
import { Image, StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import Images from "../assets/images";
import { useSelector } from "react-redux";
const WIDTH_Screen = Dimensions.get('screen').width

type Prop = {
    title: string
    thumbnail: string
    price: number
}
type ItemProp = {
    item: Prop
}

export const ItemImage = ({ item }: ItemProp) => {
    return (
        <View style={styles.itemContainer} >
            <Image style={styles.itemImage} source={{ uri: item.thumbnail }} />
            <Text numberOfLines={1} style={styles.itemName} >{item.title}</Text>
            <Text style={styles.itemPrice} >{item.price}</Text>
        </View>
    )
};

const TrendingProducts = () => {
    const { limit,products } = useSelector((state:any) => state.productOptions)
    console.log('==================================== limit');
    console.log(limit);
    console.log('====================================');
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.imgGroup} source={Images.group}></Image>
                <Image style={styles.imgSplash} source={Images.logoApp}></Image>
                <Text style={styles.brandText} >Stylish</Text>
                <Image style={styles.imgProfile} source={Images.profile}></Image>
            </View>
            <View style={styles.middle}>
                <Image style={styles.logoSearch} source={Images.search}></Image>
                <Text style={styles.txtSearch}>Search any Product</Text>
                <Image style={styles.logoMic} source={Images.mic}></Image>
            </View>
            <View>
                <Text style={styles.rsltItems}>Items</Text>
                <FlatList
                    data={products }
                    renderItem={({ item }) => (
                        <ItemImage item={item} />
                    )}
                />

            </View>
        </View>
    )
}
export default TrendingProducts
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'F2F2F2'
    },
    top: {
        flexDirection: "row",
        marginVertical: 10,
    },
    imgGroup: {
        height: 32,
        width: 32,
        marginRight: 10
    },
    imgSplash: {
        height: 31,
        width: 39,
    },
    brandText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4392F9",
        marginLeft: 6,
        flex: 1,
    },
    imgProfile: {
        height: 40,
        width: 40,
    },
    logoSearch: {
        height: 20,
        width: 20,
        marginVertical: 10,
    },
    txtSearch: {
        marginVertical: 10,
        flex: 1,
        marginLeft: 16,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14
    },
    logoMic: {
        height: 24,
        width: 24,
        marginVertical: 8
    },
    middle: {
        flexDirection: 'row',
        borderRadius: 12,
        height: 44,
        marginTop: 16,
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
    rsltItems: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18
    },
    itemContainer: {
        backgroundColor: "#F3F6F8",
        borderRadius: 32,
        alignItems: "center",
        // height: 209,
        width: (WIDTH_Screen - 85) / 2,
        aspectRatio: 0.693,
        padding: 10,
        marginVertical: 10,
    },
    itemImage: {
        height: 113,
        width: '100%',
        margin: 10
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '700'
    },
    itemPrice: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 4
    }

})