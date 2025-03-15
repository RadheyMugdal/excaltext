import { auth } from "@/auth";
import { db } from "@/db";
import { files } from "@/db/schema";
import { and, count, eq, like } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const limit = 12;
  try {
    const page = req.nextUrl.searchParams.get("page") || "1";
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }
    const offset = (parseInt(page) - 1) * limit || 0;

    const fileName = req.nextUrl.searchParams.get("fileName") || "";
    const totalFiles = await db
      .select({ count: count() })
      .from(files)
      .where(
        and(
          eq(files.userId, session.user.id as string),
          like(files.name, `%${fileName || ""}%`)
        )
      );

    const filesData = await db.query.files.findMany({
      where: and(
        eq(files.userId, session.user.id as string),
        like(files.name, `%${fileName || ""}%`)
      ),
      limit,
      offset,
    });

    return NextResponse.json(
      { filesData, totalFiles: totalFiles[0].count },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User is not authenticated" },
        { status: 401 }
      );
    }
    const data = await db.insert(files).values({
      name,
      userId: session.user.id as string,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {}
}
