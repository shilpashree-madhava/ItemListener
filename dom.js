//console.dir(document);
//console.log(document.URL)
//console.log(document.title)
//document.title=123
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[20])
/*document.all[10].textContent='Hello';
console.log(document.all[10])*/
//console.log(document.forms)
//console.log(document.forms[0])
/*console.log(document.links)
console.log(document.images)*/

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'))
//let headerTitle=document.getElementById('header-title')
//console.log(headerTitle)
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';

//var header =document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000'

//GET ELEMENT BY CLASS NAME
//var item=document.getElementsByClassName('list-group-item')
//console.log(item)
//Accessing an element
/*console.log(item[1])
item[1].textContent='Hello 2'
item[1].style.fontWeight='bold'
//Color all the four li item
for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold'
    item[i].style.backgroundColor='#f4f4f4'
}

//GET ELEMENT BY TAG NAME
var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent='hello 3'*/

//QUERY SELECTOR
//let header = document.querySelector('#main-header')
//header.style.borderBottom='solid 4px #ccc'

//var submit=document.querySelector('input[type="submit"]')
//submit.value="SEND"

//var item=document.querySelector('.list-group-item')
//item.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child')
//lastItem.style.color='blue'

//var secondItem=document.querySelector('.list-group-item:nth-child(2)')
//secondItem.style.color='corol'

//TRAVERSING THE DOM
//var itemList=document.querySelector('#items')

//parent node
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor='red'
//console.log(itemList.parentNode.parentNode.parentNode)

//child node
//console.log(itemList.childNodes);

//console.log(itemList.children)

//itemList.children[1].style.backgroudColor='yello'

//FIRST CHILD
/*console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='Hello 1'*/

//last child
/*console.log(itemList.lastChild)
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Hello 1'*/

//nextsibling
//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSibling)

//previousSibling
//console.log(itemList.previousElementSibling)

//Creating an element
//1)Creating a div tag using create element 'div'
//var newDiv=document.createElement('div')
//newDiv.className='hello'
//console.log(newDiv)

//add id
//newDiv.id='hello'
//console.log(newDiv)

//create text node
//var newDivText=document.createTextNode('hello world')
//console.log(newDivText)

//add text to div
//newDiv.appendChild(newDivText)
//console.log(newDiv)

//var container=document.querySelector('header .container')
//var h1=document.querySelector('header h1')

//container.insertBefore(newDiv,h1)

//EVENTS
//var btn=document.getElementById('button')
//btn.addEventListener('click',buttonClick);
//function buttonClick(e){
    //console.log('Button clicked')
    //document.getElementById('header-title').textContent='changed'
    //document.querySelector('#main').style.backgroundColor="blue"
    //console.log(e)
    //console.log(e.target)
    //console.log(e.target.id)
    //var output=document.getElementById('output')
    //output.innerHTML='<h3>'+e.target.id+'<h3>'
    //console.log(e.type)
    //console.log(e.clientX)
    //console.log(e.clientY)
    //console.log(e.offsetX)
    //console.log(e.offsetY)
    //console.log(e.altKey)
    //console.log(e.ctrlKey)
    //console.log(e.shiftKey)
//}
//var button=document.getElementById('button');
//var box=document.getElementById('box');


//20-01-2020
//button.addEventListener('click', runEvent);
//function runEvent()
//{
  //  box.setAttribute('class','text-primary');
//}

//21-1-2020(WORK FROM HOME):

  //var button=document.getElementById('button');
  //var box=document.getElementById('box');

    //button.addEventListener('dblclick', runEvent,false);
   //button.addEventListener('mousedown', runEvent);
    //button.addEventListener('mouseup', runEvent);
    //button.addEventListener('mouseenter', runEvent);
    //button.addEventListener('mouseleave', runEvent);
    //button.addEventListener('mouseover', runEvent);
    //button.addEventListener('mouseout', runEvent);
    //button.addEventListener('mousemove', runEvent);
//}
//var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// form select = document.querySelector('select');

 //itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

 //select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

 //form.addEventListener('submit', runEvent);

  //function runEvent(e){
//e.preventDefault();
  //console.log('EVENT TYPE: '+e.type);

//console.log(e.target.value);
 //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

//output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

 //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
 //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//}

//22-1-2020
//Adding new item

var input=document.getElementById('addForm');
var itemlist=document.getElementById('items');
input.addEventListener('submit',additem);
function additem(e)
{
  e.preventDefault();
 
var newitem=document.getElementById('item').value
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem));
itemlist.appendChild(li);
var btn=document.createElement('button');
btn.className="btn btn-danger btn-sm float-right delete";
btn.appendChild(document.createTextNode('x'));
li.appendChild(btn);
}

//deleting item with button
itemlist.addEventListener('click',removeItem);
function removeItem(e)
{
  if (e.target.classList.contains('delete'))
  if(confirm('are you sure want to delete'))
  {
    var li=e.target.parentElement;
    itemlist.removeChild(li);
  }
}
// function search(){
//   let input=document.getElementById('filter').value
//   let x=document.getElementByIdClassName('list-group-item');
//   for(i=0;i<x.length;i++){
//     if(!x[i].innerhtml.includes(input)){
//       x[i].style.display="none";

//     }
//     else{
//       x[i].style.display="item";
//     }
//   }
  
// }

function s(){
  let input=document.getElementById('filter').value
  let x=document.getElementsByClassName('list-group-item');
  for(i=0;i<x.length;i++){
    if (!x[i].innerHTML.includes(input)){
      x[i].style.display="none";

    }
    else{
      x[i].style.display="item";
    }
  }
}




