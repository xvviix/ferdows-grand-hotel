import { notFound } from "next/navigation";
import { rooms, getRoom } from "@/data/rooms";
import RoomDetailPage from "@/components/pages/RoomDetailPage";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const room = getRoom(params.slug);
  return { title: room ? room.en.name : "Room" };
}

export default function Page({ params }) {
  const room = getRoom(params.slug);
  if (!room) notFound();
  return <RoomDetailPage room={room} />;
}
