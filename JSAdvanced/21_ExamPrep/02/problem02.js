class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0,
        }
        // if (this.listOfParticipants.includes(name)) {
        //     return `The ${name} was successfully registered.`
        // }
        if (this.listOfParticipants.some(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        }

        if (Number(this.priceForTheCamp[condition] > Number(money))) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        // let indexOfParticipant = this.listOfParticipants.findIndex(p => p.name === name);
        // if (indexOfParticipant === - 1) {
        //     throw new Error(`The ${name} is not registered in the camp.`)
        // }
        // this.listOfParticipants.splice(indexOfParticipant, 1);

        if (!this.listOfParticipants.some(p => p.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.filter(p => p.name !== name);

        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let player1 = this.listOfParticipants.find(p => p.name === participant1);
        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === 'Battleship') {
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {

            let nameOfWinner = '';
            let player2 = this.listOfParticipants.find(p => p.name === participant2);

            if (!player2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins++;
                nameOfWinner = player1.name;

            } else if (player2.power > player1.power) {
                player2.wins++
                nameOfWinner = player2.name;

            } else {
                return `There is no winner.`
            }

            return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`
        }
    }

    toString() {

        let numberOfParticipants = this.listOfParticipants.length;
        let result = [];
        result.push(`${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`);

        this
            .listOfParticipants
            .sort((first, second) => second.wins - first.wins)
            .forEach(participant => result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`));

        return result.join('\n');

    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());