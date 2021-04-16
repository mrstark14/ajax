function loadUsers(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users',true);
    xhr.send();
    xhr.onload=function(){
        if(this.status==200){
            var users=JSON.parse(this.responseText);
            document.getElementById('table').innerHTML='<tr><td>id</td><td>email</td><td>name</td><td>avatar</td></tr>'
            var output='';
            for(var i in users['data']){
                output+='<tr><td>'+users['data'][i].id+'</td><td>'+users['data'][i].email+'</td><td>'+users['data'][i].first_name+' '+users['data'][i].last_name+'</td><td><img src="'+users['data'][i].avatar+'" height="40px" width="40px"></td></tr>';
            }
            document.getElementById('table').innerHTML+=output;
        }
        else if(this.status==403){
            document.getElementById('xyz').innerHTML="Forbidden";
        }
        else if(this.status==404){
            document.getElementById('xyz').innerHTML="Not found";
        }
    }
}