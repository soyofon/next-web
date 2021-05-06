import { sampleUserData as users } from './../../utils/sample-data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    users.push({ id: 101 + users.length, ...req.body });

    res.status(200).send('success');
  } else {
    res.status(204);
  }
}
