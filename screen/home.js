import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Frame from "../component/buttomcomp";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function home({navigation}){
    return (
        <View>

                <View style= {styles.TopView}>
                    <FontAwesome5 name="grip-lines" size={24} color="black" />
                        <View style={styles.bikeview}> 
                            <Fontisto name="bicycle" size={24} color="black" />
                        </View> 

                         <View style={styles.bellsearchview}>
                            <AntDesign name="search1" size={24} color="black" />
                                <View style={styles.bellview}>
                                    <Fontisto name="bell" size={24} color="black" /> 
                                </View>
                        </View>                       
                </View>

                <View style={styles.TopNav}>
                        <Text style={styles.TitleText}>The World's </Text>
                        <Text style={styles.BestBike}>Best Bikes</Text>
                </View>

                <View>
                    <Text style={styles.Catview}>Categories</Text>
                </View>

            <View>
                <FlatList
                    data={categories}
                    renderItem={({item}) => {
                        return <Category name={item.name} />;
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View>
            
                <FlatList
                    data={BikeFrames}
                    renderItem={({item}) => {
                        return (
                            <Frame
                                bikename={item.bikename}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal={false}
                    numColumns={2}
                />
            </View>

            <View style = {styles.hometab}>
                <TouchableOpacity style = {styles.homebutton}>
                    <AntDesign name="home" size={35} color="#ff792f" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.MicButton}>
                <Ionicons name="mic-circle-sharp" size={75} color="black" />            
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("cart")}} style={styles.bagbutton}>
                <Feather name="shopping-bag" size={35} color="black" />
                </TouchableOpacity>

            </View>  

        
        
        </View>
    );
}
const categories = [

    {id: '1a', name: 'All'},
    {id: '2', name: 'Roadbike'},
    {id: '3', name: 'Mountain'},
    {id: '4', name: 'Urban'},
  ];
  
  const Category = ({name}) => {
    return (
      <View style={styles.categorytab}>
        <Text style={styles.categoryText}>{name}</Text>
      </View>
    );
   
  };

  const BikeFrames = [

    {
      id: '1',
      bikename: 'Velar Bike',
      price: '1,700.00',
      image: require('../assets/velar.png'), 
    },

    {
      id: '2',
      bikename: 'Urus Bike',
      price: '1,500.00',
      image: require('../assets/urus.png'),
    },
    
    {
      id: '3',
      bikename: 'Titan Bike',
      price: '1,200.00',
      image: require('../assets/titan.png'),
    },
    
    {
      id: '4',
      bikename: 'Giza Bike',
      price: '3,300.00',
      image: require('../assets/giza.png'),
    },
    
  ];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  
    },

    TitleText:{
        fontSize:20,
        marginTop:4,
        marginLeft:20,
        color:"gray",

    },

    BestBike:{
        fontSize:25,
        fontWeight:"bold",
        color:"#ff792f",
    },

    TopNav:{
        marginTop:25,
        flexDirection:"row",
    },

    TopView:{
        flexDirection:"row",
        marginTop:60,
        marginLeft:22,
    },

    bikeview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:143,
    },

    bellsearchview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:100,
    },

    bellview:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:18,
    },

    Catview:{
        fontSize:22,
        marginTop:30,
        marginLeft:20,
        fontWeight:"bold",
    },

    categorytab: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#e6e6e6",
        marginHorizontal: 5,
        marginVertical: 15,
        borderRadius: 12,
        marginTop: 25,

      },
      categoryText: {
        fontSize: 20,
        color: 'gray',

      },

     
      hometab: {
        backgroundColor:"#e6e6e6",
        marginTop:45,
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


      

});
