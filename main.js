const converter = new showdown.Converter();

function populateFromData(id, path) {
    $.get("/data/" + path, (data) => {
        $(`#${id}`).html(converter.makeHtml(data))
    })
}

function setActivePage(pageName) {
    $(`#${pageName}-tab`).addClass('active');
}
