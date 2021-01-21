$('#search-form').on('submit', handleSubmit);
console.log()
const getSearchTerm = () => $('#query').value;

function handleSubmit(evt) {
    console.log(evt);
    evt.preventDefault();
    const searchTerm = getSearchTerm();
    displayNewGif(searchTerm);
}

function displayNewGif(searchQuery) {
    console.log(searchQuery);
}
