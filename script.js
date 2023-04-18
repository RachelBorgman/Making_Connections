var profile_name = document.querySelector("#profile_name");
var name_pool = ["Rachel Borgman","John Smith","Molly of Denali"]
var random = Math.floor(Math.random() * name_pool.length);

function switchName(){
    profile_name.innerHTML = name_pool[random];
}


var connection_request_count = document.querySelector("#requests_header .count");
var connection_count = document.querySelector("#connections_header .count");


function acceptFriend(id){
    var person = document.querySelector(`#request_${id}`)
    person.remove();
    connection_request_count.innerHTML --;
    connection_count.innerHTML ++;
}

function denyFriend(id){
    var person = document.querySelector(`#request_${id}`)
    person.remove();
    connection_request_count.innerHTML --;
}

