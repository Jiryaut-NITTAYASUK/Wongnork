import React, {useState, useEffect } from "react"
import { View, Text ,StyleSheet, TextInput, ScrollView } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import ResultsList from "../components/ResultsList";
import searchApi from "../api/searchApi";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchFunc,results, errMessage] = searchApi()

    const filterResults = price => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.screenView}>
            <View style={styles.inputView}>
            <FontAwesome name="search" style={styles.iconStyle} />
                <TextInput style={styles.inputStyle} placeholder="Search by name" value={term} onChangeText={(term) => {setTerm(term)}} onEndEditing = {() => searchFunc(term)}/>
            </View>
            {errMessage ? <Text style={{ marginLeft: 10}}> {errMessage} </Text> : null }
            <ScrollView>
                <ResultsList title="ถูกนะ" results={filterResults("$")}></ResultsList>
                <ResultsList title="เริ่มไม่ถูก" results={filterResults("$$")}></ResultsList>
                <ResultsList title="เริ่มแพง!!!" results={filterResults("$$$")}></ResultsList>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screenView:{
        backgroundColor: "#FDEFEF",
        flex: 1.0,
    },
    inputView:{
        height: 50,
        margin: 10,
        marginHorizontal: 15,
        backgroundColor: "#909090",
        flexDirection: "row",
        borderRadius: 5,
    },
    inputStyle:{
        flex: 1,
        fontSize: 20,
        color: "#F5F5F5",
    },
    iconStyle:{
        alignItems: "center",
        color: "black",
        margin: 10,
        fontSize: 24,
    },
});

export default SearchScreen;