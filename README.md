
#PlantBot
A browser-based app for identifying flowers and plants from your hiking adventures.

###Overview
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
  - As a user, I should be able to login via Facebook, so that I can identify myself and take credit for the photo I’m uploading
    - Login with Facebook button is present on page when I am logged out
    - Login button takes me to Facebook login OAuth flow
    - Profile picture is pulled from Facebook
    - Real name is pulled from Facebook
    - Real name and profile picture are next any picture I submit

#### Case 4
  - As a user, I should be able to click on the map button and see where others have seen flowers.
    - Click on map button 
    - Map loads up showing pins of flower pictures.
    - Pictures should be clickable to see more info.

#### Case 5
  - As a non-user, I should not be able to interact website until I login using FaceBook, so that non-users cannot benefit from the service.
    - Should be prompted to login once the website loads.
    - Should not be able to progress past login screen. 
    - Should be prompted to allow facebook to interact with the website.

### Mocks
#### Landing Page
![Landing Page](/docs/mocks/landing.png "Landing Page")

#### Home Page
![Home Page](/docs/mocks/home.png "Home Page")

#### Search Page
![Search Page](/docs/mocks/search.png "Search Page")
