import { createRouter } from "@storeon/router"

export default createRouter([
    ["/AboutMePage", () => ({ page: "aboutme" })],
    ["/TechPage", () => ({ page: "tech" })],
])
