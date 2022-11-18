export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pr-4 md:pr-7 lg:pr-9">{children}</div>;
}
