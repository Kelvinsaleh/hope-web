import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://hope-backend-rust.onrender.com";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Forward the deletion request to the backend
    // The backend will handle sending the email via its existing Resend integration
    const response = await fetch(`${BACKEND_URL}/user/account-deletion-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email,
        source: "website"
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Backend error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit deletion request" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: data.message || "Deletion request received. We will process it within 30 days and send you a confirmation email."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing deletion request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
