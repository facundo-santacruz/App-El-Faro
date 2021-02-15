import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from "firebase";

const Dashboard = ({navigation, route}) => {

    console.log(route.params)
    const logout = () => {
        firebase.auth().signOut()
        navigation.navigate("Dashboard")
    }

    return (
        <View>
            <Button onPress={logout} title="Log Out"></Button>
        </View>
    )
}

export default Dashboard
