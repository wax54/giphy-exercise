$('#search-form').on('submit', handleSubmit);
console.log()
const getSearchTerm = () => $('#query').val();

function handleSubmit(evt) {
    evt.preventDefault();
    const searchTerm = getSearchTerm();
    displayNewGif(searchTerm);
}

async function displayNewGif(searchQuery) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search',
        {
            params: {
                q: searchQuery,
                limit: 1,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

            }
        });
    console.log(res.data.data[0].images.original.url);
    addImageToBody(res.data.data[0].images.original.url);
}


function addImageToBody(imgUrl, id) {
    const $img = newImage(imgUrl);
    $img.attr('id', id);

    $('body').append($img);
}

function newImage(src) {
    const $img = $('<img class="img-thumbnail">');
    $img.attr('src', src);
    return $img;
}