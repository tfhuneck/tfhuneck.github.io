var pos = 0;
    const pacArray = [
        ['./PacMan1.png', './PacMan2.png'],
        ['./PacMan3.png', './PacMan4.png']
    ];
    
    var mouth = 0;
    let pageWidth = window.innerWidth;
    const pacMen = [];

    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }
    // Factory to make a PacMan 
    function makePac() {
        // returns an object with values scaled {x: 33, y: 21}
        let velocity = setToRandom(15);
        let position = setToRandom(300);
        let direction = 0;
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.src = pacArray[0][0];
        newimg.width = 150;
        newimg.height = 150;
        newimg.style.left = position.x + 'px';
        newimg.style.top = position.y + 'px';
        game.appendChild(newimg);
        // new style of creating an object
        return {
            position,
            velocity,
            newimg,
            direction
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
            // let imgWidth = item.newimg.width;
            direction = item.direction;
            mouth = (mouth + 1) % 2;
            checkCollisions(item);
            // direction = checkCollisions(item);
            // direction = changeDirecton(item, direction, imgWidth, pageWidth, position);
            item.newimg.src = pacArray[direction][mouth];
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = item.position.x + 'px';
            item.newimg.style.top = item.position.y + 'px';
        })
        setTimeout(update, 100);
    }

    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth) {
            item.direction = 1;
            item.velocity.x = -item.velocity.x;
        }
        if (item.position.x + item.velocity.x < 0) {
            item.direction = 0;
            item.velocity.x = -item.velocity.x;
        } 
            
        if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
            item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
        
            return direction;    
    }

    // function changeDirecton(item, direction, imgWidth, pageWidth, position){
    //     if (direction == 0 && position + imgWidth > pageWidth) {
    //         direction = 1;
    //         }
    //       if (direction == 1 && position < 0) {
    //         direction = 0;
    //         }
    //       return direction;
    //     };


    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }