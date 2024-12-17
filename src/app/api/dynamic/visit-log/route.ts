import dbConnect from "@/lib/db/dbConnect"
import VisitLog from "@/lib/schema/visitLog.model";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response)=>{
  try{
    dbConnect();
    const visitLogs = VisitLog;
    const { thumbnail, name, password, message, date } = await req.json();
    const visitLog = new visitLogs({ thumbnail, name, password, message, date });
    await visitLog.save();
    return NextResponse.json({ message: 'VisitLog created successfully' });
  }catch(error){
    console.error(error);
    throw new Error('Internal Server Error');
  }
}
export const GET = async (req: Request, res: Response)=>{
  try{
    dbConnect();
    const visitLogs = VisitLog;
    const allVisitLogs = await visitLogs.find();
    console.log(allVisitLogs);
    return NextResponse.json({
      data: allVisitLogs.map((i)=>({
        name: i.name,
        thumbnail: i.thumbnail,
        message: i.message,
        date: i.date,
        id: i._id
      }))
    });
  }catch(error){
    console.error(error);
    throw new Error('Internal Server Error');
  }
}