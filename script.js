var pname=document.getElementById("productName");
var pprice=document.getElementById("productPrice");
var pcat=document.getElementById("productCategory");
var pdesc=document.getElementById("productDesc");
var searchinp=document.getElementById("search")
if(localStorage.getItem("allproduct")==null)
{
  var productlist=[];
}
else
{
  productlist=JSON.parse(localStorage.getItem("allproduct"))
  display();
}


function add()
{
 
    var product =
    { name:pname.value ,
      price:pprice.value,
      coatogery:pcat.value,
      descrebtion:pdesc.value
    };
    productlist.push(product);
    localStorage.setItem("allproduct",JSON.stringify(productlist));
    display();
    clear();
  
 
} 
function clear()
{
   pname.value="";
   pprice.value="";
   pcat.value="";
   pdesc.value="";

}
function display()
{
  var x="";
  for(i=0;i<productlist.length;i++)
  {
    x+= `<tr>
           <td>${i}</td>
           <td>${productlist[i].name}</td>
           <td>${productlist[i].price}</td>
           <td>${productlist[i].coatogery}</td>
           <td>${productlist[i].descrebtion}</td>
           <td><button class="btn btn-warning"  onclick="updateproduct(${i})">update</button></td>
           <td><button class="btn btn-danger " onclick="deleteproduct(${i})">delete</button></td>

        </tr>`
  }
  document.getElementById("tableBody").innerHTML=x;
}
function search()
{

  var x="";
  for(i=0;i<productlist.length;i++)
  {
    if(productlist[i].name.toLowerCase().includes(searchinp.value.toLowerCase()))
    {
      x+= `<tr>
      <td>${i}</td>
      <td>${productlist[i].name}</td>
      <td>${productlist[i].price}</td>
      <td>${productlist[i].coatogery}</td>
      <td>${productlist[i].descrebtion}</td>
      <td><button class="btn btn-warning"  onclick="updateproduct(${i})">update</button></td>
      <td><button class="btn btn-danger " onclick="deleteproduct(${i})">delete</button></td>

       </tr>`

    }
  }
  document.getElementById("tableBody").innerHTML=x;
}
function deleteproduct( _x)
{
  productlist.splice(_x,1);
  localStorage.setItem("allproduct",JSON.stringify(productlist));
  display();

}
function updateproduct(_x)
{
  pname.value=`${productlist[_x].name}`;
   pprice.value=`${productlist[_x].price}`;
   pcat.value=`${productlist[_x].coatogery}`;
   pdesc.value=`${productlist[_x].descrebtion}`;
  deleteproduct(_x);
  display()

}





