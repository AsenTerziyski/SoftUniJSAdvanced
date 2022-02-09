function cardFactory (face, suit) {

    if (face !== face.toUpperCase()) {
        
    }
    let card = {
        face,
        suit,
        toString () {
            console.log(this.face + this.suit);
        }
    }
    return card;
}