import { routes } from "../routes/routes";
import { TabType } from "../types/tabsTypes";

export const ProjectTabs: TabType[] = [
    {
        name: "View Projects",
        link: routes.projects
    },
    {
        name: "Teels Marsh",
        link: routes.teelsMarsh
    },
    {
        name: "Alkali Lake",
        link: routes.alkaliLake
    },
    {
        name: "Guayatoyoc",
        link: routes.guayatoyoc
    },
    {
        name: "Fox Creek",
        link: routes.foxCreek
    }
]