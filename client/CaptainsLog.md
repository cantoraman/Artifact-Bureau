## Captain's Log

(This is the captain's log)

My initial question was how would I split the containers between user interfaces.
Server Room would require one for themselves, HQ would require another. Also, when the instructors initiate (and load other questions into) this app, they would require a page to land... or begin

Another question arose: does node and react work together flawlessly... Google results say, they do... we'll see.

npm install react-leaflet
npm install leaflet react react-dom

## ToDo:
complete sat control by
+zoom to a location functionality
+reasonable depth... far. if possible
+scan functionality
  where the game functionality begins... think hard

## The Game:
Two teams facing different browser interfaces.
Team 1 has infiltrated the server room of a notorious criminal(x). They have limited access to his database where his latest targets are stored. Due to security systems that he placed, team 1 can only use a basic chat window to communicate with the outside world. But they need help to crack the code of the directories. There is one directory already open, and it has a clue inside. If we follow this clue, it will surely lead our team to another directory.
Team 2, on the other hand, is the headquarters. They have access to a search engine to help the Team 1 crack the code. Also, Team 2 has a satellite scan service at their disposal. With this, they can make a sweeping search across a limited geographical area.

[Lord Grimvale plans to disrupt world peace by inciting revolts with his armed men across the world. If he ever succeeds, he can ignite wars where he can reap their benefits by supplying weapons. Luckily, we know that he is a fan of history and whereabouts of his men are connected to some significant artefacts.]

A sample game follows like this:

Team 1 has 4 locked directories. Once clicked, these directories prompt for a password.

But also Team 1 has following files in an unlocked directory:
-The picture of a stone slab with hieroglyphs on it.
-A note saying:
The most valuable translation device of the history. With this, Egyptian hieroglyphs were deciphered. Some of our men are preparing for the final assault near the place that it was founded.

Team 1 passes the information in the files to Team 2 through chat interface.

Team 2 uses their search engine to figure out what the stone slab is and where it was founded. Once they figure out that the slab is The Rosetta Stone and it was founded at Rosetta, Egypt, they search for Rosetta on the map interface, then click anywhere on the map to open up "scanning marker", then they click on scan, which in return scans the area and finds the Lord's men.
A message appears to say: "One of the Lord's men confessed a password for us: ASD123ASD"

Team 2 gives this password to Team 1 and waits for the next challenge...

The Objectives, missed, but with a potential in the future
Team 1 could be describing a photo or a picture to Team 2 at any point. This could prove to be a good challenge.

## The story deemed to be too controversial for an educational app. Changing

scanForArtifact(){

  //get the list of artefacts from the props
  //get the longitute and latitude of marker from the constructor

  //for every artefact
    //get the coordinates of the artefact object
    //check if this is within the range of scan sensitivity value
    //if any is, return true

}

## New Story
A thief has stolen artefacts from the British Museum, and the students are tasked with finding this thief and the artefacts.
Luckily we have found his server room and we can track him by cracking his passwords on his travel folders.

ServerRoom:
The most valuable translation device of the history. With this, Egyptian hieroglyphs were deciphered. I am selling this just where it was found. [Picture of Rosetta Stone]
>>Rosetta

The buyer is very eager to lay his hands on this big chunk of crystal. We will make the trade in the ancient city where two continents meet.
[No picture]
>>Istanbul

[Picture of a horse head (Horse of Selene)] This one goes for the highest bidder at the meeting under the opera house. While we are there, I should not miss the Scubert concert.
>>Vienna

I couldn't sell the helm(Sutton Hoo) yet but it is safe under the shadow of Moais
>> Easter Island

The pieces(The Lewis Chessmen) were sold to the player living by the canal that connects the oceans.
>> Panama

## ToDo:
  map marker changes shape depending on the zoom level of the map


REACT HTML PARSER!

Install
npm install react-html-parser
# or
yarn add react-html-parser
Usage
import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class HtmlComponent extends React.Component {
  render() {
    const html = '<div>Example HTML string</div>';
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}



INSTALL REACT ROUTER
npm install react-router-dom@next

we may not have used this router... for now...


for socket io  - client and server side are installed separately
npm install --save socket.io




A better way to concatenate arrays
Array.concat is often used to concatenate an array to the end of an existing array. Without spread syntax this is done as:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
With spread syntax this becomes:

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];


4 10
50  200
25  100
Refactoring: The Map Marker
During the MVP phase I decided to settle with a single sized icon for the scanner marker. The issue was negligible. Irrespective of the zoom level of the map, the icon (which is a representation of the range of our satellite scanners) stayed the same size.
Here is a simple solution:

Zoom level starts at 4, hovering over Europe; and when somewhere is searched it brings the map to a closer level (10). At this level, the default icon size (100x100) is fitting. But if you zoom out, it start to look ugly.

The idea is have a 50x50 at zoom level 4, and 100x100 at 10th as extremes. In between, the icon will be sized linearly.
y = 8.33x+16.7 - x being the zoom level. Using this function in itself will not produce visually pleasing results and it has to be clamped. This is done by nesting a math.max in a math.min.

The solution is implemented like this:


The anchor is where the image is centered. It's origin is at the half point of each dimension.
