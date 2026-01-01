console.log("Hey");

const test = document.querySelector("test_app")

test.addEventListener ("click" , () => {
    document.querySelector("#result").textContent = Math.floor(
        getTest(1,100)
    )
});

function getTest(min,max) {
    return Math.random = (max - min) + min;
}