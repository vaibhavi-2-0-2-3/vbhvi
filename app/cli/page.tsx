'use client';

import { CliInterface } from "@/components/CliInterface";
import MatrixBackground from "@/components/MatrixBackground";
import { useRouter } from "next/navigation";

export default function CliPage() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <MatrixBackground />
      <CliInterface onGuiCommand={() => router.push('/')} />
    </div>
  );
}
