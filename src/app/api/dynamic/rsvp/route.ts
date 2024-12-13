import dbConnect from '@/lib/db/dbConnect';
import Rsvp from '@/lib/schema/rsvp.model';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const rsvps = Rsvp;
    const { side, phoneNumber, name, willAttend, willEat, message, companionCount, companionName } = await req.json();
    await rsvps.findOneAndDelete({ phoneNumber });
    const rsvp = new rsvps({ side, phoneNumber, name, willAttend, willEat, message, companionCount, companionName });
    await rsvp.save();
    return NextResponse.json({ message: 'Rsvp created successfully' });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    dbConnect();
    const rsvps = Rsvp;
    const allRsvps = await rsvps.find();
    console.log(allRsvps);
    return NextResponse.json({
      data: allRsvps.map((i) => ({
        name: i.name,
        phoneNumber: i.phoneNumber,
        side: i.side,
        willAttend: i.willAttend,
        willEat: i.willEat,
        message: i.message,
        companionCount: i.companionCount,
        companionName: i.companionName,
        id: i._id
      }))
    });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};
