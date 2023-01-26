function newItem(){

    // 1. Adding a new item to the list of items: 
    // JavaScript
        // let li = document.createElement("li");
        // let inputValue = document.getElementById("input").value;
        // let text = document.createTextNode(inputValue);
        // li.appendChild(text);
    
        // if (inputValue === '') {
        //     alert("You must write something!");
        // } else {
        //     let list = document.querySelector('#list');
        //     list.appendChild(li);
        // }

    // jQuery
        let li = $('<li></li>')
        let inputValue = $('#input').val();
        li.append(inputValue);
       
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            $('#list').append(li);
        }

    
    // 2. Crossing out an item from the list of items:
    // JavaScript
        // function crossOut() {
        //      li.classList.toggle("strike");
        // }
        // li.addEventListener("dblclick",crossOut);

    // jQuery
        function crossOut() {
            li.toggleClass('strike');
        }

        li.on('dblclick', function crossOut() {
            li.toggleClass('strike');
        });

    
    // 3(i). Adding the delete button "X": 
    // JavaScript
        // let crossOutButton = document.createElement("crossOutButton");
        // crossOutButton.appendChild(document.createTextNode("X"));
        // li.appendChild(crossOutButton);
    
        // crossOutButton.addEventListener("click", deleteListItem);

    // jQuery
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);

        crossOutButton.on('click', deleteListItem);


    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    //JavaScript
        function deleteListItem(){
            li.addClass("delete")
        }

    // 4. Reordering the items: 
        $('#list').sortable();
    
    }