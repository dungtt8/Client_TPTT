import React, { Component } from 'react'
import { StyleSheet, Dimensions} from 'react-native'
import { pointX, pointY } from '../../../../Util/Constanst';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        width:'100%',
        height:80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
   },
   leftHeader:{
       flexDirection:'row',
       alignItems:'center'
   },
   headerAvatar:{
       width:60,
       height:60,
       borderRadius: 30,
       marginLeft: 10,
       justifyContent: 'flex-end',
       alignItems:'flex-end'
   },
   imgBGAvatar:{
       borderRadius:30,
       borderColor:'#fff',
       borderWidth: 0.5
   },
   textHeader:{
       fontFamily: 'Roboto',
       color:'#fff',
       fontSize: 16,
       margin:5
   },
   rankIcon:{
       width:30,
       height:30,
       marginRight: -10,
       marginBottom: -5,
   },
   scoreContainer:{
       height:30,
       backgroundColor: '#1A2146',
       borderColor:'#020824',
       borderRadius:3,
       borderWidth:1,
       flexDirection:'row',
       alignItems:'center',
       marginRight:10
   },
   scoreIcon:{
       width:23,
       height:20,
       margin:3,
       resizeMode:'center'
   },
   bodyContainer:{
       flex:1,
       width:'100%',
       alignItems: 'center',
       marginTop: 10,
   },
   infoHeader:{
       width:'100%',
       flexDirection:'row',
       justifyContent: 'space-between',
       marginTop:10
   },
   leftContainer:{
        flexDirection:'row',
        marginLeft:10,
        alignItems:'center'
   },
   rightContainer:{
       flexDirection:'row',
       marginRight:10,
       alignItems: 'center',
   },
   infoHeaderIcon:{
       width:30,
       height:30
   },
   titleScoreHeader:{
       color:'#fff',
   },
   score:{
       width:'100%',
       alignItems: 'flex-end',
   },
   textScore:{
       color:"#fff",
       marginRight:10,
       fontSize:16
   },
   countQuestion:{
       color:'#fff',
       fontWeight:'bold',
       fontSize:20
   },
   questionContainer:{
       width:width-40,
       height: height * 0.25,
       justifyContent: 'center',
       alignItems: 'center',
   },
   textQuestion:{
       color:'#FFF',
       fontSize:17,
       textAlign: 'center',
       width:"85%"
   },
   answerStyle:{
       width: 317 *pointX,
       height:61.24 * pointY,
       alignItems:'center',
       flexDirection:'row',
        marginTop:5,
   },
   ABCStyle:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#FF8000',
        marginHorizontal: 25 * pointX,
   },
   textAnswerContainer:{
        position:'absolute', 
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center'
   },
   textAnswer:{
       fontSize: 20,
       fontWeight:'bold',
       color:'#fff'
   },
   points:{
       color:'#fff',
       fontSize:20,
       fontWeight:'bold'
   },
   countDown:{
       marginBottom:20,
   },
   ModalGameOverContainer:{
        backgroundColor: '#fff',
        borderRadius:5,
        marginHorizontal: (width - 317 * pointX)/2,
        marginVertical: (height - 225 * pointY)/2 ,
        padding: 10,
        alignItems: 'center',
   },
   textTitleModalGO:{
       color: '#636363',
       fontSize:20
   },
   scoreDes:{
        fontSize: 18,
        color:'#636363'
   },
   scoreValue:{
        color:'#636363',
        fontSize: 30,
        fontWeight:'bold'
   },
   confirmBtn:{
       width:126 * pointX,
       height:39.15 * pointY,
       backgroundColor:'#FF9626',
       borderRadius:5,
       justifyContent: 'center',
       alignItems:'center'
   },
   textConfirmBtn:{
       color:'#fff',
       fontSize:16,
       fontWeight:'bold'
   }
})