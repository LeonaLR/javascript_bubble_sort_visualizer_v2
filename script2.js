const container = document.querySelector("#container");

const n = 20;
let array = [];

// Generate a random array
function generateRandomArray() {
    array=[]
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
}



const initBtn = document.querySelector("#initButton");
const playBtn = document.querySelector("#playButton");

initBtn.addEventListener("click", ()=>{
    generateRandomArray() // generate a new random array
    draw(array) // draw bars with values of this array
})


playBtn.addEventListener("click", ()=>{
    sorting(0,0)
});

//sorting process with animation:
function sorting(i,j) {
    if (i<array.length){
        if (j<array.length-i-1){
            const bars = document.querySelectorAll(".bar")
            bars[j].style.backgroundColor = "red"
            bars[j+1].style.backgroundColor = "red"
            
            setTimeout(()=>{
                if (array[j] > array[j+1]){
                    swap(array, j , j+1)
                    draw(array)// Update the visual representation after swap
                }
                
                //reset colors after comparison:
                bars[j].style.backgroundColor = "black"
                bars[j+1].style.backgroundColor = "black"
                
                //move to the next pair of elements:
                sorting(i, j+1)
                
            }, 1000)
        }else{
            sorting(i+1,0)
        }
    }
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


//to draw bars based on the array values:
function draw(array) {
    container.innerHTML = "";//clear existing bars
    
    
    // Draw bars:
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%"; // Set height based on value
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}




