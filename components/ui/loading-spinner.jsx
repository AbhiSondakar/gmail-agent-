export default function LoadingSpinner({ size = "medium" }) {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`loading-spinner ${sizeClass[size]}`}
        style={{
          borderTopColor: "var(--primary-color)",
        }}
      ></div>
    </div>
  )
}
