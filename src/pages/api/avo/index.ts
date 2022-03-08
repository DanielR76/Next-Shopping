import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
	const db = new DB();
	const allEntries = await db.getAll();
	response.statusCode = 200;
	response.setHeader("Content-type", "application/json");
	response.end(JSON.stringify({ allEntries, length: allEntries.length }));
};

export default allAvos;
