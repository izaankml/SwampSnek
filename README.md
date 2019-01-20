# SwampSnek
This is our submission to SwampHacks 2019. Its a Gesture-Based browser game that builds on a version of tron.

## What is SwampSnek?
SwampSnek is a motion controlled browser game that lets the user play a game of tron simply by moving their hand around on their webcam. No installation of any software is required nor even any active internet connection, all the user needs to do is load up the webpage and they are able to play to their heart's content.

# Backstory
Once upon a time, in a swamp in Gainsville, three young boy-os set out on a mission: To find the best space snek (snake) of them all. To do this, a game was invented, but this was no ordinary game. 

# How we built it
SwampSnek implements Tracking.js, a computer vision library that processes everything on the client sde rather than server-side like OpenCV allowing us to have computer vision on the web. We built the website using Javascript, HTML5, and CSS3 and created the Tron game in Javascript as well. We used Tracking.js to keep track of a certain color from the user's camera, with the user having the same color token to use as a "controller" and as they moved the token they could control the game. 

# Challenges we ran in to
The biggest challenge we ran into was deciding whether to process the computer vision on the front or backend. We started out processing the fingertip data on the backend using opencv4js, but ran into trouble with node and a few installation bugs. This was especially problematic because all of us were new to Javascript.

We then switched all the processing to the frontend using tracking.js. This also included switching from tracking fingertips to tracking colors. This enabled us to have a game directly running on the browser!

# Accomplishments that we are proud of
We're extremely happy that we actually built a really fun game. Initially, we had our doubts on how complete our game would be considering everyone's experience with JS, but we picked up JS faster than any of us expected. We started out just playing around with fingertip tracking and color tracking but ended up with a fully functional game.

Another thing we're really happy with is the lack of external requirements to play Swamp Snek. All you need is a modern browser (if that) and a webcam to become the best snake in the swamp.

# What we learned
This was the first major project in Javascript for all of us, so it was an interesting crash course for us that included a lot of google searching and frustrated sighs. But in the end, we're extremely happy with what we've learned and now are looking forward to completing future Javascript projects much faster.

# What's next for SwampSnek
We have many aspects that we want to build upon with this project. The first of which would be to further develop the detection system to recognize fingertips rather than color to improve accuracy and avoid confusion with other colors in the background. With this addition, we could make the game more accessible and with fewer complications in the environment.

# Built with
Javascript, HTML5, CSS3, Tracking.js
