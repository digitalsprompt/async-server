// in es5
async function fetchData() {
    // aynchronous operation goes in here 
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await data.json()
    console.log(response)
}

// async in es6
const fetchData2 = async () => {
    // aynchronous operation goes in here 
}

const fetchAlbum = async () => {
    try {
        const data2 = await fetch("https://jsonplaceholder.typicode.com/albums")
        const result = await data2.json()
    console.log(result)
    } catch (error) {
        console.log(error)
    }
}


fetchData()
fetchAlbum()