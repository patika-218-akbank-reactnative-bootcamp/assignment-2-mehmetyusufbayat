import React from "react";
import { SafeAreaView, Pressable, View, Text, Image, ScrollView, StyleSheet } from "react-native";

function WhatsApp (props) {
    function navigateToPage () {
        props.navigation.navigate('Emre');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.TopBar}>
                    <Text style={styles.Duzen}>Düzenle</Text>
                    <Image style={styles.SearchIcon}></Image>
                </View>
                <View style={styles.SohbetBar}><Text style={styles.Sohbet}>Sohbetler</Text></View>
                <View style={styles.LastBar}>
                    <Text style={styles.Text1}>Toplu Mesaj Listeleri</Text>
                    <Text style={styles.Text2}>Yeni Grup</Text>
                </View>
                <Pressable onPress={navigateToPage}>
                    <View style={styles.Message}>
                        <Image style={styles.ProfileImage} source={{uri:'https://picsum.photos/200/250'}}>
                            
                        </Image>
                        <View style={styles.Content}>
                            <Text style={styles.ProfileName}>Emre</Text>
                            <Text style={styles.MessageText}>Projeler nasıl gidiyor?</Text>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

export default WhatsApp;

const styles = StyleSheet.create({
    TopBar: {
        width: "100%",
        height: 30,
        backgroundColor: "gray",
    },
    Duzen: {
        fontSize: 20,
        left: 15,
    },
    SearchIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        right: 20,
    },
    SohbetBar: {
        width: "100%",
        height: 65,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    Sohbet: {
        fontSize: 35,
        top: 15,
        left: 15,
    },
    LastBar: {
        width: "100%",
        height: 40,
        backgroundColor: "rgba(0,0,0,0.1)",
        flex: 1,
        flexDirection: "row",
    },
    Text1: {
        fontSize: 16,
        flex: 1,
        left: 10,
        top: 10,
    },
    Text2: {
        fontSize: 16,
        flex: 1,
        left: 110,
        top: 10,
    },
    Message: {
        width: "100%",
        height: 100,
        borderRadius: 12,
        backgroundColor: "rgba(0,0,0,0.2)",
        flex: 1,
        flexDirection: "row",
    },
    ProfileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        top: 15,
        left: 15,
        position: "absolute",
        backgroundColor: "white",
        flex: 1,
    },
    Content: {
        left: 100,
        top: 15,
    },
    ProfileName: {
        margin: 5,
        fontSize: 15,
        fontWeight: "800"
    },
    MessageText: {
        margin: 5,
        fontSize: 15,
        fontWeight: "400",
    },
});