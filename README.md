# DINT
## Project Description
DINT: Do I Need This, is a web browser extension aimed to help online shoppers make better purchasing decisions. Whenever a user tries to purchase an item similar to what they purchased earlier, DINT notifies them about the repeat purchase and gives them an opportunity to reflect on whether they really need it. We also allow users to set a saving goal, monitor their progress towards that goal, view their purchase history, and filter notifications for certain products such as necessities. 

The next steps for development include:  
	• Support multiple browsers, e-commerce websites, and devices including mobile, tablets as well as voice-enabled  
	• Display the environmental impact of product purchases.  
	• Suggest eco-friendly product alternatives.  
	• Train ML models to efficiently detect impulsive buys and when to notify users  to save.  
	• Gamification to award users badges such as a Smart Saver, and Sustainability Champion, allowing them to share achievements on social media and refer friends.  

## Repo structure
ts  
-background  
---store 
-----reducers  
-----actions   
-scripts  
-components  
-contentScripts  

## Set up info: 
This codebase uses the Web Extension starter https://github.com/ymdevs/Web-Extension-Starter. Please see its README for more set up info.  

Requirement: [NodeJS](https://nodejs.org/en/) - Javascript runtime -- Use version 10  


### How to run:
#### In terminal or command prompt

```
install dependencies
 - npm install
Transpile the code
 - npm run dev (only transpiles the code)
 - npm run watch (transpiles and watches for code changes)


yarn commands will work too if yarn is installed.
```

#### In Chrome web browser
1. Go to: [**chrome://extensions**](chrome://extensions)
2. Toggle: "**developer mode**" on.
3. Click on: "**Load unpacked**"
4. Select the newly created folder "**dist**" from the project folder.
5. Thats it.

#### In Firefox web browser
1. Go to: [**about:debugging**](about:debugging)
2. Select: "**Enable add-on debugging**"
3. Click on: "**Load Temporary Add-on…**"
4. Open the newly created folder "**dist**" from the project folder, and choose the "**manifest.json**" file.
5. Thats it.

## License
MIT
