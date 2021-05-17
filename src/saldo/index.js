import React, {Component} from 'react'
import {View, Text,StyleSheet} from 'react-native'

class Saldo extends Component{
render(){
    return (
        <View  style={styles.container}>
            <Text>{this.props.data.result}</Text>
        </View>
    )
}
}

export default Saldo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
  });
  