import React from 'react';
import { Link } from "react-router-dom";

const TerminalSelector = () => (


    <div className="terminal-selector">
      <div className="selection-promps">Please select the role of this terminal...</div>
      <p>___________________</p>
      <Link className="terminal-link" to ="/server-room">Server Room</Link>
      <p>OR</p>
      <Link className="terminal-link" to ="/intelligence-office">The Intelligence Office</Link>
      <p>___________________</p>
      <p className="terminal-header">How To Play:</p>
      <p className="terminal-header">The Story:</p>
      <p>
A thief has stolen artifacts of tremendous value from the British Museum, and the students are tasked with finding the artifacts.</p>
<p>Luckily we have found the scoundrel's server room, and send the half of our students there to get the hiding places of the artifacts. But when we get there, we see a problem.
</p><p>
The locations of the artifacts are verbally encyrpted; meaning, they are turned into riddles. Because of the security measures put in place at the server room, the students can only use a crude chat interface to communicate with their friends on the headquarters of the Artifact Bureau.
</p><p>
The headquarters has access to an old Data Library where they can search topics, and they have a satellite interface where they can scan the world map for artifacts if they have a clue regarding the whereabouts.</p>
<p>For Example:</p><p>If the students are presented with a clue like "We hid the mask of the gods beneath the castle of Athens of the North", the headquarters can search for 'Athens of The North' in the data library to see that it refers to Edinburgh. Furthermore, searching Edinburgh in the map interface zooms to Edinburgh, UK. If the students click on anywhere on the map when it is close to Edinburgh, an animated scan marker is deployed. The scan button gets enabled when the students choose a specific artifact from the side. (This example assumes that we have an Olmec Stone Mask picture on the side - not to be confused by the helmet in the app). If the students choose Stone Mask, the scan button gets enabled. By hitting this button, the search is made and the artifacts list shows the artifact as "FOUND". When the students find all of the artifacts, they will be greeted with a win screen.</p>
<p className="terminal-header">
The Instructor's Setup:</p><p>
An instructor has to divide the students into two groups and set them apart in two different computer labs (or any physical seperation where the students can only talk to each other through chat screens). Before the beginning the instructor has to set one of the browsers to "Server Room" and the other as "The Intelligence Office". To set the browser, simply visit the root (localhost:3000 or visit https://artifact-bureau.herokuapp.com/ ) where it prompts you with the screen arrangement, and click on the relevant link.
</p><p>
The next thing is to explain how the scan works:
</p>
<h4 className="terminal-header">Scan:</h4>
<p>
  Once the students have an idea about the location of an artifact they need to follow this guide:
</p><p>
<li>Type in the name of the location to the search field of the map and hit the search</li>
<li>Once the map zooms in to the location, click anywhere on the map to display the scanning icon</li>
<li>Select the artifact from the list that you think that is hidden in this location</li>
<li>Hit the Scan button</li>
</p>
<p>
If the scan is a miss, you will see a message under the button saying "Scan Failed", otherwise it will say "Artifact Found" and replace the name of the artifact in the list as "Found".
</p>
<h4 className="terminal-header">Data Library:</h4>
<p>
While solving the riddles, the students are not allowed to use Google or REAL Wikipedia. Their only access to data is through Data Library. The Data Library is a very old database where it only displays on green and black screen and makes case sensitive searches. The most important thing that the students need to know about the Library is that the search is really CASE SENSITIVE.
</p>
    </div>

);


export default TerminalSelector;
