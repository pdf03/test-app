console.log("Hey");

const test = document.querySelector("test_app")

test.addEventListener ("click" , () => {
    document.querySelector("#result").textContent = Math.random();
})
