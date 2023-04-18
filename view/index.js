var edituserid=null;
async function expense(event) {
    event.preventDefault();
    const price = event.target.price.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    //console.log(price)
    const obj = {
      price,
      category,
      description
    };
    if(edituserid===null){
      //for post
      await axios.post('http://localhost:3000/add-user',obj)
      .then((Res)=>{
        // console.log(Res)
        showOrderOnSreen(Res.data.newuser);

      }).catch((err)=>{
        document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
        console.log(err);
      })
    }
    else{

    //for edit
      axios.put(`http://localhost:3000/edit-user/${edituserid}`,obj)
     
     .then((Res)=>{
      // console.log(Res);
      showOrderOnSreen(Res.data)
    }).catch((err)=>{
      document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
      console.log(err);
    })
    }
    
      
  };

// for get Request 
    
   window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/getuser").then((Res)=>{
      console.log(Res);
          for(var i=0; i<Res.data.alluser.length; i++){
            showOrderOnSreen(Res.data.alluser[i])
          }
    }).catch((err)=>{
      console.log(err)
     })
     

  });
   
  // for Showuser on screen

  function showOrderOnSreen(order) {
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    const parentNode = document.getElementById("listOfUsers");

    const childHTML = `<li id=${order.id}> ₹${order.price} - ${order.category} - ${order.description} 
   <button onclick=editUserDetails('${order.price}','${order.category}','${order.description}','${order.id}')>Edit</button>
     <button onclick=deleteUser('${order.id}')> Delete</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }

  //for edit User 

  function editUserDetails(price, category, description,userid) {
    console.log(price,category,description,userid)
    document.getElementById("price").value = price;
    document.getElementById("category").value = category;
    document.getElementById("description").value = description;
     edituserid=userid;
      removeUserFromScreen(userid);
   
    
  }
  

  // for Delete user

  function deleteUser(userid) {
    axios.delete(`http://localhost:3000/delete-user/${userid}`)
    .then((res)=>{
      removeUserFromScreen(userid);
    }).catch((err)=>{
      console.log(err)
    });
    };
  
    // for remove user from screen
  
  function removeUserFromScreen(user) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(user);
  if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
}
  }