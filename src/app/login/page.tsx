import { redirect } from "next/navigation";

export default function LoginPage() {
  redirect(process.env.NEXT_PUBLIC_CRANE_URL || "https://crane.dennettlabs.com");
}
