
function randomizeImages()
{
    var brainImages = declareImagePool();
    var allImages = document.getElementsByClassName("shuffle");

    for(var i = 0; i < allImages.length ; i++) {
        var randomIndex = Math.floor(Math.random()*brainImages.length)
        allImages[i].src = brainImages[randomIndex];
    }
}

function getAllImages(folder){

}



function declareImagePool()
{
    var images = new Array();
    images.push("pictures/bird shit.png");
    images.push("pictures/losing it.png");
    images.push("pictures/ITS ALL WRONG.png");
    images.push("pictures/disappointment.png");
    images.push("pictures/brainstorm.png");
    images.push("pictures/I really have no clue.png");
    images.push("pictures/comfort.png");
    images.push("pictures/background2.png");
    images.push("pictures/screenshot3.png");
    images.push("pictures/Iwantpaintingofthis.png");
    images.push("pictures/weird.png");
    images.push("pictures/anxiety.png");
    images.push("pictures/identity.png");
    images.push("pictures/seal.png");
    images.push("pictures/depression.jpg");
    images.push("pictures/helphelphelp.jpg");
    images.push("pictures/cave.jpg");
    images.push("pictures/dog.jpg");
    images.push("pictures/love.jpg");
    images.push("pictures/nostalgia.jpg");
    images.push("pictures/abandonment.png");
    images.push("pictures/scwabble.png");
    images.push("pictures/job interview.png");
    
    return images;
}

window.onload = setInterval(randomizeImages,200);