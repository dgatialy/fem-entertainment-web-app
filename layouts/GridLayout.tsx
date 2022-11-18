export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-9 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
