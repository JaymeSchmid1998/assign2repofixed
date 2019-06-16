/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import { View, Text, TouchableOpacity, TextInput, Picker, Button, StyleSheet, style, br, ToastAndroid } from 'react-native';
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
    global.UserNameglobal = '';
    global.passwordglobal = '';
    global.currencyglobal = '';

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

    // console.log(this.state.userName);
    // console.log(this.state.password);
    // console.log(this.state.currency);




    try {

      if (this.state.userName == null || this.state.userName == "" || this.state.userName == " ") {
        console.log('enter username');
        ToastAndroid.show('please enter a username', ToastAndroid.SHORT);
      }

      else if (this.state.password == null || this.state.password == "" || this.state.password == " ") {
        console.log('enter password');
        ToastAndroid.show('please enter a password', ToastAndroid.SHORT);
      }
      else {
        try {
          let newuser1 = this.state.userName;
          AsyncStorage.getItem(newuser1, (err, result) => {
            let Retval = JSON.parse(result);
            console.log("username");
            console.log(result);
            if (this.state.userName == Retval.UserName1) {
              console.log("valid username")

              if (this.state.password == Retval.Password) {
                global.passwordglobal = Retval.Password;
                global.UserNameglobal = Retval.UserName1;
                global.currencyglobal = Retval.Currency;
                console.log(passwordglobal);
                console.log(UserNameglobal);
                console.log(currencyglobal);

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
                ToastAndroid.show('please enter valid password', ToastAndroid.SHORT);
              }
            }
            else {
              console.log("invalid username");
              ToastAndroid.show('please enter valid username', ToastAndroid.SHORT);
            }
          });
        }
        catch (e) {
          console.log(e);
        }
      }

    }
    catch (e) {
      console.log(e);
      console.log("username  is null");
    }


  }





  render() {
    return (


      <View style={styles.MainContiner}>

        <Text style={styles.Header}>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.InputBox}>
            <TextInput placeholder="User Name" id="U1" onChangeText={(userName) => this.setState({ userName })} />
          </View>
          <View style={styles.InputBox}>
            <TextInput placeholder="Password" id="P1" onChangeText={(password) => this.setState({ password })} />
          </View>

          <View style={styles.BtnSpacing}>
            <Button
              style={styles.ButtonStlye}
              onPress={this.validateUser.bind(this)}
              title="Login"
              color="#7a7c82"

            />
          </View>

          <Button
            color="#7a7c82"
            style={styles.ButtonStlye}
            title="Register"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Register' })
                ],
              }))
            }}
          />




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
    this.setState({ currency: currency1 });
  }

  registerUser() {

    console.log(this.state.userName);
    console.log(this.state.password);
    console.log(this.state.currency);


    let newuser1 = this.state.userName;


    if (this.state.userName == null || this.state.userName == " " || this.state.userName == "") {
      console.log('enter username');
      ToastAndroid.show('please enter a username', ToastAndroid.SHORT);
    }
    else if (this.state.password == null || this.state.password == " ") {
      console.log('enter username');
      ToastAndroid.show('please enter a password', ToastAndroid.SHORT);
    }
    else if (this.state.currency == null || this.state.currency == "") {
      console.log('enter username');
      ToastAndroid.show('please select a currency', ToastAndroid.SHORT);
    }
    else {
      let newuser = {
        UserName1: this.state.userName,
        Password: this.state.password,
        Currency: this.state.currency,
        NotificationFreq: "hourly",
        BtcWatch: { Watching: "no", WatchVal: 0, WatchType: "" },
        LtcWatch: { Watching: "no", WatchVal: 0, WatchType: "" },
        EthWatch: { Watching: "no", WatchVal: 0, WatchType: "" },



      };
      AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
        //AsyncStorage.mergeItem(newuser, JSON.stringify(UID123_delta), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval.UserName1);


          ToastAndroid.show('Registered succesfully', ToastAndroid.SHORT);







        });
      });

    }

  }



  render() {
    return (
      <View style={styles.MainContiner}>
        <Text style={styles.Header}>Register</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


          <Text>User Name:</Text>
          <View style={styles.InputBox}>
            <TextInput placeholder="User Name" id="U1" onChangeText={(userName => { this.setState({ userName }); })} />
          </View>
          <Text>Password:</Text>
          <View style={styles.InputBox}>
            <TextInput placeholder="Password" id="P1" onChangeText={(password => { this.setState({ password }); })} />
          </View>

          <Text>Currency Type:</Text>

          <Picker

            style={{ height: 50, width: 100 }}
            selectedValue={this.state.currency} onValueChange={this.updatecurrency} >
            <Picker.Item label=" " value="aud" />
            <Picker.Item label="aud" value="aud" />
            <Picker.Item label="euro" value="euro" />
            <Picker.Item label="usd" value="usd" />
          </Picker>



          <View style={styles.BtnSpacing}>
            <Button
              title="Register"
              color="#7a7c82"
              style={styles.ButtonStlye}
              onPress={this.registerUser.bind(this)}

            />
          </View>
          <View style={styles.BtnSpacing}>
            <Button
              title="Back to Login "
              color="#7a7c82"
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
        </View>
      </View>
    );
  }
}

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.MainContiner}>
        <Text style={styles.Header}>Trade managment app</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



          <View style={styles.BtnSpacing}>
            <Button
              title="crpyto market details "
              color="#7a7c82"
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'GeneralMarket' })
                  ],
                }))
              }}
            />
          </View>
          <View style={styles.BtnSpacing}>
            <Button
              title="watch crypto currencies "
              color="#7a7c82"
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'WatchMarket' })
                  ],
                }))
              }}
            />
          </View>
          <View style={styles.BtnSpacing}>
            <Button
              title="track youre investment"
              color="#7a7c82"
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
          <View style={styles.BtnSpacing}>
            <Button
              title="settings "
              color="#7a7c82"
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Settings' })
                  ],
                }))
              }}
            />
          </View>
          <View style={styles.BtnSpacing}>
            <Button
              title="Logout"
              color="#7a7c82"
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
        </View>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
 
  constructor(props) {
    super(props)
  
  }
  state = {currency: ' ', notFreq: ' ' };

  updatecurrency = (currency1) => {
    let statecurrency = currency1;
    console.log(statecurrency);
    this.setState({ currency: statecurrency }, function () {
      console.log("state currency");
     
      console.log(this.state.currency);
 });

    //console.log(this.state.userName);
     
     //console.log(this.state.currency);
    //  console.log("returned  currency");
    //console.log(currency1);

    let newuser1 = global.UserNameglobal;
    console.log(newuser1);
    let newuser = {

      Currency: currency1,


    };
    // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
    AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
      AsyncStorage.getItem(newuser1, (err, result) => {
        let Retval = JSON.parse(result);
        console.log("username");
        console.log(Retval.UserName1);
        console.log("currency");
        console.log(Retval.Currency);
        global.currencyglobal = Retval.currency;
        //  this.setState({ currency: Retval.Currency })
      });
    });



  }
  updateNotFreq = (Freq1) => {
    this.setState({ notFreq: Freq1 });

    //console.log(this.state.userName);
    // console.log(this.state.password);
    console.log(this.state.currency);
    console.log("notification freq state");
    console.log(this.state.notFreq);

    let newuser1 = global.UserNameglobal;

    let newuser = {

      NotificationFreq: Freq1,


    };
    //AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
    AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
      AsyncStorage.getItem(newuser1, (err, result) => {
        let Retval = JSON.parse(result);
        console.log(Retval.UserName1);
        console.log("notification freq");
        console.log(Retval.NotificationFreq);
        this.setState({ notFreq: Retval.NotificationFreq });
      });
    });



  }



  render() {
    return (
      <View style={styles.MainContiner}>
        <Text style={styles.Header}>Settings</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



          <Text>Location</Text>
          <Picker

            style={{ height: 50, width: 100 }}
            selectedValue={this.state.currency} onValueChange={this.updatecurrency} >
            <Picker.Item label=" " value="aud" />
            <Picker.Item label="aud" value="aud" />
            <Picker.Item label="euro" value="euro" />
            <Picker.Item label="usd" value="usd" />
          </Picker>



          <Text>notifications </Text>


          <Text>notification freqency</Text>
          <Picker

            style={{ height: 50, width: 100 }}
            selectedValue={this.state.notFreq} onValueChange={this.updateNotFreq} >
            <Picker.Item label=" " value="hourly" />
            <Picker.Item label="hourly" value="hourly" />
            <Picker.Item label="daily" value="daily" />
            <Picker.Item label="weekly" value="weekly" />
          </Picker>


          <Button
            title="Back to Main screen "
            color="#7a7c82"
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
      </View>
    );
  }
}
class GeneralScreen extends React.Component {

