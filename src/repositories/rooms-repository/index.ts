import { prisma } from "@/config";

async function findHotelRooms(hotelId: number) {
  return prisma.room.findMany({
    where: {
      hotelId: hotelId
    }
  });
}

const hotelsRepository = {
  findHotelRooms
};

export default hotelsRepository;
