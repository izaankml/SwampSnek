window.onload = function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var word1 = document.getElementById('word1')
    var word2 = document.getElementById('word2')

    video.style.cssText =
        "-moz-transform: scale(-1, 1); \
-webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); \
transform: scale(-1, 1); filter: FlipH;";

    var tracker = new tracking.ColorTracker(['cyan']);

    tracking.track('#video', tracker, { camera: true });

    tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
            if (rect.color === 'custom') {
                rect.color = tracker.customColor;
            }

            // context.strokeStyle = rect.color;
            context.strokeStyle = 'salmon';
            context.strokeRect(canvas.width - rect.x, rect.y,
                -rect.width,
                rect.height);
            context.font = '11px Helvetica';


            if (rect.x > canvas.width / 4 && rect.x < 3 *
                canvas.width /
                4) {
                if (rect.y < canvas.height / 4) {
                    word1.innerHTML = "Up";
                    lastKey = "up";
                } else if (rect.y > 3 * canvas.height / 4) {
                    word1.innerHTML = "Down";
                    lastKey = "down";
                }
            } else if (rect.y > canvas.height / 4 && rect.y <
                3 * canvas.height /
                4) {
                if (rect.x < canvas.width / 4) {
                    word1.innerHTML = "Right";
                    lastKey = "right";
                } else if (rect.x > 3 * canvas.width / 4) {
                    word1.innerHTML = "Left";
                    lastKey = "left";
                }
            }

            if (lastKey != inverseDirection()) {
                player.current_direction = lastKey;
            } else if (['start_game'].indexOf(lastKey) >= 0 &&
                game.over) {
                game.start();
            }


        });
    });

    initGUIControllers(tracker);
};
