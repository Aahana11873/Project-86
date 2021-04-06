
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";
function player_update() {
    fabric.Image.fromURL("player.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x

        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y, left: player_x

        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "87") {
        new_image("https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/14444203_qulege.jpg");
        console.log("w");
    }

    if (keyPressed == "71") {
        new_image("https://static3.srcdn.com/wordpress/wp-content/uploads/2020/11/Galactus-Fantastic-Four-Antithesis-World-Eater-cropped.jpg");
        console.log("g");
    }

    if (keyPressed == "76") {
        new_image("https://static.wikia.nocookie.net/x-men/images/2/23/Lady_Mastermind.png/revision/latest?cb=20100115162606");
        console.log("l");
    }
    if (keyPressed == "84") {
        new_image("https://static.wikia.nocookie.net/deadpool/images/9/92/T_Ray.jpg/revision/latest/top-crop/width/360/height/450?cb=20191005202532");
        console.log("t");
    }
    if (keyPressed == "82") {
        new_image("https://static.wikia.nocookie.net/marvelheroicrp/images/6/67/Ranark.jpg/revision/latest?cb=20130302190711");
        console.log("r");
    }
    if (keyPressed == "89") {
        new_image("https://static.wikia.nocookie.net/shingekinokyojin/images/4/43/Ymir_%28Anime%29_character_image.png/revision/latest?cb=20181009020525");
        console.log("y");
    }
    if (keyPressed == "68") {
        new_image("data:image/jpeg;base64,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");
        console.log("d");
    }
    if (keyPressed == "85") {
        new_image("https://static.wikia.nocookie.net/marveldatabase/images/8/85/Ultimaton_%28Earth-616%29_from_Giant-Size_X-Men_Storm_Vol_1_1_001.jpg/revision/latest?cb=20200917005554");
        console.log("u");
    }
    if (keyPressed == "67") {
        new_image("https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg");
        console.log("c");
    }
}


function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow key is pressed, X = " + player_x + "  Y= " + player_y);
        canvas.remove(player_object);
        player_update();

    }

}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed, X = " + player_x + "  Y= " + player_y);
        canvas.remove(player_object);
        player_update();

    }

}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left arrow key is pressed, X = " + player_x + "  Y= " + player_y);
        canvas.remove(player_object);
        player_update();

    }

}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow key is pressed, X = " + player_x + "  Y= " + player_y);
        canvas.remove(player_object);
        player_update();

    }

}