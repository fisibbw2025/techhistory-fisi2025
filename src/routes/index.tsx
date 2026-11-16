import { createFileRoute } from "@tanstack/react-router";
import { ChroniclePage } from "@/components/chronicle-page";

export const Route = createFileRoute("/")({ component: ChroniclePage });
