import { ActionIcon, Box, Card, Group, Stack, Switch, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, Lamp, Leaf, Power } from "tabler-icons-react"

const KontrolKost = () => {
    const navigate = useNavigate()

    return (
        <Box style={{ height: '100vh', position: 'relative' }} p={20}>
            <Stack sx={(theme) => ({ color: theme.colors.cyan[9] })} align={"center"}>
                <Text size={"xl"} weight={"600"}>Control</Text>
                <Text size={"lg"} weight={"500"}>Kost Mang Windah</Text>
            </Stack>
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
            <Box sx={(theme) => ({ position: 'absolute', left: '5%', top: '2%' })}>
                <ActionIcon onClick={() => navigate(-1)}><ChevronLeft /></ActionIcon>
            </Box>
        </Box>
    )
}

export default KontrolKost
