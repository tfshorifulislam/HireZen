import {Spinner} from "@heroui/react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Spinner />
    </div>
  );
}