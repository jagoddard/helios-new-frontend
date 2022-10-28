import { routes } from "../routes/routes";
import { TabType } from "../types/tabsTypes";

export const AboutTabs: TabType[] = [
    {
        name: "Management Team",
        link: routes.managementTeam
    },
    {
        name: "Corporate Responsibility",
        link: routes.corporateRespinsibility
    }
]