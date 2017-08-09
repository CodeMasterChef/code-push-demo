import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";

class codepushdemo extends Component {
  componentDidMount() {
    var updateDialogOptions = {
      updateTitle: "Update",
      optionalUpdateMessage: "New version of the app is available. Install?",
      optionalIgnoreButtonLabel: "Later",
      optionalInstallButtonLabel: "Yes",
    };

    codePush.sync({ updateDialog: updateDialogOptions });
  }
  render() {
    return (
      <View>
        <Text>
          Release note: you has been hacked!
        </Text>
      </View>

    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

codepushdemo = codePush(codePushOptions)(codepushdemo);

AppRegistry.registerComponent('codepushdemo', () => codepushdemo);
