
# PlantBot
A browser-based app for identifying flowers and plants from your hiking adventures.

### Overview
1. What does your application do?
    - The app will allow users to:
      - Upload a picture from their hike, which enables users to easily identify flowers and plants
      - See information specific to the plant identified like the growing season
      - Access database of past uploads with information on which trail the flower was spotted on
      - Users will log in through FB to take credit for the pictures being uploaded

2. Who worked on it?
    - Amanda Anderson, Andrew Porter, David Keller and Nathan Levis

3. What were you able to complete for this handin?
    - We were able to complete the following features
      - Pushing to Git deploys to Heroku after ensuring tests are passed

4. What are known problems, if any, with your project?
    - React is new to us
    - There are few functional APIs related to the subject
    - Our stretch goal of machine learning is a LONG stretch

5. How would you improve it if you had more time?
     - If we had more time we would have made the machine learning a bigger part of our project.

### Use Cases
#### Case 1
  - As a user, I should be able upload a picture, so that the flower or plant can be saved 
    - Send button and input areas are always on the screen and visible
    - When I click the send button, input area is cleared 
    - I am given a pop up saying that image is loading into the database
    - I told that my entry has been saved in my submission log
    - Others can find my photo in the search

#### Case 2
  - As a user, I should be able to view past uploads, so that I can see what flowers I have documented
    - I should be able to easily view my past uploads
    - I should be able to scroll through a list of my uploads
    - The list displayed should be easy to read and visually appealing
    - The history should be hidden until I choose to show it in detail
    - I should be able to see my entries by date

#### Case 3
  - As a user, I should be able to login via Facebook, so that I can identify myself and take credit for the photo I�m uploading
    - Login with Facebook button is present on page when I am logged out
    - Login button takes me to Facebook login OAuth flow
    - Profile picture is pulled from Facebook
    - Real name is pulled from Facebook
    - Real name and profile picture are next any picture I submit

#### Case 4  
  - As a user, I should be able to login so that i can see my PB homepage
    - I can use my Facebook login 
    - Real name and profile picture are next any picture I submit
    - Should be able to see what pictures i submitted
    - Should have access to account details
    - Should be able to see the date i joined the site 

#### Case 5
  - As a user, I should be able to click on the map button and see where others have seen flowers.
    - Click on map button 
    - Map loads up showing pins of flower pictures.
    - Pictures should be clickable to see more info.
    - Each pin looks the same but when clicked on shows a unique entry
    - When a pin is clicked on, the image and the user is shown

#### Case 6
  - As a non-user, I should not be able to interact website until I login using FaceBook, so that non-users cannot benefit from the service.
    - Should be prompted to login once the website loads.
    - Should not be able to progress past login screen. 
    - Should be prompted to allow facebook to interact with the website.
    - Should be able to see a weleome screen 
    - Should be able to see a paragraph explaining the site itself

#### Case 7 
  - As a user, I should be able to share my pictures to facebook so that others can see my picture
    - Should be able to see the share button
    - Should be an option once i submit my picture
    - Should get a confirmation message once it is uploaded
    - Should display location on facebook where the picture was taken
    - Should be no more than a two step process

#### Case 8
  -As a user, I should be able to edit old photos information so that i can correct information
    - Should be a button on the main page next to the picture
    - Should show that the image info was modified
    - User will need to be logged into facebook to do this
    - Should not be able to change upload date
    - The changes should be seen by all who look at the photo

#### Case 9 
  -  As a user, I should be able to logout of facebook so that on public computers i don’t have to worry about my privacy  
    - Should be able to do this by going through facebook button
    - Should not be able to still look at content from site
    - Should not be able to upload pictures 
    - Should be prompted to login without the username and password field already having info in them

#### Case 10 
  - As a user, I should be able to go to the database page and look up pictures based on type of flower so that i can look for areas where one kind of flower grows
    - Should be able to search based on flower type
    - Should be same search steps as with location 
    - The options for searching should be show this option on the database page
    - Should show flowers according to filter options 
    - Should be able to change the filter order options

### Mocks
#### Landing Page
![Landing Page](/docs/mocks/landing.png "Landing Page")

#### Home Page
![Home Page](/docs/mocks/home.png "Home Page")

#### Search Page
![Search Page](/docs/mocks/search.png "Search Page")


### Final Product

#### Login Process
![Starting Page](https://cloud.githubusercontent.com/assets/16908252/25688046/6f49b9f8-3030-11e7-817f-85948b743f35.png)
![Login For Facebook](https://cloud.githubusercontent.com/assets/16908252/25688044/6b08d04a-3030-11e7-84d8-bb9c37a6bd8f.png)
![Landing Page](https://cloud.githubusercontent.com/assets/16908252/25688045/6f355706-3030-11e7-9eaa-dcd54ac68ede.png)

#### Upload Image
![Upload Image](https://cloud.githubusercontent.com/assets/16908252/25688041/68754372-3030-11e7-9d8b-87e70ff77e43.png)

#### Search for an Image