  state = { btcBuyPrice: 0, btcSellPrice: 0, ethBuyPrice: 0, ethSellPrice: 0, ltcBuyPrice: 0, ltcSellPrice: 0 };


  componentDidMount() {
    console.log(global.currencyglobal);
    //chooses the currency 
    if (global.currencyglobal == "euro") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });

    }
    else if (global.currencyglobal == "usd") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });



    }
    else if (global.currencyglobal == "aud") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });

    }

  }






  render() {
    return (

      <View style={styles.MainContiner}>
        <Text style={styles.Header}>General market screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


          <View style={styles.Tablebox}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy bitcoin cash price: </Text>
              <Text>{this.state.btcBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell bitcoin cash price: </Text>
              <Text>{this.state.btcBuyPrice}</Text>
            </View>
          </View>

          <View style={styles.Tablebox}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy lite coin  price: </Text>
              <Text>{this.state.ltcBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell lite coin price: </Text>
              <Text>{this.state.ltcSellPrice}</Text>
            </View>
          </View>

          <View style={styles.Tablebox}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy etherium price: </Text>
              <Text>{this.state.ethBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell etherium price: </Text>
              <Text>{this.state.ethSellPrice}</Text>
            </View>
          </View>
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
      </View>
    );
  }
}

class WatchMScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { btcBuyPrice: 0, btcSellPrice: 0, ethBuyPrice: 0, ethSellPrice: 0, ltcBuyPrice: 0, ltcSellPrice: 0,btcIsWatching:" " , btcButtonVal: "", btcWatchVal: 0, btcWatchType: "",ltcIsWatching:" " , ltcButtonVal: "", ltcWatchVal: 0, ltcWatchType: "",ethIsWatching:" " , ethButtonVal: "", ethWatchVal: 0, ethWatchType: "" };
  }







  componentDidMount() {
    console.log(global.currencyglobal);
    //chooses the currency 
    if (global.currencyglobal == "euro") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceEuro/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });

    }
    else if (global.currencyglobal == "usd") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceUsd/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });



    }
    else if (global.currencyglobal == "aud") {
      console.log("this is working");
      // calling the API
      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcBuyPrice: responseJson });
          this.setState({ btcBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethBuyPrice: responseJson });
          this.setState({ ethBuyPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptBuyPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcBuyPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcBuyPrice: responseJson });
          this.setState({ ltcBuyPrice: -1 });
        });


      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceBtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ btcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ btcSellPrice: responseJson });
          this.setState({ btcSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceEth')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ethSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ethSellPrice: responseJson });
          this.setState({ ethSellPrice: -1 });
        });

      fetch('http://10.0.0.98:3000/api/CrptSellPriceAud/GetPriceLtc')
        .then((Response) => Response.json())
        .then((responseJson) => {
          console.log("this is working");
          this.setState({ ltcSellPrice: responseJson });

        }).catch(e => {
          console.log("this is  not working");
          console.log(e);
          console.log({ ltcSellPrice: responseJson });
          this.setState({ ltcSellPrice: -1 });
        });

    }
    let newuser1=global.UserNameglobal;

     
     // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
      //  AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval.UserName1);
          console.log("returned storage value");
          console.log(Retval.BtcWatch.Watching);
          console.log(Retval.BtcWatch.WatchVal);
          console.log(Retval.BtcWatch.WatchType);
