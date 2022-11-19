export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 min-[400px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 lg:grid-cols-4 gap-y-8">
      {children}
    </div>
  );
}
