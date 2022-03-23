


function myOwnSearchFilter() {
    let input = document.getElementById("search");
    input = input.value.toLowerCase();
    const anchors = document.querySelectorAll('a');

    for (let i=0; i < anchors.length; i++) {
        let captions = anchors[i].getAttribute('data-caption');
        if (captions.toLowerCase().includes(input)) {
            anchors[i].style.display = "inherit";
        } else {
            anchors[i].style.display = "none";
        }
    }
}