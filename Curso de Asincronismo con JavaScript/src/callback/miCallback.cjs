const API = "https://api.escuelajs.co/api/v1";
const XMLHTTPREQUEST = require("xmlhttprequest").XMLHttpRequest;

/*tiene extension cjs para decirle a JS que no es un archivo modulo */
function fetchData(urlAPI, callback) {
    let xmlhttp = new XMLHTTPREQUEST();
    xmlhttp.open("GET", urlAPI, true);

    xmlhttp.onreadystatechange = function (event) {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                //convierte datos a formato JSON
                callback(null, JSON.parse(xmlhttp.responseText));
            } else {
                const error = new Error("para mi es error 400, no jala");
                return callback(error, null); //hay error
            }
        }
    }
    xmlhttp.send();
}

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    console.log(data1[1].id);
})

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products`, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/products`, function(error3, data3) {
            if (error3) return console.error(error3);

            console.log(data1[0].title);
            console.log(data2[0].id);
            console.log(data3[0].price);
        });
    });
    
});