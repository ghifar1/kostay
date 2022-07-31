import { ActionIcon, Box, Button, Card, Chip, Divider, Drawer, Grid, Group, Image, ScrollArea, Select, Stack, Text, TextInput } from "@mantine/core"
import logo from "../../images/logo.png"
import windah from "../../images/windah.jpg"
import kamar from "../../images/kamar.png"
import { MessageDots, Door, Cpu, Search, Man, Star, MapPin, AdjustmentsHorizontal } from "tabler-icons-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const navigate = useNavigate()

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
                    <ActionIcon onClick={() => navigate('/u/mykost')} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })} variant="filled" size={"lg"} radius={"xl"} p={3}><Door size={50} /></ActionIcon>
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

const FilterDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            opened={open}
            onClose={() => setOpen(false)}
            padding="sm"
            size={"sm"}
            position="bottom"
            styles={(theme) => ({
                drawer: {
                    backgroundColor: "#FEF6E3"
                }
            })}
        >
            <Chip.Group position="left" multiple>
                <Chip value="1">Putra</Chip>
                <Chip value="2">Putri</Chip>
            </Chip.Group>
            <Divider size={"sm"} my={10} />
            <Chip.Group position="left" multiple>
                <Chip value="1">K. Mandi Dalam</Chip>
                <Chip value="3">AC</Chip>
                <Chip value="4">Wifi</Chip>
                <Chip value="5">Kasur</Chip>
            </Chip.Group>
        </Drawer>
    )
}

const Home = () => {
    const [filterDrawer, setFilterDrawer] = useState(false)

    return (
        <div style={{ position: 'relative' }}>
            <ScrollArea style={{ height: '100vh' }} type="scroll" scrollbarSize={8}>
                <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}>
                    <Header />
                    <Searchable />
                </Box>
                <GridKos />
            </ScrollArea>
            <Box style={{ position: 'absolute', bottom: '5%' }}>
                <Box mx={20}>
                    <Button onClick={() => setFilterDrawer(true)} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })} size="xs" leftIcon={<AdjustmentsHorizontal />} radius={"xl"} >Filter</Button>
                </Box>
            </Box>
            <FilterDrawer open={filterDrawer} setOpen={setFilterDrawer} />
        </div>
    )
}

export default Home
