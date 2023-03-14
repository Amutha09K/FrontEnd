function whereAmI(lat,lng)
{
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=259568990831506251199x103913 `)
    .then(function(response){
        // console.log("response : ");
        // console.log(response);
        return response.json()
    })
    .then(function(data){
        // console.log("data:");
        // console.log(data);
        if(data.country!=undefined && data.city!=undefined){
            // console.log("---------------------------------------------")
            // console.log(`You are in ${data.city} , ${data.country}`)
        }
        else
        {
            throw new Error("Invalid Coordinates")
        }
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function(response){
        // console.log("----------------------------------------\n\nresponse : \n\n");
        // console.log(response);
        return response.json()
    })
    .then(function(data){
        console.log(data)
        render(data[0])
        // return data[0];
    })
    .catch((err)=>
    {
        console.log(err);
    })
}

whereAmI(52.508,13.381);
whereAmI(19.037,72.873);
whereAmI(-33.933, 18.474);

function render(data)
{
    console.log("********************************************************************************************")
    console.log(data)
    var hc= document.getElementById("wholeContainer")
    hc.innerHTML=`
    <div>
    <table>
        <tr>
            <td rowspan=6 id="flag">
                <h1>${data.flag}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1>Name</h1>
            </td>
            <td>
                <h1>:</h1>
            <td>
            <td>
                <h1>${data.name.common}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1>Capital</h1>
            </td>
            <td>
                <h1>:</h1>
            <td>
            <td>
                <h1>${data.capital}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1> Continent</h1>
            </td>
            <td>
                <h1>:</h1>
            <td>
            <td>
                <h1>${data.continents}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1> TimeZone</h1>
            </td>
            <td>
                <h1>:</h1>
            <td>
            <td>
                <h1>${data.timezones}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1> Population</h1>
            </td>
            <td>
                <h1>:</h1>
            <td>
            <td>
                <h1>${data.population}</h1>
            </td>
        </tr>
    </table>
    </div>`;
}