const router = require("express").Router();
const Applicant = require("../models/Applicant");
 
router.post("/", async (req, res) => {
  const newPost = new Applicant(req.body);
  try{
      const savedPost = await newPost.save()
      res.status(200).json(savedPost)

  }catch(e){
      res.status(500).json(e)
  }
});


//tekli gonderi getirme
router.get("/:id", async(req,res)=>{
    try{
        const applicant = await Applicant.findById(req.params.id)
        res.status(200).json(applicant)

    }catch(e){
        res.status(500).json(e)
    }
})

//tum gonderileri getirme

router.get("/", async(req,res)=>{
  


    try{
        let applicant
       
        applicant = await Applicant.find()
      

        res.status(200).json(applicant)

    }catch(e){
        res.status(500).json(e)
    }
})





module.exports = router;