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


# Step 5: Release and update code on mobiles:
## 5.1: We use bellow command to update current code to Mobile Center, after that it will update applcation on mobile which set Staging Deployment Key: 

- Upload code for current version: 

`code-push release-react MyApp android`

- Upload code for version  1.2: 

`code-push release VaniCodePushDemo android 1.2`

Note: We need to make sure that node server is runnning ( `react-native start` ) to run update current code. 

## 5.2: To update applcation on mobile which set Productuin Deployment Key, we need to move code from Staging to Production branch with:

`code-push promote MyApp Staging Production`

# More: 
Some useful command: 
http://cmichel.io/code-push-cheat-sheet/




