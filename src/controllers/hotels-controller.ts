import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";

import { Response } from "express";
import httpStatus from "http-status";

export async function getHotelRooms(req: AuthenticatedRequest, res: Response) {
  const userId = req.body.userId;
  const hotelId = Number(req.params.hotelId);

  if(!hotelId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const listRooms = await hotelsService.listHotelRooms(hotelId, userId);

    return res.status(httpStatus.OK).send(listRooms);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const userId = req.body.userId;
  try {
    const listHotels = await hotelsService.listHotels(userId);

    return res.status(httpStatus.OK).send(listHotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

