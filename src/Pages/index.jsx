import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import AboutMePage from "./AboutMePage/AboutMePage.jsx";
import TechPage from "./TechPage/TechPage.jsx"
function Page() {
    const { [routerKey]: route } = useStoreon(routerKey)

    let Component
    switch (route.match.page) {
        case "aboutme":
            Component = <AboutMePage />
            break
        case "tech":
            Component = <TechPage />
            break
        default:
            Component = <AboutMePage />
            break
    }

    return <main>{Component}</main>
}

export default Page
