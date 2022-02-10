import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box 
            as="aside"
            w="64"    
            mr="8"
        >
            <Stack 
                spacing="12" 
                align="flex-start"        
            >
                <NavSection title="GENERAL">
                    <NavLink icon={RiContactsLine}>Dashboard</NavLink>
                    <NavLink icon={RiDashboardLine}>Users</NavLink>
                </NavSection>
                
                <NavSection title="AUTOMATION">
                    <NavLink icon={RiContactsLine}>Forms</NavLink>
                    <NavLink icon={RiDashboardLine}>Automation</NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}