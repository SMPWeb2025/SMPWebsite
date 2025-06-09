import { TabNav } from "@radix-ui/themes"
import { useLocation, Link } from "react-router-dom"

function TabNavigator({ tabItems }) {
    const { pathname } = useLocation();
    return (
        <TabNav.Root size="1">
            {tabItems.map((item) => (
                <TabNav.Link key={item} asChild active={pathname === item.toLocaleLowerCase().trim().replace(" ", "")}>
                    <Link href={item.toLocaleLowerCase().trim().replace(" ", "")}>{item}</Link>
                </TabNav.Link>
            ))}


        </TabNav.Root>

    )
}

export default TabNavigator

