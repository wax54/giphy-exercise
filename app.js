//submit handler
$('#search-form').on('submit', handleSubmit);
//reset handler
$('#reset').on('click', trashGifs);
//DOM Input Function
const getSearchTerm = () => $('#query').val();
//Resets the img container
function trashGifs() {
    $('#img-container').text('');
}

/**
 * prevents page reload and adds a new gif to the DOM based on the search term inputed
 *    if blank, it will be a completly random image
 */
function handleSubmit(evt) {
    evt.preventDefault();
    const searchTerm = getSearchTerm();
    displayNewRandomGif(searchTerm);
}

/**
 * adds a new random image to the DOM based on the inputed string
 * 
 * @param {string} searchQuery the string to guide the chaos
 */
async function displayNewRandomGif(searchQuery) {
    //getting the data from the API
    const res = await axios.get('https://api.giphy.com/v1/gifs/random',
        {
            params: {
                tag: searchQuery,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
                
            }
        });
    //attaching the correct url to the DOM
    addImageToDOM(res.data.data.images.original.url);
}

/**
 * adds a new image to the element of ID img-container
 *
 * @param {string} imgUrl the image url to be added to the DOM
 */
function addImageToDOM(imgUrl) {
    //creates an element of the correct format containing the mage url
    const $img = newImage(imgUrl);
    //adds the element to the img-container
    $('#img-container').append($img);
}

/**
 * creates a new element containing a img of the specified source
 *
 * @param {string} src the source url for the image
 */
function newImage(src) {
    //new img of classes img and p-1
    const $img = $('<img class="img p-1">');
    //set the height so the rows aren't all wonky
    $img.attr('height', '300px');
    //set the source to the specified src
    $img.attr('src', src);
    return $img;
}