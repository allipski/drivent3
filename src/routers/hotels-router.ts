import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotels, getHotelRooms } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/:hotelId", getHotelRooms)
  .get("/", getHotels);

export { hotelsRouter };
