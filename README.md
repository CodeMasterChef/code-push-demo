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

![text alt](https://raw.githubusercontent.com/gitvani/code-push-demo/master/images/code-push-02.png)


Some useful command: 
http://cmichel.io/code-push-cheat-sheet/

`code-push deployment list VaniCodePushDemo -k`

code-push release [appName] [updateContentsPath] [targetBinaryVersion]

example:

`code-push release-react VaniCodePushDemo android`

`code-push release VaniCodePushDemo android 1.2`





