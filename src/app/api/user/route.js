import User from "models/Users";
import { connectToDB } from "utils/database";


export const PATCH = async (req) => {
    const { id, role, country, company, goodsType } = await req.json();

    try {
        await connectToDB();

        const user = await User.findOne({ id });

        if (!user) {
            return new Response('User not found', { status: 404 });
        }
    
        user.role = role;
        user.country = country;
        user.company = company;
        user.goodsType = goodsType;

        await user.save();

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error('Failed to update user:', error);
        return new Response('Failed to update user', { status: 500 });
    }
};