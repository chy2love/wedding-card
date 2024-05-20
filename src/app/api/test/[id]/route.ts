import dbConnect from '@/lib/db/dbConnect';
import Test from '@/lib/schema/test.model';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const tests = Test;
    const url = new URL(req.url);
    const { password } = await req.json();
    const id = url.pathname.split('/')[url.pathname.split('/').length - 1];
    const pw = await tests.findOne({ _id: id });
    console.log(pw.password);
    console.log(password);
    if (password == pw.password) {
      await tests.findByIdAndDelete(id);
      return NextResponse.json({ message: 'Test deleted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Password is incorrect' }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
