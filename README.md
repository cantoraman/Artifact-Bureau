## Artifact Bureau

Artifact Bureau is an educational web app built with React that lets students play a treasure hunt on two browsers by doing research on matters like geography and culture.
One browser has the clues, the other one has the access to a data library and a satellite system to track the artifacts. Their only connection is through a chat screen.
The app implements WebSocket to establish chat, uses leaflet maps for satellite tracking, and makes basic API calls for Wikipedia to populate Data Library.

### Working Example:
https://artifact-bureau.herokuapp.com/

### To Run:
npm install
npm start on both client and server directories
visit http://localhost:3000/

### The Story:

A thief has stolen artifacts of tremendous value from the British Museum, and the students are tasked with finding the artifacts.
Luckily we have found the scoundrel's server room, and send the half of our students there to get the hiding places of the artifacts. But when we get there, we see a problem.

The locations of the artifacts are verbally encrypted; meaning, they are turned into riddles. Because of the security measures put in place at the server room, the students can only use a crude chat interface to communicate with their friends on the headquarters of the Artifact Bureau.

The headquarters has access to an old Data Library where they can search topics, and they have a satellite interface where they can scan the world map for artifacts if they have a clue regarding the whereabouts.

#### The Instructor's Setup:
An instructor has to divide the students into two groups and set them apart in two different computer labs (or any physical seperation where the students can only talk to each other through chat screens). Before the beginning the instructor has to set one of the browsers to "Server Room" and the other as "The Intelligence Office". To set the browser, simply visit the root (localhost:3000 or visit https://artifact-bureau.herokuapp.com/ ) where it prompts you with the screen arrangement, and click on the relevant link.

The next thing is to explain how the scan works:

##### Scan:
Once the students have an idea about the location of an artifact they need to follow this guide:
- Type in the name of the location to the search field of the map and hit the search
- Once the map zooms in to the location, click anywhere on the map to display the scanning icon
- Select the artifact from the list that you think that is hidden in this location
- Hit the Scan button

If the scan is a miss, you will see a message under the button saying "Scan Failed", otherwise it will say "Artifact Found" and replace the name of the artifact in the list as "Found".

##### Data Library:
While solving the riddles, the students are not allowed to use Google or *REAL* Wikipedia. Their only access to data is through Data Library.
The Data Library is a very old database where it only displays on green and black screen and makes case sensitive searches. The most important thing that the students need to know about the Library is that the search is really *CASE SENSITIVE*.

#### Example:
If the students are presented with a clue like "We hid the mask of the gods beneath the castle of Athens of the North", the headquarters can search for 'Athens of The North' in the Data Library to see that it refers to Edinburgh.
Then, searching Edinburgh in the map interface zooms to "Edinburgh, UK" where the students can click anywhere on the map to deploy an animated scan marker.
The scan button gets enabled when the students choose a specific artifact from the side. (This example assumes that we have an Olmec Stone Mask picture on the side - not to be confused by the helmet in the current state of the app).
After the students choose Stone Mask, the scan button gets enabled. By hitting "Scan", a scan is made and the artifacts list shows the artifact as "FOUND". When the students find all of the other artifacts, they will be greeted with a win screen.

#### Future Extensions:
It is possible to introduce new artifacts to the game by adding them to the JSON object in the MainTerminal.js

```
artifacts: [
  {
    name: "The Rosetta Stone",
    location: [31.404, 30.416],
    locationName: "Rosetta",
    lost: true,
    url: require('../helpers/Rosetta_Stone.JPG'),
    secretMessage: "The most valuable translation device of the history. With this, Egyptian hieroglyphs were deciphered. I am selling this just where it was found.",
    secretPicture: true
  } ...
```
One of the main ideas of separating the browsers was to let the students in the server room to describe the pictures they see rather than relying solely on the riddles. The riddles can be transformed to support this idea.
