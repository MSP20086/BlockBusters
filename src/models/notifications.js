import { Schema, model, models } from "mongoose";
import { type } from "os";

const NotificationSchema = new Schema({
    importerId: {
        type: String,
        required: true
    },
    countryOfImporter: {
        type: String,
        required: true
    },
    dateOfShipment: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    exporterId: {
        type: String,
        required: true
    },
    countryOfExporter: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Notifications = models.Notifications || model("Notifications", NotificationSchema);

export default Notifications;