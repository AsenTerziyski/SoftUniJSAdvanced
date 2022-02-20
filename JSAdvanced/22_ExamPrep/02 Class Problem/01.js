class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInArray = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!")
        }

        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInArray = true;
            }
        }

        if (!isInArray) {
            quantity = Number(quantity)
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        // for (const g of this.guests) {
        //     if (g.guestName === guestName) {
        //         throw new Error(`${guestName} has already been invited.`)
        //     }
        // }

        if (this.guests.find(g => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let newGuest = { guestName, points: 0, purchaseArticle: 0 };
        switch (personality) {
            case 'Vip':
                newGuest.points = 500;
                break;
            case 'Middle':
                newGuest.points = 250
                break;
            default:
                newGuest.points = 50;
        }
        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        let article;
        let guest;
        let articleIsInTheArray = false;
        let one = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);


        if (!one) {
            throw new Error("This article is not found.")
        } else {
            article = this.listOfArticles.find(a => a.articleName === articleName);
            articleIsInTheArray = true;
        }

        // for (const el of this.listOfArticles) {
        //     if (el.articleName === articleName || el.articleModel === articleModel) {
        //         article = el;
        //         articleIsInTheArray = true
        //         break;
        //     }
        // }

        // if (!articleIsInTheArray) {
        //     throw new Error("This article is not found.")
        // }

        if (article.quantity === 0) {
            return `The ${articleName} is not available."`
        }

        let guestIsInTheArray = false;
        if (!this.guests.find(g => g.guestName === guestName)) {
            return 'This guest is not invited.'
        } else {
            guestIsInTheArray = true;
            guest = this.guests.find(g => g.guestName === guestName)
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article'
        } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria) {
        let output = '';
        switch (criteria) {
            case 'article':
                output = "Articles information:" + '\n';
                // this.listOfArticles.forEach(a => {
                //     output+=`${a.articleModel} - ${a.articleName} - ${a.quantity}` + '\n'
                // })
                for (let i = 0; i < this.listOfArticles.length; i++) {
                    let a = this.listOfArticles[i];
                    if (i===this.listOfArticles.length-1) {
                        output += `${a.articleModel} - ${a.articleName} - ${a.quantity}`;
                    } else {
                        output += `${a.articleModel} - ${a.articleName} - ${a.quantity}` + '\n';
                    }
                }
                break;
            case 'guest':
                output = "Guests information:" + "\n";
                for(let i = 0; i<this.guests.length; i++) {
                    let g = this.guests[i];
                    if (i===this.guests.length-1) {
                        output += `${g.guestName} - ${g.purchaseArticle}`;
                    } else {
                        output += `${g.guestName} - ${g.purchaseArticle}` + '\n'
                    }
                }
                break;
        }
        return output;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
