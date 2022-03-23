


function myOwnSearchFilter() {
    let input = document.getElementById("search");  // THIS RETRIEVES INPUT FROM SEARCH BAR
    input = input.value.toLowerCase();              //  AND THEN CONVERTS THE VALUE TO ALL LOWER CASE
    const anchors = document.querySelectorAll('a'); // THIS SELECTS ALL ANCHORS IN HTML

    for (let i=0; i < anchors.length; i++) {        // THIS WILL LOOP THROUGH ALL THE ANCHORS
        let captions = anchors[i].getAttribute('data-caption');  // THIS RETRIEVES THE DATA CAPTION IN SELECTED ANCHOR
        if (captions.toLowerCase().includes(input)) {   // THIS CONDITION CHECKS IF INPUT IS INCLUDED IN THE DATA CAPTION
            anchors[i].style.display = "inherit";   // IF TRUE, THE ANCHOR WILL DISPLAY AS NORMAL
        } else {
            anchors[i].style.display = "none";  // IF FALSE, THE ANCHOR WILL NOT DISPLAY
        }
    }
}