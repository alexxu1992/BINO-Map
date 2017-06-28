import React from 'react';
import { Button, NavigatorIOS, Text, View, StyleSheet, ScrollView} from 'react-native';
import randomWords from 'random-words';
var customData = require('../../sentence.json');

class MarkerContent extends React.Component{
  constructor(props, context){
    super(props, context)
  }

  _readSentence(){
    let dataArray = JSON.parse(customData).sentences;
    let ranInt = (Math.random()* dataArray.length)|0;
    let rawSentence = dataArray[ranInt];
    let sentence = rawSentence.replace(/\n/, " ");
    return sentence;
  }

  render(){
    let hemingwayPiece = this._readSentence();
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{hemingwayPiece}</Text>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    marginTop:200,
    width:200,
    fontSize:18,
    alignSelf:'center'
  }
})

export default MarkerContent;
