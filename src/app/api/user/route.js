import User from "models/Users";
import { connectToDB } from "utils/database";


export const POST = async (req) => {
    const { id, role, country, company, goodsType, cid } = await req.json();

    try {
        await connectToDB();

        const user = await User.findById(id);

        if (!user) {
            return new Response('User not found', { status: 404 });
        }

        user.role = role;
        user.country = country;
        user.company = company;
        user.goodsType = goodsType;
        user.cid = cid;
        console.log(user);
        await user.save();

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error('Failed to update user:', error);
        return new Response('Failed to update user', { status: 500 });
    }
};
