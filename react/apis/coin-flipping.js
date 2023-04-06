function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    return new Promise((resolve, reject) => {
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount >= 5) {
                resolve(`We did it in ${attempts} tries!`)
            } else if (attempts >= 100) {
                reject(`It was a failure with ${attempts} tries...`)
            }
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log( "When does this run now?" );