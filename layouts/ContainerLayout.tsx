export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pr-4 md:pr-6 lg:pr-9">{children}</div>;
}
