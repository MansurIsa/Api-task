let content = document.querySelector('.content');


async function getData(){
    return fetch('https://api.publicapis.org/entries')
    .then(resp => resp.json())
    .then(data => {
        let allCategory = []
        
        const otherCategogies = data.entries.filter(x=> x.Category !== 'Government' && x.Category !== 'Animals' && x.Category !== 'Books' );
        const animalsCategory = data.entries.filter(x=> x.Category === 'Animals');
        const booksCategory = data.entries.filter(x=> x.Category === 'Books');
        const governmentCategory = data.entries.filter(x=> x.Category === 'Government');
        otherCategogies.forEach((category, i)=>{
            const categories = {
                animalApi: animalsCategory[i]?.API,
                animalDescription: animalsCategory[i]?.Description,
                animalURL: animalsCategory[i]?.Link,

                booksApi: booksCategory[i]?.API,
                booksDescription: booksCategory[i]?.Description,
                booksURL: booksCategory[i]?.Link,

                governmentApi: governmentCategory[i]?.API,
                governmentDescription: governmentCategory[i]?.Description,
                governmentURL: governmentCategory[i]?.Link,

                otherApi: category.API,
                otherDescription: category.Description,
                otherURL: category.Link,
            }
            allCategory.push(categories)
        })

        return allCategory;
    })
}

getData().then(data=>{
   
    for(let i = 0; i < data.length; i++){
        console.log(data[i].animalApi);
        
            
            content.innerHTML += `
            <tr>
            <td>
                <p>ADI: ${data[i].animalApi? data[i].animalApi: ''}</p>
                <p>IZAHI: ${data[i].animalDescription? data[i].animalDescription: ''}</p>
                <p>LINKI: <a href="${data[i].animalURL}">${data[i].animalURL? data[i].animalURL:''}</a></p>
            </td>
            <td>
                <p>ADI: ${data[i].booksApi? data[i].booksApi: ''}</p>
                <p>IZAHI: ${data[i].booksDescription? data[i].booksDescription: ''}</p>
                <p>LINKI: <a href="${data[i].booksURL}">${data[i].booksURL? data[i].booksURL: ''}</a></p>
            </td>
            <td>
                <p>ADI: ${data[i].governmentApi? data[i].governmentApi: ''}</p>
                <p>IZAHI: ${data[i].governmentDescription? data[i].governmentDescription: ''}</p>
                <p>LINKI: <a href="${data[i].governmentURL}">${data[i].governmentURL? data[i].governmentURL: ''}</a></p>
            </td>
            <td>
                <p>ADI: ${data[i].otherApi? data[i].otherApi: ''}</p>
                <p>IZAHI: ${data[i].otherDescription? data[i].otherDescription: ''}</p>
                <p>LINKI: <a href="${data[i].otherURL}">${data[i].otherURL? data[i].otherURL: ''}</a></p>
            </td>
        
           
        </tr>
        `
        
    }
        
        
    
    console.log(data)
})


 