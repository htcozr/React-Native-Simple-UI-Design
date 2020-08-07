import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native';

const buton = '#5f6ba6';
const baslik= '#26253f';
const yazi='#948eab';

const { width, height } = Dimensions.get('window');
const logo = require('./ui.png');

class Giris extends React.Component{

  render(){

    return(

      <View style={styles.mainContainer}>

        <ImageBackground  
          source={logo}
          style={styles.backgroundImage}
        > 
            
        <View style={styles.topContainer}>
{/* üst kısım*/}
        </View>

{/* alt kısım*/}
         <View style={styles.bottomContainer}>
{/* yazı kısmı*/}
             <View style={styles.bottomTop}>
                 <Text style={styles.welcomeText}>
                   Hoş Geldiniz!!
                 </Text>

                 <Text style={styles.aciklamaText}>
                  Uyglamanın giriş sayfasına hoş geldiniz. {"\n"}Kaydolmak ya da giriş yapmak için ilerleyiniz. 
                 </Text>
             </View>

{/* buton kısmı*/}
             <View style={styles.bottomBottom}>
                  <TouchableOpacity 
                    style={styles.buttonContailer}
                    onPress={() => this.props.navigation.navigate('Login') }
                  >
                    <Text style={styles.buttonText}>GİRİŞ</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.buttonContailer}
                    onPress={() => this.props.navigation.navigate('Kaydol') }
                  >
                    <Text style={styles.buttonText}>KAYDOL</Text>
                </TouchableOpacity>
            </View>
        </View>
     

        </ImageBackground>

      </View>

    )
  }
}
 


const styles=StyleSheet.create({

  mainContainer:{
    flex:1,
   //borderWidth:1,
    //borderColor:'red'
  },

  topContainer:{
    flex:1,
    //borderWidth:2,
    //borderColor:'blue'
  },

  bottomContainer:{
    flex:1,
    //borderWidth:2,
    //borderColor:'green'
  },

  bottomTop:{
    flex:1,
    //padding: width*0.005,
    marginTop:width*0.05,
    //borderWidth:2,
    //borderColor: 'black'
  },

  bottomBottom:{
    flex:1,
   // borderWidth:2,
    //borderColor: 'black',
    justifyContent:'center',
    alignItems:'center'
  },

  backgroundImage: {
    width:'100%',
    height: '100%',
 },

 buttonContailer:{
    width:width*0.80,
    height:width*0.08,
    padding:5,
    margin:5,
    borderRadius:15,
    backgroundColor:buton,
    justifyContent:'center',
    alignItems:'center'
 },

 buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:width*0.035,
 },
 
 welcomeText:{
   color:baslik,
   fontWeight:'bold',
   fontSize:width*0.05,
   paddingLeft:width*0.12,
   paddingTop:width*0.15
 },

 aciklamaText:{
  color:yazi,
  fontSize:width*0.035,
  paddingTop:width*0.05,
  paddingLeft:width*0.12,
  //paddingTop:height*0.05
},

})

export default Giris;