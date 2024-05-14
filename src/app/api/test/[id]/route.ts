import dbConnect from '@/lib/db/dbConnect';
import Test from '@/lib/schema/test.model';
import { NextResponse } from 'next/server';

export const DELETE = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const tests = Test;
    const url = new URL(req.url);
    const id = url.pathname.split('/')[url.pathname.split('/').length - 1];
    await tests.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Test deleted successfully' });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
