async function ask() {
    const container = document.querySelector("#reply")
    const url = "https://taylorswiftapi.onrender.com/get"
    
    try{
        const response = await axios.get(url)
        container.innerHTML = response.quote
    }catch(error){
        container.innerHTML = `Sorry, the old Taylor can't come to the phone right now. Why? Because she's dead! And also ${error.message}`
        console.log(error)
    }

}