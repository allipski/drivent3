import { notFoundError, ticketNotFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function listHotels(userId: number) {
  const userHasTicket = await ticketRepository.userHasPaidTicketWithHotel(userId);
  
  if (!userHasTicket) {
    throw ticketNotFoundError();
  }

  const hotels = await hotelsRepository.findHotels();

  if (!hotels) {
    throw notFoundError();
  }
  return hotels;
}

async function listHotelRooms(hotelId: number, userId: number) {
  const userHasTicket = await ticketRepository.userHasPaidTicketWithHotel(userId);

  if (!userHasTicket) {
    throw ticketNotFoundError();
  }

  const roomsAvailable = await hotelsRepository.findHotelRooms(hotelId);
  if (!roomsAvailable) {
    throw notFoundError();
  }

  return roomsAvailable;
}

const hotelsService = {
  listHotels,
  listHotelRooms
};

export default hotelsService;
