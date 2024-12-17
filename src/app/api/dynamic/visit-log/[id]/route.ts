import dbConnect from "@/lib/db/dbConnect"
import VisitLog from "@/lib/schema/visitLog.model";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request, res: Response) => {
  try{
    dbConnect();
    const visitLogs = VisitLog;
    const { password } = await req.json();
    const url = new URL(req.url);
    const id = url.pathname.split('/')[url.pathname.split('/').length - 1];
    const visitLog = await visitLogs.findOne({ _id: id });
    if(password === visitLog.password){
      await visitLogs.findByIdAndDelete(id);
      return NextResponse.json({ message: 'VisitLog deleted successfully' }, { status: 200 });
    }else{
      return NextResponse.json({ message: 'Password is incorrect' }, { status: 401 });
    }
  }catch(error){
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}