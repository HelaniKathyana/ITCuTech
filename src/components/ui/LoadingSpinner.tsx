export const LoadingSpinner = ({ className = "h-8 w-8" }: { className?: string }) => (
  <div className="flex flex-col items-center justify-center">
    <div className={`animate-spin rounded-full border-b-2 border-primary ${className}`} />
  </div>
);