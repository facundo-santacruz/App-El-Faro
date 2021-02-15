import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from "../../config";

const Dashboard =  ({navigation, route}) => {
    //  const db = firebase.firestore();
    //  db.collection('users').get()
    // .then(doc => console.log(doc))
    // .catch(err => console.log(err))

    const img =firebase.storage()
    console.log(img.ref('menu empanada.jpg'))
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
