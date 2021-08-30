const converter = new showdown.Converter();

function populateFromData(id, path) {
    $.get("/data/" + path, (data) => {
        $(`#${id}`).html(converter.makeHtml(data))
        // Plug in new styles
        $('.md-button').addClass('btn btn-primary');
        $('.md-button').parent().addClass('p-right')
    })
}

function setActivePage(pageName) {
    $(`#${pageName}-tab`).addClass('active');
}
