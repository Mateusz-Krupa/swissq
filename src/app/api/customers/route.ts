import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {

    // Fetch data from the JSON file in the public folder probably not perfect but a easy way 
    // to mock a API call
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    return NextResponse.json( { data: response.data },  { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
