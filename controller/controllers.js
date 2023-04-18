const db = require('../model/usertable');

const postuser = async(req,res)=>{
    try {
        
        const price = req.body.price;
        const category = req.body.category;
        const description = req.body.description;
        const data = await db.create({price:price,category:category,description:description});
        res.status(201).json({newuser:data});
       // console.log(req.body.price);
        // console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
    
    }


const getuser = async(req,res)=>{
  
    try {
        const user = await db.findAll();
        res.status(200).json({alluser:user})
    } catch (error) {
        console.log(error);
    }
    
    
    }


const deleteuser =async(req,res)=>{

    console.log('helloo')
    try {
       if(req.params.id===undefined){
        console.log('Id missing');
       }
       const uid = req.params.id;
       await db.destroy({where:{id:uid}});
       res.sendStatus(200); 
    } catch (error) {
        console.log(error);
    }
}


const edituser =(req,res)=>{

    const prodId = req.params.id;
  const updatedPrice = req.body.price;
  const updatedCategory= req.body.category;
  const updatedDescription= req.body.description;
  db.findByPk(prodId)
    .then(user => {
      user.price = updatedPrice;
      user.category = updatedCategory;
      user.description = updatedDescription;
      return user.save();
    })
    .then(result => {
      res.json(result)
      console.log('UPDATED user!');
    })
    .catch(err => console.log(err));


}



module.exports={
    postuser,
    getuser,
    deleteuser,
    edituser
}