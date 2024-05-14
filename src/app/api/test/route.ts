import dbConnect from '@/lib/db/dbConnect';
import Test from '@/lib/schema/test.model';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const tests = Test;
    const { title, content } = await req.json();
    console.log(title, content);
    const test = new tests({ title, content });
    await test.save();
    return NextResponse.json({ message: 'Test created successfully' });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const tests = Test;
    const allTests = await tests.find();
    return NextResponse.json({ data: allTests });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
