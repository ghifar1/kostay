import { ActionIcon, Box, Card, Group, Stack, Switch, Tabs, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, Lamp, Leaf, Power } from "tabler-icons-react"

const KontrolKost = () => {
    const navigate = useNavigate()

    return (
        <Box style={{ height: '100vh', position: 'relative' }} p={20}>
            <Stack sx={(theme) => ({ color: theme.colors.cyan[9] })} align={"center"}>
                <Text size={"xl"} weight={"600"}>Control</Text>
                {/* <Text size={"lg"} weight={"500"}>Kost Mang Windah</Text> */}
                <Tabs color="cyan" defaultValue="1" sx={(theme) => ({width: '100%'})}>
                    <Tabs.List grow>
                        <Tabs.Tab value="1">Kosan Mang Windah</Tabs.Tab>
                        <Tabs.Tab value="2">Kosan Shella</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="1" pt="xs">
                        <Stack my={25}>
                            <Card sx={(theme) => ({ backgroundColor: theme.colors.cyan[9], color: theme.white })} radius={"xl"}>
                                <Group position="apart">
                                    <Group>
                                        <Lamp />
                                        <Text>Lampu</Text>
                                    </Group>
                                    <Switch onLabel="ON" offLabel="OFF" size="lg" />
                                </Group>
                            </Card>
                            <Card sx={(theme) => ({ backgroundColor: theme.colors.cyan[9], color: theme.white })} radius={"xl"}>
                                <Group position="apart">
                                    <Group>
                                        <Leaf />
                                        <Text>AC</Text>
                                    </Group>
                                    <Switch onLabel="ON" offLabel="OFF" size="lg" />
                                </Group>
                            </Card>
                            <Card sx={(theme) => ({ backgroundColor: theme.colors.cyan[9], color: theme.white })} radius={"xl"}>
                                <Group position="apart">
                                    <Group>
                                        <Power />
                                        <Text>Listrik</Text>
                                    </Group>
                                    <Switch onLabel="ON" offLabel="OFF" size="lg" />
                                </Group>
                            </Card>
                        </Stack>
                    </Tabs.Panel>

                </Tabs>
            </Stack>

            <Box sx={(theme) => ({ position: 'absolute', left: '5%', top: '2%' })}>
                <ActionIcon onClick={() => navigate(-1)}><ChevronLeft /></ActionIcon>
            </Box>
        </Box>
    )
}

export default KontrolKost
