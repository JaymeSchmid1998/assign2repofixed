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
import { AsyncStorage } from 'react-native';

class LoginScreen extends React.Component {
  state = { userName: " ", password: " ", currency: " " };
  constructor(props) {
    //1
    super(props);
    //2


    //3
    // this.handlechange = this.handlechange.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    //4:user  data 



    this.users = [
      { userName: "aaa", passhash: "abc" },
      { userName: "bb", passhash: "123" }
    ];

  }

  registerUser() {

    console.log(this.state.userName);
    console.log(this.state.password);
    console.log(this.state.currency);

    /*
    let newuser= this.state.userName;
    
    
    
        let newuser = {
          UserName1:this.state.userName,
          Password: this.state.password,
          Currency:this.state.currency,
       
          
        };
        AsyncStorage.setItem(newuser, JSON.stringify(UID123_object), () => {
          // AsyncStorage.mergeItem(newuser, JSON.stringify(UID123_delta), () => {
             AsyncStorage.getItem(newuser, (err, result) => {
               console.log(result);
             });
           });*/



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

    console.log(this.state.userName);
    console.log(this.state.password);
    console.log(this.state.currency);


    let newuser1 = this.state.userName;


    if (this.state.userName == null || this.state.user == "") {
      console.log('enter username');
    }
    else if (this.state.password == null || this.state.password == "") {
      console.log('enter password');
    }
    else {

      try {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log("username");
          console.log(result);
          if (this.state.userName == Retval.UserName1) {
            console.log("valid username")
            console.log(this.state.Password);
console.log(Retval.password);
            if (this.state.password == Retval.Password) {
              console.log("valid  password ");
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Main' })
                ],
              }))
            }
            else {
              console.log("invalid password");
            }
          }
          else {
            console.log("invalid username");
          }




        });
       


    
        
      }
      catch (e) {
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
  state = { userName: " ", password: " ", currency: '' }; constructor(props) {
    //1
    super(props);
    //2


    //3
    // this.handlechange = this.handlechange.bind(this);
    //this.validateUser = this.validateUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    //4:user  data 



    this.users = [
      { userName: "aaa", passhash: "abc" },
      { userName: "bb", passhash: "123" }
    ];

  }


  updatecurrency = (currency1) => {
    this.setState({ currency: currency1 })
  }

  registerUser() {

    console.log(this.state.userName);
    console.log(this.state.password);
    console.log(this.state.currency);


    let newuser1 = this.state.userName;


    if (this.state.userName == null || this.state.user == "") {
      console.log('enter username');
    }
    else if (this.state.password == null || this.state.password == "") {
      console.log('enter username');
    }
    else if (this.state.currency == null || this.state.currency == "") {
      console.log('enter username');
    }
    else {
      let newuser = {
        UserName1: this.state.userName,
        Password: this.state.password,
        Currency: this.state.currency,


      };
      AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
        //AsyncStorage.mergeItem(newuser, JSON.stringify(UID123_delta), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval.UserName1);
        });
      });

    }

  }



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register</Text>

        <Text>User Name:</Text>
        <TextInput placeholder="User Name" id="U1" onChangeText={(userName => { this.setState({ userName }); })} />

        <Text>Password:</Text>
        <TextInput placeholder="Password" id="P1" onChangeText={(password => { this.setState({ password }); })} />

        <Text>Location:</Text>
        <Picker

          style={{ height: 50, width: 100 }}
          selectedValue={this.state.currency} onValueChange={this.updatecurrency} >
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


        <Text> register </Text>

        <TouchableOpacity
          style={styles.ButtonStlye}
          onPress={this.registerUser.bind(this)}

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
