async function askTaylor(event) {
    event.preventDefault()
    const formArea = document.getElementById("ask")

    if(formArea.value.trim() === ''){
        alert('Please ask Taylor a question!');
    }else{
    const container = document.querySelector("#replyContainer")
   const url = "https://taylorswiftapi.onrender.com/get"
//    const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    
    try{
        const response = await axios.get(url)
        container.innerHTML = `<div class="replyArea">
                <h3 class="mother">Mother says:</h3>
                <p id="reply">${response.data.quote}</p>
            </div>`
    
    }catch(error){
        container.innerHTML = `Sorry, the old Taylor can't come to the phone right now. Why? Because she's dead! And also ${error.message}`
        console.log(error)
    }
    }
}