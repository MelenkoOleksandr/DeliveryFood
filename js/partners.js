const renderItems = (data) => {
    data.forEach( element => {
        console.log(element)
    });
}

fetch('https://fooddelivery-2d4a7-default-rtdb.firebaseio.com/db/partners.json')
.then( (response) => response.json() )
.then( (data) => renderItems(data) )