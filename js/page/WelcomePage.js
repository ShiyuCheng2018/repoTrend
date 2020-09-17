import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            // to homepage
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
