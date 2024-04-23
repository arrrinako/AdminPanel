const {readData, writeData}=require("../utils/data");

const getAllGames=async(req, res,next)=>{
    const games =await readData("./data/games.json");
    if(!games){
        res.status(400);
        res.send({
           status:"error",
           message:"Нет игры в базе данных.Добавиьте игру", 
        });
        return;
    }
    req.games=games;
    next();
}
module.exports={getAllGames};