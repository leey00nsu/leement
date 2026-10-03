import { Ticker } from "../../../registry/ui/ticker";
export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <Ticker
        symbol="LMNT"
        name="Sample asset"
        price={98500}
        changePercent={-1.75}
        currency="KRW"
        locale="ko-KR"
        high={102000}
        low={97000}
        layout="card"
      />
      <Ticker
        symbol="EURO"
        name="Sample European asset"
        price={72.4}
        changePercent={0}
        currency="EUR"
        locale="de-DE"
      />
    </div>
  );
}
