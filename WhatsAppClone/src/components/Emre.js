import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

function Emre () {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Block}>
                    <Text style={styles.MessageText}>Projeler nasıl gidiyor?</Text>
                    <Text style={styles.MessageTime}>11:22</Text>
                </View>
                <View style={styles.Block}>
                    <Text style={styles.MessageText}>Ne yapıyorsun</Text>
                    <Text style={styles.MessageTime}>11:22</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Block: {
        width: "65%",
        height: 60,
        backgroundColor: "gray",
        margin: 15,
        borderRadius: 10,
        flex: 1,
        flexDirection: "column",
    },
    MessageText: {
        fontSize: 18,
        left: 15,
        flex: 1,
    },
    MessageTime: {
        fontSize: 15,
        left: 210,
        flex: 1,
    },
});

export default Emre;