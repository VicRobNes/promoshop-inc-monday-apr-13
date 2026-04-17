import { NextResponse } from "next/server"
import {
  getAllOverrides,
  setOverride,
} from "@/lib/db/repositories/imageRegistry"

// PHASE 2: require admin role (Entra External ID role claim check here).
// For now this route is open so Phase 1 can ship a working data layer while
// auth wiring is still being built.

export async function GET(): Promise<NextResponse> {
  try {
    const overrides = await getAllOverrides()
    return NextResponse.json(overrides)
  } catch (err) {
    console.error("[api/admin/image-overrides GET]", err)
    return NextResponse.json(
      { error: "Failed to load image overrides." },
      { status: 500 },
    )
  }
}

interface PutBody {
  slotId?: unknown
  url?: unknown
}

export async function PUT(request: Request): Promise<NextResponse> {
  // PHASE 2: require admin role
  let body: PutBody
  try {
    body = (await request.json()) as PutBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const slotId = typeof body.slotId === "string" ? body.slotId : ""
  const url = typeof body.url === "string" ? body.url : ""

  if (!slotId) {
    return NextResponse.json({ error: "slotId is required." }, { status: 400 })
  }

  try {
    await setOverride(slotId, url)
    return NextResponse.json({ slotId, url, ok: true })
  } catch (err) {
    console.error(`[api/admin/image-overrides PUT ${slotId}]`, err)
    return NextResponse.json(
      { error: "Failed to persist override. Is COSMOS_ENDPOINT configured?" },
      { status: 500 },
    )
  }
}
