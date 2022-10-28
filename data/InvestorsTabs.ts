import { routes } from "../routes/routes";
import { TabType } from "../types/tabsTypes";

export const InvestorsTabs: TabType[] = [
    {
        name: "Investor Information",
        link: routes.investorInformation
    },
    {
        name: "Markets",
        link: routes.markets
    },
    {
        name: "Press Releases",
        link: routes.latestNewReleases
    },
    {
        name: "Technical Reports",
        link: routes.technicalReports
    },
    {
        name: "Financials",
        link: routes.financial
    }
]