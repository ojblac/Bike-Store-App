import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BikeT from "../component/listview";


export default function cart({navigation}){
    return(
        <View>
            <View style={styles.topnav}>
                <TouchableOpacity onPress={() => {navigation.navigate("home")}}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                    <Text style={styles.cartText}>Cart list</Text>
            </View>
                    <Text style={styles.title2}>(3 items)</Text>

            <View style={styles.bikess}>
                <FlatList
                    data={Bicycles}
                    renderItem={({item}) => {
                        return (
                            <BikeT
                                bikename={item.bikename}
                                price={item.price}
                                type={item.type}
                                image={item.image}
                            />
                        );
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                />
            </View>

            <View style={styles.cost}>
                <View style={styles.subtotal}>
                    <Text style={styles.look}>Subtotal</Text>
                    <Text style={styles.dollar}>       $</Text>
                    <Text style={styles.money}> 64,180.00</Text>
                </View>

                <View style = {styles.shipfee}>
                    <Text style={styles.look}>Shipping fee</Text>
                    <Text style={styles.dollar}> $</Text>
                    <Text style={styles.money}>  1,000.00</Text>
                </View>

                <View>
                    <Text>........................................................................................</Text>
                </View>

                <View style={styles.total}>
                    <Text style={styles.money}>Total</Text>
                    <Text style={styles.dollar}>             $</Text>
                    <Text style={styles.money}> 3,300.00</Text>
                </View>
            </View>        

            <View style={styles.checkoutView}>
                <TouchableOpacity style ={styles.checkoutbutton}>
                    <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.hometab}>
                <TouchableOpacity onPress={() => {navigation.navigate("home")}} style = {styles.homebutton}>
                    <AntDesign name="home" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.MicButton}>
                <Ionicons name="mic-circle-sharp" size={75} color="black" />            
                </TouchableOpacity>
                <TouchableOpacity style={styles.bagbutton}>
                <Feather name="shopping-bag" size={35} color="#ff792f" />
                </TouchableOpacity>

            </View>  
            
            


        </View>
    );
}

const Bicycles = [

    {
        id: '1',
        bikename: 'Velar Bike',
        type: "Urban",
        price: '1,700.00',
        image: require('../assets/velar.png'), 
      },
  
      {
        id: '2',
        bikename: 'Urus Bike',
        type: "Urban",
        price: '1,500.00',
        image: require('../assets/urus.png'),
      },
      
      {
        id: '3',
        bikename: 'Titan Bike',
        type: "Urban",
        price: '1,200.00',
        image: require('../assets/titan.png'),
      },

   
    ];
  



const styles = StyleSheet.create({

    topnav:{
        flexDirection:"row",
        marginTop:50,
        marginLeft:15,
    },

    cartText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:120,
    },

    title2:{
        fontSize:17,
        marginLeft:168,
        marginTop:-8,
        color:"gray",
    },

    checkoutView:{
        
    },
    checkoutbutton:{
        marginTop:3,
        margin:"8%",
        backgroundColor:"#ff792f",
        borderRadius:15,
        padding:20,
        
    },

    checkoutText:{
        color:"white",
        textAlign:"center",
        fontSize: 20,
        fontWeight:"bold",
    },

    hometab: {
        backgroundColor:"#e6e6e6",
        marginTop:20,
        flexDirection: "row",
        paddingBottom:50,
        paddingTop:15,

      },

      homebutton: {
        marginLeft: 70,
        
      },

      MicButton: {
        marginLeft: 70,
        marginTop: -55,
        
      },   

      bagbutton: {
        left: 70,
      },

      bikess:{
        margin:"5%",
        marginTop:5,
      },

      cost:{
        marginTop:10,  
        backgroundColor:"#e6e6e6",
        margin:"7%",
        borderRadius:30,
        
      },

      subtotal:{
        flexDirection:"row",
        marginLeft:30,
        marginTop:30,
      },

      shipfee:{
        flexDirection:"row",
        marginLeft:30,
        marginTop:20,
      },

      total:{
          flexDirection:"row",
          marginTop:30,
          marginBottom:25,
          marginLeft:30,
        
      },

      dollar:{
          fontSize:12,
          fontWeight:"bold",
          color:"#ff792f",
          marginTop:-10,
          marginLeft:115,
      },

      money:{
          fontSize:18,
          fontWeight:"bold",
          marginTop:-15,
      },

      look:{
          fontSize: 17,
          color:"gray",
          marginTop:-15,
          
      }

});