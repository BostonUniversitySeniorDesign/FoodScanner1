# Food Scanner

## Application by Harleen Chaudhary and Zhe Tu

This is a user friendly application built with react-native over the course of 14 days which allows users to scan barcodes, take pictures, enter names of food items and get the nutrition facts. The app uses the FDA API to get the nutrition values of the food. 

The sprints for this project are under the projects section of this repository. 

## Login Screen

![foodsccanner](https://user-images.githubusercontent.com/46230582/133524284-843d974b-cc79-462b-85b2-5c7279d58446.jpeg)


This is the login page of the app, using gmail authentication to log in. The authentication is using Firebase for authentication and storing the data. 

## Home Page

<img width="261" alt="Screen Shot 2021-09-14 at 12 25 30 PM" src="https://user-images.githubusercontent.com/46230582/133524397-37aac2a9-04a6-4ba8-8421-6081ca6ca8b1.png">

Once logged in, the user is taken to the home page, where they have the option to either scan a food item or write a recipe. They can also view old recipes. All the recipes and food item scans are being stored in Firestore Database. 


## Scanner

![food4](https://user-images.githubusercontent.com/46230582/133693890-ad43e4ec-2e52-4902-9f45-b624c71ae9d6.jpeg) ![food5](https://user-images.githubusercontent.com/46230582/133694079-ed31d529-d30a-4b36-a4e0-dc581ba19cd2.jpeg)




This is the bar code scanner of the app, which uses a REST service interacting with the FDC API to return calories per serving of the food item. Tha calories per serving is user input and the default value is grams. 

## Recipes


This is the recipe page of the app, where the user has the option to view past recipes or write a new recipe. The data entered by the user is stored in Firebase's Cloud Firestore.


## Dependencies 


We used Google Firebase for all our storage, including user authentication and recipes. Here are some of our databases. 

![food3](https://user-images.githubusercontent.com/46230582/133693757-dd4b8a2f-c2f1-4274-aa4a-d61619e665aa.jpeg)




As mentioned earlier, we used the Food Data Central API: https://fdc.nal.usda.gov/api-guide.html and https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diabetes.org%2Fnutrition%2Fhealthy-food-choices-made-easy&psig=AOvVaw3kiGgs4_6plUz60Inz9xpc&ust=1631834336834000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC9juOOgvMCFQAAAAAdAAAAABAD as our background image for the login screen. 


