var state = document.querySelector("h5");
var btn = document.querySelector("#add");

let flag = 0

btn.addEventListener("click", () => {
    if(flag == 0) {
        add();
        flag = 1;
    }
    else {
        remove();
        flag = 0;
    }
});

function add()  {
    state.innerHTML = "Friend";
    state.style.color = "green";
    btn.innerHTML = "Remove";
}

function remove()  {
    state.innerHTML = "Stranger";
    state.style.color = "red";
    btn.innerHTML = "Add Friend";
}
