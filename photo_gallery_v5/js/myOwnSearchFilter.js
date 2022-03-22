
document.getElementById('search').addEventListener("keyup" , myOwnSearchFilter);

function myOwnSearchFilter() {
    let input = document.getElementById("search");
    input.value = input.value.toLowerCase();
    console.log(input.value);
}

for ( let i = 1 ; i <= 12; i++) {
    let anchorElements = document.getElementById(`picture${i}`);
    let value = anchorElements.getAttribute('data-caption');
    console.log(anchorElements);
    console.log(value);
}