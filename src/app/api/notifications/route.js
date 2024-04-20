import Notifications from "models/notifications";
import { connectToDB } from "utils/database";

export const POST = async (req) => {
    const { id, importerId, countryofImporter, dateofShipment, status, exportId, countryOfExporter, weight, price, quantity } = await req.json();

    try {
        await connectToDB();

        const notifications = await Notification.findById(id);

        notifications.importerId = importerId;
        notifications.countryofImporter = countryofImporter
        notifications.dateofShipment = dateofShipment;
        notifications.status = status;
        notifications.exportId = exportId;
        notifications.countryOfExporter = countryOfExporter;
        notifications.weight = weight;
        notifications.price = price;
        notifications.quantity = quantity;

        console.log(notifications);
        await notifications.save();

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error('Failed to update user:', error);
        return new Response('Failed to update user', { status: 500 });
    }
};
