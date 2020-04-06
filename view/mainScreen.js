/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NetworkInfo} from 'react-native-network-info';
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Switch} from 'react-native';
// import {handleCommand} from '../API/apiRequests';
import {getGatewayIP} from '../WIFI/setupWIFI';

const themeColor = '#4b0082';
const themeColor2 = '#ffffff';

const sendCommand = async function(command) {
  await fetch(`http://${this.state.ip}:8080/getCommand?command=${command}`)
    .then(res => res.json())
    .then(res => this.setState({log: JSON.stringify(res)}));
};

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.sendCommand = sendCommand.bind(this);
    this.state = {
      sw1: false,
      sw2: false,
      sw3: false,
      sw4: false,
      ip: null,
      log: 'ready',
    };
  }

  componentDidMount() {
    getGatewayIP().then(ip => this.setState({ip: ip}));
  }

  render() {
    console.log(this.state.ip);
    return (
      <View style={styles.container}>
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>IRobot Controller</Text>
        </View>

        <View style={styles.videoView}>
          <Text style={styles.errorText}>
            This is the video streaming space
          </Text>
        </View>
        <View style={styles.textField}>
          <Text style={styles.errorText}>Robot IP: {this.state.ip}</Text>
          <Text style={styles.errorText}>{this.state.log}</Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              this.sendCommand('forward');
            }}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>FORWARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              this.sendCommand('backward');
            }}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>BACKWARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              this.sendCommand('left');
            }}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>LEFT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => this.sendCommand('right')}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>RIGHT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox2}>
          <Switch
            style={{marginTop: 30}}
            onValueChange={value => this.setState({sw1: value})}
            value={this.state.sw1}
          />
          <Switch
            style={{marginTop: 30}}
            onValueChange={value => this.setState({sw2: value})}
            value={this.state.sw2}
          />
          <Switch
            style={{marginTop: 30}}
            onValueChange={value => this.setState({sw3: value})}
            value={this.state.sw3}
          />
          <Switch
            style={{marginTop: 30}}
            onValueChange={value => this.setState({sw4: value})}
            value={this.state.sw4}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColor2,
    width: '100%',
    height: '100%',
  },
  headerTextBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColor2,
    width: '90%',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColor,
    fontSize: 30,
    width: '80%',
  },
  videoView: {
    flex: 5,
    borderColor: 'black',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
  },
  buttonBox: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColor2,
    padding: 10,
    width: '100%',
  },
  textField: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    height: '80%',
  },
  buttonBox2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: 10,
    width: '100%',
  },
  touchable: {
    width: '38%',
    aspectRatio: 3.5,
    borderRadius: 25,
    backgroundColor: themeColor,
    borderColor: themeColor,
  },
  touchText: {
    fontSize: 15,
    padding: 10,
    textAlign: 'center',
    color: themeColor2,
  },
  text: {
    textAlign: 'center',
    color: themeColor,
    fontSize: 20,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },
});
