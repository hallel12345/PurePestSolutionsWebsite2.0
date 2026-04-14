import { NextResponse } from "next/server";
import { getQuoteDeliveryAdapter, quoteSchema } from "@/lib/quote";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = quoteSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: parsed.error.issues[0]?.message ?? "Please check your form entries.",
        },
        { status: 400 },
      );
    }

    const adapter = getQuoteDeliveryAdapter();
    const result = await adapter.send(parsed.data);

    if (!result.ok) {
      return NextResponse.json({ message: result.message }, { status: 500 });
    }

    return NextResponse.json({ message: result.message }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to process your request right now. Please call us directly." },
      { status: 500 },
    );
  }
}
