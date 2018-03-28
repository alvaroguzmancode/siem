import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {



  state={
    usuairo:'',
    password:''
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>LoginScreen</Text>

          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{width:'100%'}}>
              <TextInput 
                style={{width:'85%'}}
                label='Usuario'
                value={this.state.text}
                onChangeText={text => this.setState({ ususario:text })}
              />
            </View>

            <TextInput 
              style={{width:'85%'}}
              label='Password'
              value={this.state.password}
              onChangeText={text => this.setState({ password:text })}
            />

            <Button raised onPress={() => console.log('presionado')}>
              Hola mundo
            </Button>
          </View>

          

        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
