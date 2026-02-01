import { Toaster as SonnerToaster } from "sonner";

const Toaster = ({ ...props }) => (
  <SonnerToaster
    theme="system"
    className="toaster group"
    position="top-center"
    {...props}
  />
);

export { Toaster };
