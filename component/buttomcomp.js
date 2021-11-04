import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Frame = ({bikename, price, image}) => {
    return (
      <View style={styles.container}>
          <View style={styles.likeButton}>
            <AntDesign name="hearto" size={20} color="#ff792f" />
          </View>
            <Image source={image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.bikename}>{bikename}</Text>
            <Text style={styles.boldText}>
              <Text style={styles.amount}>$ </Text>
            {price}
            </Text>
        </View>
      </View>
    );
  };
  
  export default Bikeframe;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e6e6e6',
      flex: 1,
      borderRadius: 12,
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 12,

    },

    details: {
      marginTop: 10,
      alignItems: 'center',
    

    },

    bikename: {
      fontSize: 16,
      color: 'gray',

    },

    amount: {
      color: "#ff792f",

    },

    image: {
      marginTop:30,
      width: 180,
      height: 120,
      alignSelf: 'center',
      resizeMode: 'contain',

    },

    likeButton: {
      position: 'absolute',
      zIndex: 2,
      backgroundColor: '#fff',
      padding: 5,
      borderRadius: 50,
      top: 8,
      right: 9,

    },

    boldText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',

    },

  });