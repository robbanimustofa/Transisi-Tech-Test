var rotate = {
    init() {
        var button = document.querySelectorAll('button');
        var menu = document.querySelector('.add-menu');
        var expanded =  document.querySelectorAll('.expanded');
        var forEach = Array.prototype.forEach;

        menu.addEventListener('click',function(ev){
            ev.currentTarget.classList.toggle('open-rotate');
            forEach.call(expanded, function(circle){
                circle.classList.toggle('expanded');
            });
        },false);

        forEach.call(button, function(button){
            button.addEventListener('click', function(ev){
                // alert("In Event Listener");
                var insertPoint = this.parentNode.querySelector('li:nth-child(4)');
                console.log(insertPoint);
                console.log(insertPoint.parentNode);
                var ul = insertPoint.parentNode;

                var newItem = document.createElement('li');
                var content = document.createTextNode("New Item");
                newItem.appendChild(content);
                newItem.className = "new-item";
                console.log(newItem);
                ul.insertBefore(newItem, insertPoint.nextSibling);
            });
        });
    }
}

export default rotate
