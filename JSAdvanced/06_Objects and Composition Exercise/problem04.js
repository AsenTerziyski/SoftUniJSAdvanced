function heroicInvertory(input) {
    // 1. Първи начин:
    // let result = [];
    // for (const iterator of input) {
    //     let [name, level, items] = iterator.split(' / ');
    //     level = Number(level);
    //     items = items ? items.split(', ') : [];
    //     result.push({name, level, items})
    // }
    // console.log(JSON.stringify(result));

    // 2. Втори начин:
    let inputArray = input.slice();
    let resultArrayOfHeroes = [];

    for (let i = 0; i < inputArray.length; i++) {

        let current = inputArray[i].split(' / ');

        let currentHeroName = current[0];
        let currentLevel = Number(current[1]);
        let resultHero = {};

        resultHero.name = currentHeroName;
        resultHero.level = currentLevel;

        let currentItems = [];
        if (current.length > 2) {
                currentItems = current[2].split(', ');
        }
        resultHero.items = currentItems;
        resultArrayOfHeroes.push(resultHero);
    }

    console.log(JSON.stringify(resultArrayOfHeroes));
}

heroicInvertory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'ZZZZ / 100',
    ]
);