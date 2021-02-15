import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
// import  firebase from "../../config";
import firebase from 'firebase'
const LoginScreen = ({navigation, route}) => {

    console.log(route)

    const loginGoogle = async () => {
        try {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            console.log(result);
            navigation.navigate("Dashboard", user)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const loginFacebook = async () => {
        try {
            var provider = new firebase.auth.FacebookAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            console.log(result);
            });
        } catch (error) {
            console.log(error)
        }
    }


    // async function signInWithGoogleAsync() {
    //     try {
    //       const result = await Google.logInAsync({
    //         behavior: "web",
    //         androidClientId: "76154495033-8d182uobh6cohlkhggkjnhb9ktp2rr8u.apps.googleusercontent.com",
    //         webClientId: "76154495033-5q6looqfs338a09qc2s06spis6lmqesp.apps.googleusercontent.com",
    //         iosClientId: "76154495033-uf4ipvrb4c97tmhq8243414b6adabkm3.apps.googleusercontent.com",
    //         scopes: ['profile', 'email'],
    //       });
      
    //       if (result.type === 'success') {
    //         return result.accessToken;
    //       } else {
    //         return { cancelled: true };
    //       }
    //     } catch (e) {
    //       return { error: true };
    //     }
    // }

      
    return (
        <View style={styles.container}>
            <Button 
                title="Sign In With Goggle"
                onPress={() => loginGoogle()}
            />
            <Button 
                title="Sign In With Facebook"
                onPress={() => loginFacebook()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoginScreen;