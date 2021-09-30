let arms = document.querySelector('select').children[0].label;

fetch('https://wger.de/api/v2/exerciseinfo?limit=500')
.then(function(response) {
    return response.json();
})
.then(function(info) {
    console.log(info);
    for (let i = 0; i < info.length; i++) {
        console.log(arms);
        if (info.results[i].category.name === 'arms') {
            console.log(arms);
        }
    }
})




// --header 'Cookie: sessionid=b2jsdlnwb6qzgwhckhyyuunsp184q2n7' \
// --data-raw ''
// 10 abs
// 9 legs
// 13 shoulders
// 8 arms
// 11 chest
// 12 back
// 14 calves
// for loop
// then if reult.category.