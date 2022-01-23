function constructionCrew(inputWorker) {

    if (inputWorker.dizziness) {
        inputWorker.levelOfHydrated += 0.1 * inputWorker.experience * inputWorker.weight;
        inputWorker.dizziness = false;
    }

    return inputWorker;
}

// constructionCrew(
//     {
//         weight: 80,
//         experience: 1,
//         levelOfHydrated: 0,
//         dizziness: true
//     }
// );

console.log(
    constructionCrew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    })
);