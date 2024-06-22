import { connectMongoose } from "../lib/mongoose";
import MenuItem from "../model/menuItem";

export default async function handle(req,res){
    await connectMongoose();
    res.json ( await MenuItem.find().exec())
}