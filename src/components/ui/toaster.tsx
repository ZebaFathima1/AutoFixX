import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      position="top-center"
      expand={true}
      richColors
      closeButton
    />
  );
}
