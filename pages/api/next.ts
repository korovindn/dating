import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '../../types/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser>
) {
  res.status(200).json({
    id: 0,
    name: "Ivan",
    age: 22,
    distance: 22,
    desc: "Hello!",
    images: [
      "https://for-male.ru/wp-content/uploads/2020/11/stilnyj-muzhchina.jpg",
      "https://avatars.mds.yandex.net/i?id=17665662f7052e7d86665c90833fa113_l-4824599-images-thumbs&n=27&h=384&w=480",
    ],
    interests: [
      { title: "Drawing", weight: 100 },
      { title: "Dogs", weight: 10 },
      { title: "Cats", weight: 10 },
      { title: "Guitar", weight: 50 },
      { title: "Rock", weight: 60 },
      { title: "Sex", weight: 10 },
    ],
  })
}
