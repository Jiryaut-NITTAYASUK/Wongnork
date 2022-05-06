import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const ResultsList = ({title, results }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.resultContrainer}>
        <Text style={styles.title}>{title} [{results.length}]</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ShowResult" ,{ id : item.id})}>
                            <View>
                                <Text style={styles.resultTitle}>{item.name}</Text>
                                <Image source={{uri: item.image_url}} style={styles.image}></Image>
                                <Text style={styles.resultDetail}>
                                    {item.rating} Stars, {item.review_count} Reviews
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "bold",
    },
    image:{
        width: 200,
        height: 150,
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 15,
    },
    resultContrainer:{
        marginLeft: 15,
    },
    resultTitle:{
        fontSize: 14,
        marginLeft: 15,
    },
    resultDetail:{
        fontSize: 14,
        marginLeft: 15,
    },
});

export default ResultsList;