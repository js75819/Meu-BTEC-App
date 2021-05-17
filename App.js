
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api'
import Saldo from './src/saldo/index'

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      saldo: []
    }
  }

  async componentDidMount(){
    const response= await api.get('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xD890661EF4f88452265D36a290Fa09aC476C2020&address=0x7F1c55f116eeaA9b5Fe4c9dD7B8df93dB9338Fd1&tag=latest&apikey=RIDWPI57J2AWWNJCV66R1TQF2W45J7SP1W')
  this.setState({
    saldo: response.data
    
  })
  
  }

 

  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.saldo}
        keyExtractor={item => item.result.toString()}
        renderItem={ ({item}) => <Saldo data={item}/>}       
       />
      </View>
    )
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
