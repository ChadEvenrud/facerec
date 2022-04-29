const myList = ['chad', 'bree', 'magnolia', 'tanner', 'max', 'murphy']
const myObj = {
  city: "la mesa",
  state: "CA",
    people: ["chad", "bree", "magnolia", "tanner", "max", "murphy"],
    lastName: 'evenrud',
    addName : function () { 
        
    }
};



async function fetchUsers() {
    try {
        const response = await fetch(
            " https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = response.json();
        return json;
    } catch (error) {
        console.error(`Could not get users ${error}`);
    }
}

const jsonPromise = fetchUsers();
const users = jsonPromise.then((items) => items.map((item) => item.name));