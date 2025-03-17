/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let res = [];
    let al = animals.map(animal => animal.toLowerCase());
    al.sort();

    for (let i = 0; i < al.length; i++) {
        let inserted = false;

        for (let j = 0; j < res.length; j++) {
            if (res[j][0][0] === al[i][0]) {
                res[j].push(al[i]);
                inserted = true;
                break;
                /*
                entah sir, saya gak tau biar bisa jadi 1 baris doang,
                dan tak di kasih clue juga sama sir
                */
            }
        }

        if (!inserted) {
            res.push([al[i]]);
        }
    }
    return res;
}


  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]