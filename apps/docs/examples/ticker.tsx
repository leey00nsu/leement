"use client";
import { Ticker } from "../../../registry/ui/ticker";
export default function TickerExample() { return <div className="w-fit max-w-full"><Ticker symbol="LMNT" name="Leement sample asset" price={104.82} changePercent={2.31} high={107.25} low={99.4} /></div>; }
