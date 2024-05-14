import dbConnect from '@/lib/db/dbConnect';
import Test from '@/lib/schema/test.model';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const tests = Test;
    const { title, content, password } = await req.json();
    const test = new tests({ title, content, password });
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
    return NextResponse.json({
      data: allTests.map((i) => ({ content: i.content, title: i.title, password: i.password, id: i._id }))
    });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
