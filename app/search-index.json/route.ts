import { NextResponse } from "next/server";
import { buildSearchDocs } from "@/lib/search-index";

export async function GET() {
  return NextResponse.json(buildSearchDocs(), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
