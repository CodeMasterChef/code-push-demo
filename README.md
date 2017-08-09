# code-push-demo
This is demo for CodePush with react native.

# Step 1: Install the CodePush CLI
`npm install -g code-push-cli`

# Step 2: Create a CodePush account
`code-push register`
# Step 3: Register your app with Mobile Center (https://mobile.azure.com)
If you did not created a app in Mobile Center, run bellow command to create new application in Mobile Center: 

`code-push app add MyApp android react-native`

or 

`code-push app add MyApp ios react-native'

If you had registed a application in Mobile Center, we need to enable CodePush feature on website: 

![text alt](https://raw.githubusercontent.com/gitvani/code-push-demo/master/images/code-push-01.png)

After that, we can check it with bellow command: 

`code-push app list`

![text alt](https://raw.githubusercontent.com/gitvani/code-push-demo/master/images/code-push-02.1.png)

# Step 4: Config Moble App
## 4.1: Find Staging & Production Deployment Key by bellow command: 

`code-push deployment list MyApp -k`

![text alt](https://raw.githubusercontent.com/gitvani/code-push-demo/master/images/code-push-03.png)

Tip: For simple, we should use only the Staging Deployment Key.

## 4.2: Install package for React Native project: 

`npm install --save react-native-code-push`

**Important**: We must choose correct version of code-push package with react native project. Example: We must install code-push package version 0.3+ for react native version 0.45: 

`npm install --save react-native-code-push@0.3.1-beta`

You can find the mapping in link : https://github.com/Microsoft/react-native-code-push#supported-react-native-platforms

After that, run `react-native link` to link react native project with android & ios platform.

#4.3: Config React Native project: 

See the `index.android.js`  to get the simplest code:  (https://github.com/gitvani/code-push-demo/blob/master/index.android.js)


```

....
 componentDidMount() {
    var updateDialogOptions = {
      updateTitle: "Update",
      optionalUpdateMessage: "New version of the app is available. Install?",
      optionalIgnoreButtonLabel: "Later",
      optionalInstallButtonLabel: "Yes",
    };

    codePush.sync({ updateDialog: updateDialogOptions });
  }
  ....
  
  const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

codepushdemo = codePush(codePushOptions)(codepushdemo);

AppRegistry.registerComponent('codepushdemo', () => codepushdemo);
  
```


## 4.3: Config Android app: 

There are many way to config. The hard way is follow this [guide](https://github.com/Microsoft/react-native-code-push#supported-react-native-platforms).

The simplest way which I found is copying the Staging Deloyment Key to `MainAplication.java`: 

```
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        ...
        new CodePush('wxdasdasdasdefdfdxvcdsdfadasd', this, BuildConfig.DEBUG), // Add/change this line.
        ...
    );
}
```
# 4.3: Config iOS app:
There are many way to config. The hard way is follow this [guide](https://github.com/Microsoft/react-native-code-push#supported-react-native-platforms) : You have to add Staging mode for Xcode.

The simplest way which I found is using Staging Deloyment Key for **Release** mode in XCode: 

- Name this new setting something like **CODEPUSH_KEY**, expand it, and specify your Staging deployment key for the Release config:

![text alt](https://raw.githubusercontent.com/gitvani/code-push-demo/master/images/code-push-04.png)





# Step 5: Release and update code on mobiles:
## 5.1: We use bellow command to upload current code to Mobile Center. After that it will update applcation on mobiles which are set with Staging Deployment Key: 

`code-push release-react MyApp android`          (Upload code for current app version)

Note: 
- We need to make sure that node server is runnning ( `react-native start` ) to run update current code. 
- The app version in mobiles must be same with code-push app version.

## 5.2: To update applcation on mobile which set Productuin Deployment Key, we need to move code from Staging to Production branch with:

`code-push promote MyApp Staging Production`

# More: 
Some useful command: 
http://cmichel.io/code-push-cheat-sheet/




