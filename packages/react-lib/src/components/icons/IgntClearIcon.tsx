export default function IgntClearIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
      style={{ width: "1em", height: "1em" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4182 16 8C16 3.5818 12.4183 0 8 0C3.58172 0 0 3.5818 0 8C0 12.4182 3.58172 16 8 16ZM11.5442 4.45588C11.8382 4.74977 11.8382 5.22656 11.5442 5.52068L9.06483 8L11.5442 10.4793C11.8382 10.7734 11.8382 11.2502 11.5442 11.5441C11.2501 11.8382 10.7734 11.8382 10.4793 11.5441L8 9.0648L5.52065 11.5441C5.22662 11.8382 4.74989 11.8382 4.45582 11.5441C4.16179 11.2502 4.16179 10.7734 4.45582 10.4793L6.93517 8L4.45582 5.52068C4.16179 5.22656 4.16179 4.74977 4.45582 4.45588C4.74986 4.16176 5.22659 4.16176 5.52065 4.45588L8 6.9352L10.4793 4.45588C10.7734 4.16176 11.2501 4.16176 11.5442 4.45588Z"
        fill="currentColor"
      />
    </svg>
  );
}