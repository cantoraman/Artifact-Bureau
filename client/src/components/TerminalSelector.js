import React from 'react';
import { Link } from "react-router-dom";

const TerminalSelector = () => (


    <div className="terminal-selector">
      <div className="selection-promps">Please select the role of this terminal...</div>
      <p>___________________</p>
      <Link to ="/server-room">Server Room</Link>
      <p>OR</p>
      <Link to ="/intelligence-office">The Intelligence Office</Link>
      <p>___________________</p>
      <p>How To Play:</p>
      <p>The Story:</p>
      <p>
A thief has stolen artefacts from the British Museum, and the students are tasked with finding the artefacts. Luckily we have found the scoundrel's server room, and send the half of our students to get the hiding locations out of the servers. But when we get there, we see a problem.
</p><p>
The wherabouts of the artifacts are verbally encyrpted; meaning, they are turned into riddles. Because of the security measures put in place at the server room, the students can only use a crude chat interface to communicate with their friends on the headquarters of the Artifact Bureau.
</p><p>
The headquarters has access to an old Data Library where they can search topics, and they have a satellite interface where they can scan locations for artifacts.
</p><p>
The Instructor's Setup:
An instructor has to divide the students into two groups and set them apart in two different computer labs (or any physical seperation where the students can only talk to each other through chat screens). Before the beginning the instructor has to set one of the browsers to "Server Room" and the other as "The Intelligence Office". To set the browser, simply visit the root (port 3001/?) where it prompts you with the setup.
</p><p>
The next thing is to explain how the scan works:
</p>
<h4>Scan:</h4>
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
<h4>Data Library:</h4>
<p>
While solving the riddles, the students are not allowed to use Google or REAL Wikipedia. Their only access to data is through Data Library. The Data Library is a very old database where it only displays on green and black screen and makes case sensitive searches. The most important thing that the students need to know about the Library is that the search is really CASE SENSITIVE.
</p>
    </div>

);


export default TerminalSelector;
