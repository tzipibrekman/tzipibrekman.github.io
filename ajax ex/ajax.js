console.log('ajax-demo');
//let next = '';
document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {

    const urlLuke = 'https://swapi.dev/api/people/?search=Luke%20Skywalker';
    // const urlDarth = 'https://swapi.dev/api/people/?search=Darth%20Vader';
    const urlFilms = 'https://swapi.dev/api/films';
    getLuke(urlLuke);
    // getDarth(urlDarth);
    getfilms(urlFilms);
    //document.querySelector('#show-more').addEventListener('click', showMore);
}

function showResponseOnPage(response) {
    let luke = response.results;
    const nextUrlLuke = response.next;
    let lukeList = document.getElementById('Luke-list');

    // let darth = response.results;
    // const nextUrldarth = response.next;
    // let darthList = document.getElementById('Darth-list');

    let film = response.results;
    const nextUrlFilms = response.next;
    let filmsList = document.getElementById('films-list');
    luke.forEach(element => {

        let p = document.createElement('p');
        p.innerHTML = `${element.eye_color} ${element.height}`;
        lukeList.append(p);
    });

    // darth[0].films.forEach(element => {
    //     const request = new XMLHttpRequest();
    //     request.responseType = 'json'; //application/json
    //     request.addEventListener('readystatechange', () => {


    //         if (request.readyState === XMLHttpRequest.DONE) {
    //             console.log(request.response);
    //             //showResponseOnPage(request.response);
    //                 let ul = document.createElement('li');

    //             ul.innerHTML = `${element.title}`;

    //             darthList.append(li);
    //         }
    //     });
    //     request.open('GET', element);
    //     request.send();
    // });

    film.forEach(element => {
        if (element.director == 'George Lucas') {
            let li = document.createElement('li');
            li.innerHTML = `${element.title}`;
            filmsList.append(li);
        }


    });
    //next = nextUrl;
    if (nextUrlLuke) {
        getLuke(nextUrlLuke);
    }
    // if (nextUrldarth) {
    //     getDarth(nextUrldarth);
    // }
    if (nextUrlFilms) {
        getfilms(nextUrlFilms);
    }
}

function getLuke(urlLuke) {

    const request = new XMLHttpRequest();
    request.responseType = 'json'; //application/json
    request.addEventListener('readystatechange', () => {


        if (request.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage(request.response);
        }
    });
    request.open('GET', urlLuke);
    request.send();
}

// function getDarth(urlDarth) {

//     const request = new XMLHttpRequest();
//     request.responseType = 'json'; //application/json
//     request.addEventListener('readystatechange', () => {


//         if (request.readyState === XMLHttpRequest.DONE) {
//             showResponseOnPage(request.response);
//         }
//     });
//     request.open('GET', urlDarth);
//     request.send();
// }

function getfilms(urlFilms) {
    const reques = new XMLHttpRequest();
    reques.responseType = 'json'; //application/json
    reques.addEventListener('readystatechange', () => {
        if (reques.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage(reques.response);
        }
    });
    reques.open('GET', urlFilms);
    reques.send();
}
    //this is the same
    // request.onreadystatechange = () => {
    //     if (request.readyState === XMLHttpRequest.DONE) {
    //         showResponseOnPage(xhr.response);
    //     }
    // }




// function showMore() {
//     if (next) {
//         getPeople(next);
//     }
// }