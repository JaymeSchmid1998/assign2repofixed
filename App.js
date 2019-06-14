/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import { View, Text, TouchableOpacity, TextInput, Picker, Button, StyleSheet, style, br } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component {

  constructor(props) {
    //1
    super(props);
    //2
    state = { userName: " ", password: " " };

    //3
    this.handlechange = this.handlechange.bind(this);
    this.validateUser = this.validateUser.bind(this);
    //4:user  data 



    this.users = [
      { userName: "aaa", passhash: "abc" },
      { userName: "bb", passhash: "123" }
    ];

  }

  //on change listener 
  handlechange(value) {

    //this.setState({"userName":value});


    /* if(e.target.id==="U1"){
       this.setState({"userName":""});
     }
     else if(e.target.id==="P1"){
       this.setState({"password":e.target.value});
     }*/
  }

  validateUser() {

    /*fetch("http://tiny.cc/y7qd7y",{mode:'no-cors'})
    /.then(red =>resizeBy.json())
    .then(
      (result)=>{
        console.log(result);
      },
      
    )*/
   // console.log(this.state.userName);
    //console.log(this.state.password);
    try{
if(Object.keys(this.state.userName).length==0) {
console.log("username is blank "); 
}
else  if(Object.keys(this.state.password).length==0) {
  console.log("password  is blank "); 
  }

else if( this.state.userName=="A1"){
console.log("valid username")
if(this.state.password=="A2"){
console.log("valid  password ");
this.props.navigation.dispatch(StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ],
}))
}
else{
  console.log( "invalid password");
}
}
else{
console.log("invalid username");
}
    }
    catch(e){
      console.log(e); 
    }



    /*



    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ],
    }))


    if ("a" === this.setState.userName) {

    }*/


    /*
     console.log("xxxx",this.state.userName);
    
    
    let isuservalid= false; 
    this.users.forEach(users =>{
    
    
    if(users.userName===this.setState.userName&& users.passhash===this.state.password){
      isuservalid= true;
      console.log("user is valid ");
    
    }
    els
    */



  }





  render() {
    return (
      <View style={styles.MainContiner}>
        <Text style={styles.Header}>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TextInput placeholder="User Name" id="U1" onChangeText={(userName) => this.setState({ userName })} />

          <TextInput placeholder="Password" id="P1" onChangeText={(password) => this.setState({ password })} />
          <Text> Login </Text>

          <TouchableOpacity
            style={styles.ButtonStlye}
            onPress={this.validateUser.bind(this)}

          /> 

          <TouchableOpacity

            style={styles.ButtonStlye}
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Register' })
                ],
              }))
            }}
          /><Text > go to register </Text> 



          
        </View>
      </View>
    );
  }
}
class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register</Text>

        <Text>User Name:</Text>
        <TextInput placeholder="User Name" id="U1" onChangeText={(userName => { this.setState({userName}); })} />

        <Text>Password:</Text>
        <TextInput placeholder="Password" id="P1" onChangeText={(password => { this.setState({password}); })} />

        <Text>Location:</Text>
        <Picker
          //selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="aud" value="aud" />
          <Picker.Item label="euro" value="euro" />
          <Picker.Item label="usd" value="usd" />
        </Picker>


        <Button
          title="Back to Login "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
        <Button
          title="Register "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Trade managment app</Text>
        <Button
          title="crpyto market details "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'GeneralMarket' })
              ],
            }))
          }}
        />
        <Button
          title="watch crypto currencies "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'WatchMarket' })
              ],
            }))
          }}
        />
        <Button
          title="track youre investment"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'InvTrack' })
              ],
            }))
          }}
        />
        <Button
          title="settings "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Settings' })
              ],
            }))
          }}
        />
        <Button
          title="Back to Login "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>


        <Text>Location</Text>
        <Picker
          //selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="aud" value="aud" />
          <Picker.Item label="euro" value="euro" />
          <Picker.Item label="usd" value="usd" />
        </Picker>



        <Text>notifications </Text>


        <Text>notification freqency</Text>
        <Picker
          //selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="aud" value="aud" />
          <Picker.Item label="euro" value="euro" />
          <Picker.Item label="usd" value="usd" />
        </Picker>


        <Button
          title="Back to Login "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
class GeneralScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>General market screen</Text>
        <Button
          title="Back to main menu "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
class WatchMScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Watch market Screen</Text>
        <Button
          title="Back to  main menu "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
class TrackScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Track youre investment Screen</Text>
        <Button
          title="Back to Main menu "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
          }}
        />
        <Button
          title="add investment "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'AddInv' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
class InvAddScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Investment Screen</Text>




        <Text>currency type</Text>

        <Picker
          //selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="aud" value="aud" />
          <Picker.Item label="euro" value="euro" />
          <Picker.Item label="usd" value="usd" />
        </Picker>

        <Text>ammount of coins </Text>
        <TextInput placeholder="Password" id="P1" onChangeText={(password) => this.setState({ password })} />

        <Text>purchase price</Text>
        <TextInput placeholder="Password" id="P1" onChangeText={(password) => this.setState({ password })} />

        <Text>notifications </Text>








        <Button
          title="Back to Main menu "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'InvTrack' })
              ],
            }))
          }}
        />


        <Button
          title="add investment "
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'InvTrack' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Main: {
    screen: MainScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  GeneralMarket: {
    screen: GeneralScreen,
  },
  WatchMarket: {
    screen: WatchMScreen,
  },
  InvTrack: {
    screen: TrackScreen,
  },
  AddInv: {
    screen: InvAddScreen,
  },
}, {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  MainContiner: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5dc',
    height: 300,


  },
  ButtonStlye: {

    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    width: 200,
    height: 100,
    backgroundColor: '#505050',



  },



  Header: {

    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#565652',
    backgroundColor: '#f5f5dc',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
