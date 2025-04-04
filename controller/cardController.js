import card from '../models/card.js'

 export const createCard = async(req,res)=>{
    try {
        const {title,description,imageUrl}=req.body;
        const newCard =new card({title,description,imageUrl});
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({error:"Error creating Card"})
    }
};

export const getAllCard=async(req,res)=>{
    try {
        const cards=await card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({error:"Error fetching cards"});
    }
};

export const deleteCard=async(req,res)=>{
    try {
        const cards=await card.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Card Deleted successfully"});
    } catch (error) {
        return res.status(500).json({error:"Error deleting Card"});
        
    }
};

