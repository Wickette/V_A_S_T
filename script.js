// Query Selectors for buttons and display value
let arms = document.querySelector('#arms');
let legs = document.querySelector('#legs');
let abs = document.querySelector('#abs');
let chest = document.querySelector('#chest');
let back = document.querySelector('#back');
let shoulders = document.querySelector('#shoulder');
let calves = document.querySelector('#calves');
let res1 = document.querySelector('#res1');
let res2 = document.querySelector('#res2');

// Event listeners for buttons
arms.addEventListener('click', function(){
    event.preventDefault();
    //pick random number to offset value(this will show different result everytime button is clicked)
    let num = Math.floor((Math.random()*100)+(Math.random()*10));
    // fetch url
    fetch(`https://wger.de/api/v2/exercise?limit=50&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        // sort through all reults
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 8) {
            // display results
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

legs.addEventListener('click', function(){
    event.preventDefault();
    let num = Math.floor((Math.random()*100)+(Math.random()*10));
    fetch(`https://wger.de/api/v2/exercise?limit=50&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        console.log(info);
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 9) {
            console.log(info.results[i].name);
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

abs.addEventListener('click', function(){
    event.preventDefault();
    let num = Math.floor((Math.random()*100)+(Math.random()*100));
    fetch(`https://wger.de/api/v2/exercise?limit=50&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        console.log(info);
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 10) {
            console.log(info.results[i].name);
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

chest.addEventListener('click', function(){
    event.preventDefault();
    let num = Math.floor((Math.random()*100)+(Math.random()*100));
    fetch(`https://wger.de/api/v2/exercise?limit=50&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        console.log(info);
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 11) {
            console.log(info.results[i].name);
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

back.addEventListener('click', function(){
    event.preventDefault();
    let num = Math.floor((Math.random()*100)+(Math.random()*100));
    fetch(`https://wger.de/api/v2/exercise?limit=50&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        console.log(info);
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 12) {
            console.log(info.results[i].name);
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

shoulders.addEventListener('click', function(){
    event.preventDefault();
    let num = Math.floor((Math.random()*100)+(Math.random()*100));
    fetch(`https://wger.de/api/v2/exercise?limit=70&offset=${num}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(info) {
        console.log(info);
        for (let i = 0; i < info.results.length; i++) {
        if (info.results[i].category == 13) {
            console.log(info.results[i].name);
            res1.textContent = info.results[i].name;
            res2.textContent = info.results[i].description;
        }
    }
})
})

