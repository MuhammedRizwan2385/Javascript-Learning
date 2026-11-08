function add(){
    let movieName=document.getElementById('movie-name').value;
    let movieGenre=document.getElementById('movie-genre').value;
    let movieYear=document.getElementById('movie-year').value;
    let movieRating=document.getElementById('movie-rating').value;
    let tableResult=document.getElementById('result');
    if(movieName.trim()!==""&&movieGenre.trim()!==""&&movieYear.trim()!==""&&movieRating.trim()!==""){
    let tableHtml=
    `
    <tr>
        <td class="border border-3 border-black text-center">${movieName}</td>
        <td class="border border-3 border-black text-center">${movieGenre}</td>
        <td class="border border-3 border-black text-center">${movieYear}</td>
        <td class="border border-3 border-black text-center">${movieRating}</td>
        <td class="border border-3 border-black text-center">
            <span class="badge bg-warning text-dark">unwatched</span>
        </td>
        <td class="border border-3 border-black text-center">

        <button class="btn btn-success rounded-3" onclick="toggleWatch(this)">Mark Watched</button>

        <button class="btn btn-primary rounded-3" onclick="edit(this)">Edit</button>
        <button class="btn btn-danger rounded-3" onclick="Delete(this)">Delete</button>
        </td>
        
    </tr>


    `
    tableResult.innerHTML+=tableHtml;
    saveMovies();
    alert("Movie Details Added");
    document.getElementById('movie-name').value="";
    document.getElementById('movie-genre').value="";
    document.getElementById('movie-year').value="";
    document.getElementById('movie-rating').value="";
  
    

    }
    else{
        alert("Fields cannot be empty");
    }
}

function Delete(button){
let row=button.closest('tr');
row.remove();
saveMovies();


}

function edit(button){
    let row=button.closest('tr');
    let tds=row.getElementsByTagName('td');
    
    let newName=prompt("Movie Name",tds[0].innerText);
    let newGenre=prompt("Movie genre",tds[1].innerText);
    let newYear=prompt("Movie year",tds[2].innerText);
    let newRating=prompt("Movie Rating",tds[3].innerText);

    if(newName!==null && newGenre!==null &&newYear!=null &&newRating!==null){
        if(newName.trim()!==""&&newGenre.trim()!==""&&newYear.trim()!==""&&newRating.trim()!==""){
            tds[0].innerText=newName;
            tds[1].innerText=newGenre;
            tds[2].innerText=newYear;
            tds[3].innerText=newRating;
            saveMovies();
        }
        else{
            alert("fields cannot be empty");
        }
    }
}

function toggleWatch(button){

    let row=button.closest('tr');
    let tds=row.getElementsByTagName('td');
    let status=tds[4].querySelector('span');
    if(status.innerText==="unwatched"){
        status.innerText="watched";
        status.className="badge bg-success text-dark";
        button.innerText="Mark unwatched";
        button.className="btn btn-warning rounded-3"
    }
    else{
        status.innerText="unwatched";
        status.className="badge bg-warning text-dark";
        button.innerText="Mark watched";
        button.className="btn btn-success rounded-3"
    }
    saveMovies();

}

function saveMovies(){
    sessionStorage.setItem("movies",document.getElementById('result').innerHTML)
}

window.onload=function(){
    let savedMovies=sessionStorage.getItem("movies");
    if(savedMovies){
        document.getElementById('result').innerHTML=savedMovies;
    }
}