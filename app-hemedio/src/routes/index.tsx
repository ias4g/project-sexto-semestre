import { NavigationContainer } from "@react-navigation/native";
import { RoutesSteps } from "./routesSteps";
import { RoutesTabs } from "./routesTabs";

export function Routes() {
    return (
        <NavigationContainer>
            <RoutesSteps />
        </NavigationContainer>
    )
}