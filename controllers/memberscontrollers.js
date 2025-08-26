import db from "../server/config/db.js"

const memberverify = async (userId) => {
    try {
        const sql = `
            UPDATE users
            SET membership_status = true
            WHERE id = $1
            RETURNING *;
        `;
        const values = [userId];
        const result = await db.query(sql, values); // await is important
        return result.rows[0]; // return the updated user
    } catch (error) {
        console.error('Error updating membership:', error);
        throw error; // propagate error so calling code can handle it
    }
}

export default memberverify