import SalesCard from "./SalesCard"
import { ScoreCard } from "./ScoreCard"
import WebAnalyticsCard from "./WebAnalyticsCard"

export const RightColumn = () => {
  return (
    <div className="w-full p-2">
        <SalesCard />
        <WebAnalyticsCard />
        <ScoreCard />
    </div>
  )
}
