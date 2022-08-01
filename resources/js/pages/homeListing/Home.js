import { ActionIcon, Box, Button, Card, Center, Chip, Divider, Drawer, Grid, Group, Image, Loader, ScrollArea, Select, Stack, Text, TextInput } from "@mantine/core"
import logo from "../../images/logo.png"
import windah from "../../images/windah.jpg"
import kamar from "../../images/kamar.png"
import { MessageDots, Door, Cpu, Search, Man, Star, MapPin, AdjustmentsHorizontal, Woman, GenderBigender } from "tabler-icons-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { api_url, base_url } from "../../static/api_url"
import Profile from "../user/Profile"

const Header = () => {
    const navigate = useNavigate()
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <Box sx={{ backgroundColor: '#FEF6E3', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} p={20}>
            <Stack sx={{ width: '100%' }}>
                <Group position="apart">
                    <Image src={logo} width={70} m={0} p={0} />
                    <Group>
                        <ActionIcon onClick={() => navigate('/u/mykost/control')} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })} variant="filled" radius={"xl"}><Cpu size={50} /></ActionIcon>
                        <ActionIcon sx={(theme) => ({ color: theme.colors.cyan[9] })} size={"lg"}><MessageDots size={50} /></ActionIcon>
                    </Group>
                </Group>
                <Group position="apart">
                    <Group>
                        <Image src={windah} width={50} radius={"xl"} onClick={() => setProfileOpen(true)} />
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
            <Profile open={profileOpen} setOpen={setProfileOpen} />
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

const CardKos = ({ id, name, location, facilities, gender, price, price_display, photos, feedback }) => {
    const navigate = useNavigate()
    const facility = facilities.split(",")
    const [starSum, setStarSum] = useState(0)
    const [starCount, setStarCount] = useState(0)

    useEffect(() => {
        let star_sum = 0;
        let star_count = 0;
        feedback?.forEach((data) => {
            star_count++;
            star_sum += data?.stars
        })

        setStarSum(star_sum)
        setStarCount(star_count)
    }, [])

    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <Box onClick={() => navigate('/u/det/' + id)}>
            <Card sx={(theme) => ({ backgroundColor: theme.colors.gray[4] })} shadow="sm" p="sm" radius="md">
                <Card.Section>
                    <Image src={`${base_url}/images/${photos[0]?.image_name}`} />
                </Card.Section>
                <Group position={"apart"} mt={5}>
                    {gender == "man" && <Man color="#0B7285" />}
                    {gender == "woman" && <Woman color="#0B7285" />}
                    {gender == "unisex" && <GenderBigender color="#0B7285" />}
                    <Group align={"center"} spacing={1}>
                        <Star color="#0B7285" size={18} />
                        <Text>{(starSum / starCount).toFixed(1)}</Text>
                    </Group>
                </Group>
            </Card>
            <Stack my={2} spacing={2}>
                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"500"} >{name}</Text>
                <Group spacing={2}>
                    <MapPin color="#0B7285" />
                    <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} >{location}</Text>
                </Group>
                <Text size={"sm"} color="dimmed">{facility.map((teks, idx) => (
                    `${teks} ${idx != (facility.length - 1) ? " - " : ""}`
                ))}</Text>
                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"500"}>{formatter.format(price)}/{price_display}</Text>
            </Stack>
        </Box>
    )
}

const GridKos = ({ data }) => {
    return (
        <>
            {data?.length == 0 && (
                <Center sx={{ height: '50vh', width: '100%' }}>
                    <Loader />
                </Center>
            )}
            {data?.length > 0 && (
                <Grid m={20}>
                    {data?.map((kos, key) => (
                        <Grid.Col key={key} span={6}>
                            <CardKos
                                id={kos?.id}
                                name={kos?.name}
                                location={kos?.position}
                                facilities={kos?.facilities}
                                photos={kos?.photos}
                                gender={kos?.gender}
                                price={kos?.price}
                                price_display={kos?.price_display}
                                feedback={kos?.feedback}
                            />
                        </Grid.Col>
                    ))}
                </Grid>
            )}
        </>
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
    const [kost, setKost] = useState([])

    useEffect(() => {
        axios.get(api_url + "/kost")
            .then((res) => {
                console.log(res.data)
                setKost(res.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }, [])

    return (
        <div style={{ position: 'relative' }}>
            <ScrollArea style={{ height: '100vh' }} type="scroll" scrollbarSize={8}>
                <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}>
                    <Header />
                    <Searchable />
                </Box>
                <GridKos data={kost} />
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
