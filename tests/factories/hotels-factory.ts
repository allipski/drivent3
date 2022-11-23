import faker from "@faker-js/faker";
import { prisma } from "@/config";
import { createRoom } from "./rooms-factory";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.business(),
      Rooms: {}
    },
  });
}

export async function createHotelWithRooms() {
  const hotel = await createHotel();
  for (let index = 0; index < 3; index++) {
    await createRoom(hotel.id);
  }
  return prisma.hotel.findFirst({
    where: {
      id: hotel.id
    },
    include: {
      Rooms: true
    }
  });
}
