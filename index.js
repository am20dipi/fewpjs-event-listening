function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
    alert('I was clicked!');
    }); 
}

// The NODE does the listening; the node is stored in the input constant

// The first argument is the event name to listen for

// The second argument is the callback function; it will do the work when the node "hears" the event

