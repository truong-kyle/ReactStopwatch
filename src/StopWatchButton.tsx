import React from "react";

interface buttonProps {
  type: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function StopWatchButton({
  type,
  onClick,
  disabled = false,
}: buttonProps) {
  const getButtonText = (): string => {
    switch (type) {
      case "start":
        return "Start";
      case "stop":
        return "Stop";
      case "lap":
        return "Lap";
      case "reset":
        return "Reset";
      default:
        return "";
    }
  };
  return (
    <button onClick={onClick} disabled={disabled}>
      {getButtonText()}
    </button>
  );
}
