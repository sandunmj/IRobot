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

const themeColor = '#4b0082';
const themeColor2 = '#ffffff';

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sw1: false,
      sw2: false,
      sw3: false,
      sw4: false,
    };
  }

  render() {
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
          <Text style={styles.errorText}>This is the text field for logs</Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log('FORWARD')}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>FORWARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log('BACKWARD')}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>BACKWARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log('LEFT')}
            underlayColor={themeColor}>
            <Text style={styles.touchText}>LEFT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log('RIGHT')}
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
