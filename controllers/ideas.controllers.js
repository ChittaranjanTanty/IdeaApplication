//write the logic to create the controllers for the idea resources

const ideas= require("../models/ideas.model")
let id=3//initial count of id
//create the controller for fetching all the ideas
//GET 127.0.0.1:8080/ideaApp/api/v1/ideas
//Return the list of all ideas

exports.getAllIdeas=(req,res)=>{
    //first read all the ideas from the ideas from the idea model file
    //return all the ideas
    res.status(200).send(ideas)
}

//controllers that fetches idea based on id

exports.getIdeaBasedOnId=(req,res)=>{
    //first reading the idea id from the req path param
    idea_id=req.params.id
    //using id, check if the idea with that id is present
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }
    else{
        res.status(404).send({
            message:"Idea with given id not found"
        })
    }
    //if present return the id
}

//controller to create a new idea
exports.createIdea=(req,res)=>{
 //read the request body
 idea_obj=req.body
 id++
 idea_obj["id"]=id//setting the id in the new created idea object
 ideas[id]=idea_obj//assigning id to idea_object
 //add the new object provided in the ideas object
 res.status(201).send(idea_obj)
 //return response
}

//controller for update data
exports.updateIdea=(req,res)=>{ 
    //first reading the idea id from the req path param
    idea_id=req.params.id
    //check if the id exist
    if(idea_id){
     //read the request body
     idea_object=req.body
     //updating the idea
     ideas[idea_id]=idea_object
     //return response
     res.status(200).send(idea_object)
    }
    else{
        return res.status(404).send({
            message:"Idea with given id is not present"
        })
    }
    
}

//controller for delete idea
exports.deleteIdea=(req,res)=>{
//first reading the idea id from the request path param
 idea_id=req.params.id
 //check if id exist
 if(idea_id){
 delete ideas[idea_id]
 return res.status(200).send({
    message:`idea with id ${idea_id} has been deleted successfully`
 })
 }else{
   return  res.status(404).send({
        message:"Idea with given id does not exist"
    })
 }
}