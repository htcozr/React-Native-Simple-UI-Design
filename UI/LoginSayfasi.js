import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const buton = '#5f6ba6';
const baslik= '#26253f';
const yazi='#948eab';
class Login extends React.Component{

    render(){

        return(

            <View style={{backgroundColor:yazi, flex:1}}>

                <Text style= {styles.girisText}>GİRİŞ YAPINIZ</Text>

                <TextInput
                style={styles.input}
                placeholder={'Emailinizi giriniz..'}
                secureTextEntry={this.props.secureTextEntry}
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholderTextColor={baslik}
                underlineColorAndroid={'transparent'}
                />                

                <TextInput
                style={styles.input}
                placeholder={'Şifrenizi giriniz..'}
                autoCompleteType= {'password'}
                secureTextEntry={true}
               // secureTextEntry={this.props.secureTextEntry}
               // autoCorrect={this.props.autoCorrect}
               // autoCapitalize={this.props.autoCapitalize}
               // returnKeyType={this.props.returnKeyType}
                placeholderTextColor={baslik}
                underlineColorAndroid={'transparent'}
                />                

                <TouchableOpacity 
                    style={styles.buttonContailer}
                >
                    <Text style={styles.buttonText}>GİRİŞ</Text>
                </TouchableOpacity>

            </View>

        )
    }

} 

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: width * 0.85,
      height:width*0.08,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: '#26253f',
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      padding:5,
      margin:5,

    },
    buttonContailer:{
        width:width* 0.85,
        height:width*0.08,
        padding:5,
        margin:5,
        borderRadius: 20,
        backgroundColor:buton,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
     },
    
     buttonText:{
        color:'white',
        fontWeight:'bold'
     },
     girisText:{
        color:baslik,
        fontWeight:'bold',
        fontSize:20,
        paddingLeft: width*0.10,
        marginTop: height * 0.25,
        paddingBottom: 5
      },
   
  });

export default Login;