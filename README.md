# code-push-demo
This is demo for CodePush with react native.

# Step 1: Install the CodePush CLI
`npm install -g code-push-cli`

# Step 2: Create a CodePush account
`code-push register`
# Step 3: Register your app with Mobile Center
If you did not created a app in Mobile Center, run bellow command to create new application in Mobile Center: 

`code-push app add MyApp android react-native`

or 

`code-push app add MyApp ios react-native'

Some useful command: 
http://cmichel.io/code-push-cheat-sheet/

`code-push deployment list VaniCodePushDemo -k`

code-push release [appName] [updateContentsPath] [targetBinaryVersion]

example:

`code-push release-react VaniCodePushDemo android`

`code-push release VaniCodePushDemo android 1.2`





