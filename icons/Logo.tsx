type Props = {
  className?: string;
};

export default function Logo({
  className,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 26"
      fill="currentColor"
      className={`fill-accent w-7 h-5 sm:w-8 sm:h-6 lg:w-11 lg:h-9 ${
        className ? className : ""
      }`}
    >
      <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" />
    </svg>
  );
}
