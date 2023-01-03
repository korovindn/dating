import { useRouter } from "next/router";

export default function Chats() {
  const router = useRouter()
  return (
    <>
      hello, i'm chat {router.query.id}
    </>
  );
}
