const inputBox = document.querySelector("#inputName");
const btnSearch = document.querySelector("#btnSearch");
const div = document.querySelector("#shows");

const getShow = async () => {
   let showName = inputBox.value;
   const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
   return response.data.image.medium;
};

const displayShow = async () => {
    const show = await getShow();
    let showImg = document.createElement("img");
    showImg.src = show;
    div.append(showImg);
    setTimeout(() => {
        showImg.classList.add("motion");
    },10);
};

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    displayShow();
});

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        displayShow();
    }
});



