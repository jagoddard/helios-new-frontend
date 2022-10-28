import { routes } from "../routes/routes";
import { TabType } from "../types/tabsTypes";

export const LithiumTabs: TabType[] = [
    {
        name: "The Lithium Market",
        link: routes.theLithiumMarket
    },
    {
        name: "Supply & Demand",
        link: routes.supplyAndDemand
    },
    {
        name: "Lithium Products",
        link: routes.lithiumProducts
    },
    {
        name: "Global Lithium Reserves",
        link: routes.globalLithiumReserves
    },
    {
        name: "Lithium Articles",
        link: routes.lithiumArticles
    },
    {
        name: "Video Gallery",
        link: routes.videoGallery
    },
    {
        name: "Lithium: Technology",
        link: routes.lithiumTechnology
    },
    {
        name: "Lithium Revolution",
        link: routes.lithiumRevolution
    }
]