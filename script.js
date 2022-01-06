//Heading
let heading = document.createElement('h1');
heading.classList.add("display-4", "p-2", "mb-5", "bg-dark", "text-white", "font-weight-bold", "text-center");
heading.innerText = "BREWERY"
document.body.append(heading);


//search and buttons
let div = document.createElement('div')
div.setAttribute('class', 'input-group')
div.setAttribute('id', 'searchitems')


let input = document.createElement('input')
input.setAttribute('type', 'search')
input.setAttribute('placeholder', 'Search Brewery')
input.setAttribute("id", "input")


let div2 = document.createElement('div')
div2.setAttribute('class', 'input-group-append')

let btn = document.createElement('button')
btn.addEventListener("click", search)
btn.setAttribute('type', 'button')
btn.classList.add('btn', 'btn-outline-dark')
btn.setAttribute('id', 'btn')
btn.innerHTML = "Search"

let homeBtn = document.createElement('button')
homeBtn.addEventListener("click", home)
homeBtn.setAttribute('type', 'button')
homeBtn.classList.add('btn', 'btn-outline-dark')
homeBtn.setAttribute('id', 'homebtn')
homeBtn.innerHTML = "Home"

div2.append(btn, homeBtn)
div.append(input, div2)
document.body.append(div)


//creating element 

let division = document.createElement('div');
division.setAttribute('class', 'container')
let anotherDivision = document.createElement('div');
anotherDivision.setAttribute('class', 'row');
anotherDivision.setAttribute('id', 'data');
division.append(anotherDivision);
document.body.append(division)


// async and await 
async function foo() {


    try {

        let myData = document.getElementById('data')

        let api = await fetch('https://api.openbrewerydb.org/breweries');

        let res = await api.json();

        console.log(res);

        myData.innerHTML = "";

        for (var i of res) {

            let emptyValue = `<p class="text-muted"> Data not available</p>`

            //address
            let address = emptyValue;
            if (i.street !== null) {
                address = i.street + ", ";
                if (i.address_2 !== null) {
                    address += i.address_2 + ", "
                }
                if (i.address_3 !== null) {
                    address += i.address_3 + ", "
                }
                if (i.city !== null) {
                    address += i.city + ", "
                }
                if (i.state !== null) {
                    address += i.state + ", "
                }
                if (i.country !== null) {
                    address += i.country + "."
                }
            }


            let website_url = ` <button type="button" class="btn btn-outline-secondary  "  disabled>  disabled </button>`;
            if (i.website_url !== null) {
                website_url = ` <button type="button" class="btn btn-outline-secondary ">  <a href=${i.website_url}> Click Me </a> </button>`
            }

            let phone = emptyValue;
            if (i.phone !== null) {
                phone = i.phone;
            }


            myData.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-4 ">
            <div class=" box-part">
            <h5 class="text-center mb-3 font-bolder hfont">${i.name}</h5>
            <p class="mb-2 pfont">Brewery type:<p class="text-center inside">${i.brewery_type}</p></p>
            <p class=" mb-2 pfont">Address:<p class="text-center inside">${address}</p></p>
            <p class="mb-2 pfont">Website:<p class="text-center inside">${website_url}</p> </p>
            <p class="mb-2 pfont">Phone:<p class="text-center inside">${phone}</p> </p>
            </div>
          </div>`


        }
    } catch (error) {
        alert("Something Error")
    }


}

foo();


// Function for search
function search() {



    let val = document.getElementById("input").value
    if (val == "" || null) {
        alert("Enter something in search box")

    } else {
        display(val)
    }
}

function home() {
    foo()
}



async function display(val) {


    try {

        let myData = document.getElementById('data')

        let api = await fetch('https://api.openbrewerydb.org/breweries/search?query=' + val);

        let res = await api.json();

        // console.log(res);

        myData.innerHTML = "";

        for (var i of res) {

            let emptyValue = `<p class="text-muted"> Data not available</p>`

            //address
            let address = emptyValue;
            if (i.street !== null) {
                address = i.street + ", ";
                if (i.address_2 !== null) {
                    address += i.address_2 + ", "
                }
                if (i.address_3 !== null) {
                    address += i.address_3 + ", "
                }
                if (i.city !== null) {
                    address += i.city + ", "
                }
                if (i.state !== null) {
                    address += i.state + ", "
                }
                if (i.country !== null) {
                    address += i.country + "."
                }
            }

            let website_url = ` <button type="button" class="btn btn-outline-secondary  "  disabled>  disabled </button>`;
            if (i.website_url !== null) {
                website_url = ` <button type="button" class="btn btn-outline-secondary ">  <a href=${i.website_url}> Click Me </a> </button>`
            }

            let phone = emptyValue;
            if (i.phone !== null) {
                phone = i.phone;
            }


            myData.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-4 ">
            <div class=" box-part">
            <h5 class="text-center mb-3 font-bolder hfont">${i.name}</h5>
            <p class="mb-2 pfont">Brewery type:<p class="text-center inside">${i.brewery_type}</p></p>
            <p class=" mb-2 pfont">Address:<p class="text-center inside">${address}</p></p>
            <p class="mb-2 pfont">Website:<p class="text-center inside">${website_url}</p> </p>
            <p class="mb-2 pfont">Phone:<p class="text-center inside">${phone}</p> </p>
            </div>
          </div>`

            val = ""
        }
    } catch (error) {
        alert("Something Error")
    }

}