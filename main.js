const converter = new showdown.Converter();

populateFromData("about-me", "intro.md")

function populateFromData(id, path) {
    $.get("data/" + path, (data) => {
        console.log(data)
        $(`#${id}`).html(converter.makeHtml(data))
    })
}
