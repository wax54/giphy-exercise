$('#search-form').on('submit', handleSubmit);
$('#reset').on('click', trashGifs);
const getSearchTerm = () => $('#query').val();

function trashGifs() {
    $('#img-container').text('');
}

function handleSubmit(evt) {
    evt.preventDefault();
    const searchTerm = getSearchTerm();
    displayNewGif(searchTerm);
}

async function displayNewGif(searchQuery) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random',
        {
            params: {
                tag: searchQuery,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
                
            }
        });
    addImageToDOM(res.data.data.images.original.url);
}


function addImageToDOM(imgUrl) {
    const $img = newImage(imgUrl);
    $('#img-container').append($img);
}

function newImage(src) {

    const $img = $('<img class="img">');
    $img.attr('height', '300px')
    $img.attr('src', src);
    return $('<span class="col-xl-4 col-md-6">').append($img);

}