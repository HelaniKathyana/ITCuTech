import { LoadingSpinner } from "./LoadingSpinner";

export const PageLoader = ({ height = "h-screen" }: { height?: string }) => (
  <div className={`${height} flex items-center justify-center`}>
    <LoadingSpinner />
  </div>
);