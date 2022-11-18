export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:gap-9 lg:grid-cols-4 gap-5 gap-y-8">
      {children}
    </div>
  );
}
