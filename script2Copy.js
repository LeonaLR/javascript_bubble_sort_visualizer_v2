// Random array generation:
const n = 10;
let array = [];
let sortingActive = false; // Flag to track if sorting is active
const initBtn = document.querySelector(".init");
const container = document.querySelector(".container");
const playBtn = document.querySelector(".play");

function generateArray() {
    array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
}

function draw(array) {
    container.innerHTML = ""; // Clear previous bars

    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 100 + "%";
        container.appendChild(bar);
    }
}

initBtn.addEventListener("click", init);

function init() {
    // Stop any ongoing sorting process
    sortingActive = false;

    generateArray();
    draw(array);
}

playBtn.addEventListener("click", () => {
    // Start sorting only if it's not already active
    if (!sortingActive) {
        sortingActive = true; // Set flag to indicate sorting has started
        sorting(0, 0);
    }
});

function sorting(i, j) {
    if (i < array.length) {
        if (j < array.length - i - 1) {
            // Highlight 2 bars:
            const bars = document.querySelectorAll(".bar");
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            setTimeout(() => {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                    draw(array);
                }

                // Recover colors to black after comparison:
                bars[j].style.backgroundColor = "black";
                bars[j + 1].style.backgroundColor = "black";

                // Move to the next pair of elements:
                sorting(i, j + 1);
            }, 1000);
        } else {
            // Reach the end for one loop -> start the next pass:
            sorting(i + 1, 0);
        }
    } else {
        // Sorting completed
        sortingActive = false; // Reset flag when done
    }
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}















