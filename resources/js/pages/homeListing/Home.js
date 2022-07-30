import { ActionIcon, Box, Card, Grid, Group, Image, ScrollArea, Select, Stack, Text, TextInput } from "@mantine/core"
import logo from "../../images/logo.png"
import windah from "../../images/windah.jpg"
import kamar from "../../images/kamar.png"
import { MessageDots, Door, Cpu, Search, Man, Star, MapPin } from "tabler-icons-react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    return (
        <Box sx={{ backgroundColor: '#FEF6E3', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} p={20}>
            <Stack sx={{ width: '100%' }}>
                <Group position="apart">
                    <Image src={logo} width={70} m={0} p={0} />
                    <Group>
                        <ActionIcon sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })} variant="filled" radius={"xl"}><Cpu size={50} /></ActionIcon>
                        <ActionIcon sx={(theme) => ({ color: theme.colors.cyan[9] })} size={"lg"}><MessageDots size={50} /></ActionIcon>
                    </Group>
                </Group>
                <Group position="apart">
                    <Group>
                        <Image src={windah} width={50} radius={"xl"} />
                        <Stack spacing={2}>
                            <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"600"} size={"lg"}>Bocil Kematian</Text>
                            <Group spacing={7}>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" width={30} />
                                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"500"} size={"sm"}>Rp. 2,400,000</Text>
                            </Group>
                        </Stack>
                    </Group>
                    <ActionIcon sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })} variant="filled" size={"lg"} radius={"xl"} p={3}><Door size={50} /></ActionIcon>
                </Group>
            </Stack>
        </Box>
    )
}

const Searchable = () => {

    return (
        <Box py={15}>
            <Stack>
                <TextInput
                    placeholder="Cari nama kos/lokasi"
                    rightSection={<ActionIcon><Search /></ActionIcon>}
                    mx={15}
                    radius={"xl"}
                    size={"md"}

                />
            </Stack>
        </Box>
    )
}

const CardKos = () => {
    const navigate = useNavigate()
    return (
        <Box onClick={() => navigate('/u/det')}>
            <Card sx={(theme) => ({ backgroundColor: theme.colors.gray[4] })} shadow="sm" p="sm" radius="md">
                <Card.Section>
                    <Image src={kamar} />
                </Card.Section>
                <Group position={"apart"} mt={5}>
                    <Man color="#0B7285" />
                    <Group align={"center"} spacing={1}>
                        <Star color="#0B7285" size={18} />
                        <Text>4.7</Text>
                    </Group>
                </Group>
            </Card>
            <Stack my={2} spacing={2}>
                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"500"} >Kost Mang Windah</Text>
                <Group spacing={2}>
                    <MapPin color="#0B7285" />
                    <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} >Mampang</Text>
                </Group>
                <Text size={"sm"} color="dimmed">Wifi - AC - Kasur - Meja</Text>
                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"500"}>Rp 1,500,000/bulan</Text>
            </Stack>
        </Box>
    )
}

const GridKos = () => {
    return (
        <Grid m={20}>
            <Grid.Col span={6}>
                <CardKos />
            </Grid.Col>
            <Grid.Col span={6}>
                <CardKos />
            </Grid.Col>
            <Grid.Col span={6}>
                <CardKos />
            </Grid.Col>
            <Grid.Col span={6}>
                <CardKos />
            </Grid.Col>
            <Grid.Col span={6}>
                <CardKos />
            </Grid.Col>
        </Grid>
    )
}

const Home = () => {
    return (
        <div>
            <ScrollArea style={{ height: '100vh' }} type="scroll" scrollbarSize={8}>
                <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}>
                    <Header />
                    <Searchable />
                </Box>
                <GridKos />
            </ScrollArea>

        </div>
    )
}

export default Home
