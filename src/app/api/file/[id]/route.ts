import { auth } from "@/auth";
import { db } from "@/db";
import { files } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "File id is required" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }
    const data = await db.delete(files).where(eq(files.id, id));
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "File id is required" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }
    const { name, textEditorData, canvasData } = await req.json();
    if (!name && !textEditorData && !canvasData) {
      return NextResponse.json(
        { error: "File data is required" },
        { status: 400 }
      );
    }
    const data = await db
      .update(files)
      .set({
        ...(name && { name }),
        ...(textEditorData && { textEditorData }),
        ...(canvasData && { canvasData }),
      })
      .where(eq(files.id, id))
      .returning();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
