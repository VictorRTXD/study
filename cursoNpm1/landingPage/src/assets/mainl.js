const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCdl0EHWFJF510vA3LmpCM0w&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.querySelector("#content");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2e2eb93f1emsh9df3effc5f87d72p1b8d99jsnd3a921423f0e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlAPI) {
    try {
        const response = await fetch(urlAPI, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

//usaremos una funcion anonima que llame nuestro fetchData()
// (async () => {

// })();

(async () => {
    try {
        const videos = await fetchData(API);
        /*vamos a hacer un template, html que adaptaremos para iterar por cada elemento 
        de content para poder presentarlo en html */
        /*view es un template  */
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0, 9).join("") /*slice pone en pantalla elementos desde a hasta, y requiere .join("") para funcionar */}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
        globalThis.alert(`api no disponible o error: ${error}`)
    }
})();

const socialMediaSpace = document.querySelector(".mt-8");
const linkedIn = document.createElement("img");
const linkedInURL = document.createElement("a");
const contact = document.querySelector(".font-medium");

linkedIn.setAttribute("src", "https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png");
linkedInURL.setAttribute("href", "https://www.linkedin.com/in/victor-eduardo-macias-macias-661734260");

socialMediaSpace.appendChild(linkedInURL);
linkedInURL.appendChild(linkedIn);
linkedIn.setAttribute("class", "ld");