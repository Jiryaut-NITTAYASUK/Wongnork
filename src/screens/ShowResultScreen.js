import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import yelpApi from '../api/yelpApi';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ShowResultScreen = ({ route }) => {
    const [ result, setResult ] = useState("");
    const item = route.params;
    const id = item.id;

    const getResult = async (id) => {
        const response = await yelpApi.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    return(
        <View style={Styles.screenView}>
            <Text style={Styles.title}>{result.name}</Text>
            <Image source={{uri: result.image_url}} style={Styles.storeimage}></Image>
            {/* <Text style={Styles.detail}>Address:{result.location.display_address}</Text> */}
            <Text style={Styles.detail}>Phone<Entypo name="old-phone" size={24} color="black" />: {result.display_phone}</Text>
            <View style={Styles.row}>
                <Text style={Styles.detail}>Reviewed: {result.review_count}</Text>
                <Text style={Styles.detail}>Rating<AntDesign name="star" size={18} color="black" />: {result.rating}</Text>
            </View>
            <Text style={Styles.detail}>Price state: {result.price}</Text>
            <View style={Styles.row}></View>
            {/* <Image source={{uri: result.photos[1]}} style={Styles.storeimage}></Image>
            <Image source={{uri: result.photos[2]}} style={Styles.storeimage}></Image>
            <Image source={{uri: result.photos[3]}} style={Styles.storeimage}></Image>  */}
        </View>
    );
};

const Styles = StyleSheet.create({
    screenView:{
        alignItems: "center",
        flex: 1.0,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
    },
    storeimage:{
        width: 300,
        height: 200,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 15,
    },
    detail:{
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 16,
    },
    row:{
        flexDirection: "row",
    },
});

export default ShowResultScreen;