this.setState({btcIsWatching:Retval.BtcWatch.Watching}, function () {
  if(this.state.btcIsWatching=="yes"){

this.setState({btcButtonVal:"Unwatch "},function(){
console.log(this.state.btcButtonVal);
});
    
    
  }
 else  if(this.state.btcIsWatching=="no"){


  this.setState({btcButtonVal:"Watch "},function(){
    console.log(this.state.btcButtonVal);
    });



  }

});

this.setState({ltcIsWatching:Retval.LtcWatch.Watching}, function () {
  if(this.state.ltcIsWatching=="yes"){

this.setState({ltcButtonVal:"Unwatch "},function(){
console.log(this.state.ltcButtonVal);
});
    
    
  }
 else  if(this.state.ltcIsWatching=="no"){


  this.setState({ltcButtonVal:"Watch "},function(){
    console.log(this.state.ltcButtonVal);
    });



  }

});





this.setState({ethIsWatching:Retval.EthWatch.Watching}, function () {
  if(this.state.ethIsWatching=="yes"){

this.setState({ethButtonVal:"Unwatch "},function(){
console.log(this.state.ethButtonVal);
});
    
    
  }
 else  if(this.state.ethIsWatching=="no"){


  this.setState({ethButtonVal:"Watch "},function(){
    console.log(this.state.ethButtonVal);
    });



  }

});





