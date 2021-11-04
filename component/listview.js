import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Bike({bikename, price, type, image}){
    return(
        <View style={styles.container}>
            <View >
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.columnlist}>
                <Text style={styles.Name}>{bikename}</Text>
                <Text style={styles.Biketype}>{type}</Text>
                <Text>
                    <Text style={styles.amount}>$ </Text>
                    <Text style={styles.price}>{price}</Text>
                </Text>            
            </View>

            

            <View style={styles.quantity}>
                <MaterialCommunityIcons name="minus-circle" size={30} color="black" style={styles.minusicon} />
                <Text style={styles.num1}>1 </Text>
                <Ionicons name="add-circle" size={30} color= "#ff792f" style={styles.plusicon} />

            </View>

            <View style={styles.columnlist2}>
                <Ionicons name="md-trash-outline" size={23} color="#ff792f" style={styles.binicon}/>
            </View>

            
        </View>
    );   
    
}

const styles = StyleSheet.create({

   container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:-100,
      },

      image: {
        marginTop:30,
        marginLeft:100,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor:"#e6e6e6",
        borderRadius:15,
        
        borderEndColor:"#f3f6f4",
  
      },

    columnlist:{
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop:20,
    },

    columnlist2:{
        justifyContent: "space-around",
        marginLeft: -65,
        marginTop:30,
    },

    Name:{
        fontSize:15,
        fontWeight:"600",
    },

    title: {
        fontSize: 16,
        color: 'black',
      },

    Biketype: {
        fontSize: 14,
        color: 'gray',
      },

    amount: {
        color: "#ff792f",
        fontWeight:"bold",
      },

    price: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
      },

    binicon: {
        padding: 3,
        marginTop:-60,
        alignSelf: 'flex-end',
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1,
      },

    quantity: {
        
        flexDirection:"row",
        alignSelf: 'flex-end',
        marginBottom:10,
        marginLeft:-5,
      },  

    minusicon:{
        marginRight: 7,
        marginTop:1,
    },

    num1:{
        fontSize:18,
        marginTop:5,
        marginLeft:-1,
    },

    
    plusicon:{
        marginLeft:2,
        
    },
});