import express from "express"
import {
    userRegistered,
    newPasswordCreated,
    bookingCreated,
    editBooking,
    cancelBookingAct,
    closeOfTheDay,
    statusChanged,
    massiveReBookingAct,
    subscriptionPlanAction
} from "../controllers/ActionsController.js"

const router = express.Router();

router
.route("/updateaction")
.post(userRegistered)

router
.route("/newpasswordcreated")
.post(newPasswordCreated)

router
.route("/bookingcreated")
.post(bookingCreated)

router
.route("/subscriptionplan")
.post(subscriptionPlanAction)

router
.route("/editbookingact")
.post(editBooking)

router
.route("/cancelbookingact")
.post(cancelBookingAct)

router
.route("/closeoftheday")
.post(closeOfTheDay)

router
.route("/statuschanged")
.post(statusChanged)

router
.route("/massiverebookingact")
.post(massiveReBookingAct)


export default router;