this.setState({btcWatchVal:Retval.BtcWatch.WatchVal});
this.setState({btcWatchType:Retval.BtcWatch.WatchType});

this.setState({ltcWatchVal:Retval.LtcWatch.WatchVal});
this.setState({ltcWatchType:Retval.LtcWatch.WatchType});

this.setState({ethWatchVal:Retval.EthWatch.WatchVal});
this.setState({ethWatchType:Retval.EthWatch.WatchType});
//ToastAndroid.show('Registered succesfully', ToastAndroid.SHORT);







        });
     // });

  }





  btcWtUp = (btcwatchval) => {
    this.setState({ btcWatchType: btcwatchval }, function () {
      console.log(this.state.btcWatchVal);
      console.log(this.state.btcWatchType);
        });
    
  }
  ltcWtUp = (ltcwatchval) => {
    this.setState({ ltcWatchType: ltcwatchval }, function () {
      console.log(this.state.ltcWatchVal);
      console.log(this.state.ltcWatchType);
        });
    
  }
  EthWtUp = (ethwatchval) => {
    console.log(ethwatchval);
    this.setState({ ethWatchType: ethwatchval }, function () {
      console.log(this.state.ethWatchVal);
      console.log(this.state.ethWatchType);
        });
    
  }
  BtcUpdateWatch(){

    if(this.state.btcWatchVal==0||this.state.btcWatchVal==null||this.state.btcWatchVal==""||this.state.btcWatchVal==" "){
      ToastAndroid.show('please enter a Watch value', ToastAndroid.SHORT);
    }
    else if(this.state.btcWatchType==0||this.state.btcWatchType==null||this.state.btcWatchType==""||this.state.btcWatchType==" "){
      ToastAndroid.show('please enter watch type', ToastAndroid.SHORT);
    }
    else if (this.state.btcIsWatching=="no"){

let newuser1=global.UserNameglobal;

      let newuser = {
        
        BtcWatch: { Watching: "yes", WatchVal:this.state.btcWatchVal, WatchType:this.state.btcWatchType },
      


      };
     // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval.UserName1);
          console.log("returned storage value");
          console.log(Retval.BtcWatch.Watching);
          console.log(Retval.BtcWatch.WatchVal);
          console.log(Retval.BtcWatch.WatchType);
          ToastAndroid.show('Watched BTC', ToastAndroid.SHORT);







        });
      });


      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ],
      }))
      
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'WatchMarket' })
          ],
        }))
     







    }
    else if (this.state.btcIsWatching=="yes"){

      let newuser1=global.UserNameglobal;
      
            let newuser = {
              
              BtcWatch: { Watching: "no", WatchVal:0, WatchType:"" },
            
      
      
            };
           // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.getItem(newuser1, (err, result) => {
                let Retval = JSON.parse(result);
                console.log(Retval.UserName1);
                console.log("returned storage value");
                console.log(Retval.BtcWatch.Watching);
                console.log(Retval.BtcWatch.WatchVal);
                console.log(Retval.BtcWatch.WatchType);
                ToastAndroid.show('unwatched BTC', ToastAndroid.SHORT);
      
      
      
      
      
      
      
              });
            });
      
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
            
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'WatchMarket' })
                ],
              }))
           
      
      
      
      
      
      
      
      
          }





  }
  LtcUpdateWatch(){

    if(this.state.ltcWatchVal==0||this.state.ltcWatchVal==null||this.state.ltcWatchVal==""||this.state.ltcWatchVal==" "){
      ToastAndroid.show('please enter a Watch value', ToastAndroid.SHORT);
    }
    else if(this.state.ltcWatchType==0||this.state.ltcWatchType==null||this.state.ltcWatchType==""||this.state.ltcWatchType==" "){
      ToastAndroid.show('please enter watch type', ToastAndroid.SHORT);
    }
    else if (this.state.ltcIsWatching=="no"){

let newuser1=global.UserNameglobal;

      let newuser = {
        
        LtcWatch: { Watching: "yes", WatchVal:this.state.ltcWatchVal, WatchType:this.state.ltcWatchType },
      


      };
     // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval);
          console.log(Retval.UserName1);
          console.log("returned storage value");
          console.log(Retval.LtcWatch.Watching);
          console.log(Retval.LtcWatch.WatchVal);
          console.log(Retval.LtcWatch.WatchType);
          ToastAndroid.show('Watched BTC', ToastAndroid.SHORT);







        });
      });


      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ],
      }))
      
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'WatchMarket' })
          ],
        }))
     







    }
    else if (this.state.ltcIsWatching=="yes"){

      let newuser1=global.UserNameglobal;
      
            let newuser = {
              
              LtcWatch: { Watching: "no", WatchVal:0, WatchType:"" },
            
      
      
            };
           // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.getItem(newuser1, (err, result) => {
                let Retval = JSON.parse(result);
                console.log(Retval);
                console.log(Retval.UserName1);
                console.log("returned storage value");
                console.log(Retval.LtcWatch.Watching);
                console.log(Retval.LtcWatch.WatchVal);
                console.log(Retval.LtcWatch.WatchType);
                ToastAndroid.show('unwatched BTC', ToastAndroid.SHORT);
      
      
      
      
      
      
      
              });
            });
      
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
            
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'WatchMarket' })
                ],
              }))
           
      
      
      
      
      
      
      
      
          }





  }
  EthUpdateWatch(){

    if(this.state.ethWatchVal==0||this.state.ethWatchVal==null||this.state.ethWatchVal==""||this.state.ethWatchVal==" "){
      ToastAndroid.show('please enter a Watch value', ToastAndroid.SHORT);
    }
    else if(this.state.ethWatchType==0||this.state.ethWatchType==null||this.state.ethWatchType==""||this.state.ethWatchType==" "){
      ToastAndroid.show('please enter watch type', ToastAndroid.SHORT);
    }
    else if (this.state.ethIsWatching=="no"){

let newuser1=global.UserNameglobal;

      let newuser = {
        
        EthWatch: { Watching: "yes", WatchVal:this.state.ethWatchVal, WatchType:this.state.ethWatchType },
      


      };
     // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
        AsyncStorage.getItem(newuser1, (err, result) => {
          let Retval = JSON.parse(result);
          console.log(Retval.UserName1);
          console.log("returned storage value");
          console.log(Retval.EthWatch.Watching);
          console.log(Retval.EthWatch.WatchVal);
          console.log(Retval.EthWatch.WatchType);
          ToastAndroid.show('Watched BTC', ToastAndroid.SHORT);







        });
      });


      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ],
      }))
      
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'WatchMarket' })
          ],
        }))
     







    }
    else if (this.state.ethIsWatching=="yes"){

      let newuser1=global.UserNameglobal;
      
            let newuser = {
              
              EthWatch: { Watching: "no", WatchVal:0, WatchType:"" },
            
      
      
            };
           // AsyncStorage.setItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.mergeItem(newuser1, JSON.stringify(newuser), () => {
              AsyncStorage.getItem(newuser1, (err, result) => {
                let Retval = JSON.parse(result);
                console.log(Retval.UserName1);
                console.log("returned storage value");
                console.log(Retval.EthWatch.Watching);
                console.log(Retval.EthWatch.WatchVal);
                console.log(Retval.EthWatch.WatchType);
                ToastAndroid.show('unwatched BTC', ToastAndroid.SHORT);
      
      
      
      
      
      
      
              });
            });
      
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main' })
              ],
            }))
            
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'WatchMarket' })
                ],
              }))
           
      
      
      
      
      
      
      
      
          }





  }














  render() {
    return (


      <View style={styles.MainContiner}>
        <Text style={styles.Header}>Watch market Screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


          <View style={styles.TableboxWatch}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy bitcoin cash price: </Text>
              <Text>{this.state.btcBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell bitcoin cash price: </Text>
              <Text>{this.state.btcBuyPrice}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button
           
              onPress={this.BtcUpdateWatch.bind(this)}
              title={this.state.btcButtonVal}
              color="#7a7c82"

            />
            
              <Picker

                style={{ height: 50, width: 100 }}
                selectedValue={this.state.btcWatchType} onValueChange={this.btcWtUp} >
                <Picker.Item label=" " value="dep" />
                <Picker.Item label="dep" value="dep" />
                <Picker.Item label="apr" value="apr" />
              </Picker>

              
            </View>


            <View style={{ flex: 1, flexDirection: 'row' }}>
            
              <TextInput placeholder="watch value:" id="P1" onChangeText={(btcWatchVal => { this.setState({ btcWatchVal }); })} />
              

              <Text> {this.state.btcWatchVal}</Text>
            </View>






          </View>





          <View style={styles.TableboxWatch}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy lite coin  price: </Text>
              <Text>{this.state.ltcBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell lite coin price: </Text>
              <Text>{this.state.ltcSellPrice}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button
           
              onPress={this.LtcUpdateWatch.bind(this)}
              title={this.state.ltcButtonVal}
              color="#7a7c82"

            />
            
              <Picker

                style={{ height: 50, width: 100 }}
                selectedValue={this.state.ltcWatchType} onValueChange={this.ltcWtUp} >
                <Picker.Item label=" " value="dep" />
                <Picker.Item label="dep" value="dep" />
                <Picker.Item label="apr" value="apr" />
              </Picker>

              
            </View>


            <View style={{ flex: 1, flexDirection: 'row' }}>
            
              <TextInput placeholder="watch value:" id="P1" onChangeText={(ltcWatchVal => { this.setState({ ltcWatchVal }); })} />
              

              <Text> {this.state.ltcWatchVal}</Text>
            </View>








          </View>

          <View style={styles.TableboxWatch}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Buy etherium price: </Text>
              <Text>{this.state.ethBuyPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Sell etherium price: </Text>
              <Text>{this.state.ethSellPrice}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button
           
              onPress={this.EthUpdateWatch.bind(this)}
              title={this.state.ethButtonVal}
              color="#7a7c82"

            />
            
              <Picker

                style={{ height: 50, width: 100 }}
                selectedValue={this.state.ethWatchType} onValueChange={this.EthWtUp} >
                <Picker.Item label=" " value="dep" />
                <Picker.Item label="dep" value="dep" />
                <Picker.Item label="apr" value="apr" />
              </Picker>

              
            </View>


            <View style={{ flex: 1, flexDirection: 'row' }}>
            
              <TextInput placeholder="watch value:" id="P1" onChangeText={(ethWatchVal => { this.setState({ ethWatchVal }); })} />
              

              <Text> {this.state.ethWatchVal}</Text>
            </View>





          </View>
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
  InputBox: {
    margin: 20,
    backgroundColor: "#ffffff",
    width: 200,
    borderColor: "#7b7c7f",
    borderRadius: 4,
    borderWidth: 0.5,
    alignItems: "center",


  },
  ButtonStlye: {

    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    width: 200,
    height: 100,
    backgroundColor: '#505050',



  },
  BtnSpacing: {

    margin: 20,





  },
  Tablebox: {

    borderColor: "#000000",
    borderRadius: 4,
    borderWidth: 0.5,
    height: 100,
    width: 300,





  },
  TableboxWatch: {

    borderColor: "#000000",
    borderRadius: 4,
    borderWidth: 0.5,
    height: 150,
    width: 300,





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
