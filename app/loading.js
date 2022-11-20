import GridLayout from "../layouts/GridLayout";
import ContainerLayout from "../layouts/ContainerLayout";

export default function Loading() {
  const content = Array.from({ length: 12 }, (v, i) => (
    <div key={i} className="flex flex-col gap-2">
      <div className="rounded bg-semi-dark-blue aspect-[140/87]"></div>
      <div className="flex flex-col gap-2">
        <div className="h-5 w-3/5 rounded bg-semi-dark-blue"></div>
        <div className="h-7 w-4/5 rounded bg-semi-dark-blue"></div>
      </div>
    </div>
  ));

  return (
    <ContainerLayout>
      <div className="animate-pulse">
        <div className="h-6 max-w-sm rounded bg-semi-dark-blue mt-12 mb-10"></div>
        <GridLayout>{content}</GridLayout>
      </div>
    </ContainerLayout>
  );
}
