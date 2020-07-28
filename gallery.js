/*jss external file*/

function upDate(preview){
	document.getElementById('image').innerHTML = preview.alt;  /*preview will take 'this' and will point to alt content*/
      document.querySelector('#image').style.backgroundImage = "url('" + preview.src +"')";
}

function unDo(){
    document.querySelector('#image').style.backgroundImage = "url('')"; /*this will undo the url to the original state*/
      document.querySelector('#image').innerHTML="Hover over an image below to display here."; /*back to original*/
}