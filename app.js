
let url = "http://universities.hipolabs.com/search?name=";

const Btn1 = document.getElementById("btn");
Btn1.addEventListener("click", async() => {
    const Input = document.querySelector("input").value
    let Data = await GenrateCollege(Input)
    console.log(Data)
    show(Data)
})

async function GenrateCollege(name) {
    let res = await axios.get(url + name)
    return res.data

}

function show(Data) {
    for (const col of Data) {
        console.log(col.name)
    }
    
}