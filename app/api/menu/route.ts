import { Menu } from "@/lib/menu";

export async function GET() {
    return Response.json(Menu);
}
