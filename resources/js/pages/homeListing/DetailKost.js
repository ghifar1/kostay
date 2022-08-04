import { Carousel } from "@mantine/carousel"
import { ActionIcon, Box, Button, Center, Divider, Drawer, Grid, Group, Image, ScrollArea, SegmentedControl, Select, Skeleton, Stack, Tabs, Text, TextInput } from "@mantine/core"
import { useNavigate, useParams } from "react-router-dom"
import { ChevronLeft, MapPin, Man, Star, Message, Minus, Plus, Woman, GenderBigender, ChevronRight } from "tabler-icons-react"
import { Rating } from 'react-simple-star-rating'
import kamar from "../../images/kamar.png"
import { useEffect, useState } from "react"
import { DatePicker } from "@mantine/dates"
import dayjs from "dayjs"
import axios from "axios"
import { api_url, base_url } from "../../static/api_url"

const SewaDrawer = ({ open, setOpen }) => {
    const navigate = useNavigate()

    return (
        <Drawer
            position="bottom"
            opened={open}
            withCloseButton={false}
            onClose={() => setOpen(false)}
            size="full"
            padding={10}
            styles={(theme) => ({
                drawer: {
                    backgroundColor: theme.colors.cyan[9]

                }
            })}
        >
            <Text sx={(theme) => ({ color: '#FEF6E3' })} align="center" size={"xl"} weight={"600"}>Sewa</Text>
            <Box mt={20} sx={(theme) => ({ backgroundColor: theme.colors.yellow[0], borderTopLeftRadius: 50, borderTopRightRadius: 50, height: '100%' })}>
                <Text size={"xl"} weight={"500"} py={10} sx={(theme) => ({ color: theme.colors.cyan[9] })} align="center">Pembayaran</Text>
                <Divider />
                <Stack sx={(theme) => ({ color: theme.colors.cyan[9] })} align={"center"} justify={"center"} my={10} >
                    <Image src={kamar} radius={"lg"} width={170} />
                    <Stack spacing={1} align={"center"}>
                        <Text size={"xl"} weight={"500"} >Kost Mang Udin</Text>
                        <Group spacing={2}>
                            <MapPin color="#0B7285" />
                            <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"400"} >Mampang</Text>
                        </Group>
                    </Stack>
                </Stack>
                <Box mx={20}>
                    <Grid>
                        <Grid.Col span={6}>
                            <DatePicker label="Mulai sewa" minDate={dayjs(new Date()).toDate()} radius={"xl"} placeholder="Pilih tanggal" />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Stack spacing={2} sx={{ width: '100%', height: '100%' }} justify={"center"} align={"center"}>
                                <Text weight={"500"} size={"sm"}>Masa Sewa</Text>
                                <Group>
                                    <ActionIcon><Minus /></ActionIcon>
                                    <Text>1</Text>
                                    <ActionIcon><Plus /></ActionIcon>
                                </Group>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Select
                                label="Siklus pembayaran"
                                placeholder="bulanan"
                                data={[
                                    { value: '0', label: 'Harian' },
                                    { value: '1', label: 'Bulanan (1 bulan)' },
                                    { value: '3', label: 'Triwulan (3 bulan)' },
                                    { value: '6', label: 'Semester (6 bulan)' },
                                    { value: '12', label: 'tahunan (12 bulan)' },
                                ]}
                                radius={"xl"}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Stack spacing={2} align={"center"} justify={"center"}>
                                <Text weight={"500"} size={"sm"}>Pembayaran</Text>
                                <SegmentedControl
                                    radius={"lg"}
                                    color={"cyan"}
                                    data={[
                                        { value: 'tunai', label: 'Tunai' },
                                        { value: 'paylater', label: 'Paylater' },
                                    ]}
                                />
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Group position="apart">
                                <Text weight={"500"} size={"sm"}>Metode Pembayaran</Text>
                                <Group align={"center"}>
                                    <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} size={"md"} weight={"600"} >OVO </Text><ChevronRight />
                                </Group>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Group position="apart">
                                <Text weight={"500"}>Total</Text>
                                <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} size={"xl"} weight={"600"} >Rp. 1,500,000</Text>
                            </Group>
                        </Grid.Col>
                    </Grid>
                    <Divider size={"md"} my={15} />
                    <Stack sx={(theme) => ({ color: theme.colors.cyan[9] })} spacing={2}>
                        <Text size={"sm"}>Saldo Anda</Text>
                        <Group>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" width={30} />
                            <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} size={"xl"} weight={"600"} >Rp. 1,500,000</Text>
                        </Group>
                    </Stack>
                    <Button fullWidth size="lg" radius={"xl"} my={20} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}
                        onClick={() => navigate('/u/transaction/success')}
                    >Bayar</Button>
                </Box>
            </Box>

            <div style={{ position: 'absolute', left: 20, top: 20 }}>
                <ActionIcon sx={(theme) => ({ backgroundColor: theme.colors.gray[0], color: theme.colors.cyan[9] })} variant="filled" radius={"xl"} size={"lg"}
                    onClick={() => setOpen(false)}
                >
                    <ChevronLeft size={"50"} />
                </ActionIcon>
            </div>
        </Drawer>
    )
}

const DetailKost = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)
    const [kost, setKos] = useState({
        id: 0,
        name: '',
        position: '',
        details: '',
        feedback: [],
        photos: [],
        available_rent: "",
        facilities: "",
        minimum_rent: "",
        price: "",
        price_display: "",
        gender: "",
        address: "",
    })
    const [starSum, setStarSum] = useState(0)
    const [starCount, setStarCount] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        let star_sum = 0;
        let star_count = 0;
        kost.feedback?.forEach((data) => {
            star_count++;
            star_sum += data?.stars
        })

        setStarSum(star_sum)
        setStarCount(star_count)
    }, [kost])

    useEffect(() => {
        axios.get(api_url + "/kost/" + id)
            .then((res) => {
                console.log(res.data)
                setKos(res.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }, [])

    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <Box style={{ position: 'relative', height: '100vh' }}>
            <SewaDrawer open={open} setOpen={setOpen} />
            {kost.photos.length == 0 && (
                <Skeleton height={'20%'} />
            )}
            {kost.photos.length > 0 && (
                <Carousel slideSize="75%" align={"start"} height={250} slideGap="md" withControls={false}>
                    {kost.photos.map((photo, key) => (
                        <Carousel.Slide key={key}>
                            <Image src={`${base_url}/images/${photo?.image_name}`} />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            )}
            <Box mx={40} mt={20} sx={(theme) => ({ color: theme.colors.cyan[9] })} >
                <Group position="apart" spacing={0}>
                    <Stack spacing={2}>
                        <Text size={"xl"} weight={"500"}>{kost.name}</Text>
                        <Group spacing={2}>
                            <MapPin color="#0B7285" />
                            <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} >{kost.position}</Text>
                        </Group>
                        <Group align={"center"} spacing={1}>
                            <Star color="#0B7285" size={18} />
                            <Text>{(starSum / starCount).toFixed(1)}</Text>
                        </Group>
                    </Stack>
                    <Stack align={"end"} spacing={2}>
                        <Stack spacing={0}>

                            <Stack align={"center"}>
                                {kost.gender == "man" && <Man color="#0B7285" size={20} />}
                                {kost.gender == "woman" && <Woman color="#0B7285" size={20} />}
                                {kost.gender == "unisex" && <GenderBigender color="#0B7285" size={20} />}
                            </Stack>
                            <Text align="center">
                                {kost.gender == "man" && "Putra"}
                                {kost.gender == "woman" && "Putri"}
                                {kost.gender == "unisex" && "Campur"}
                            </Text>
                        </Stack>
                        <Text sx={(theme) => ({ color: theme.colors.yellow[5] })} size={"xs"}>Tersedia 3 kamar</Text>

                    </Stack>
                </Group>
                <Tabs color={"cyan"} defaultValue={"detail"}>
                    <Tabs.List grow>
                        <Tabs.Tab value="detail">Detail</Tabs.Tab>
                        <Tabs.Tab value="penilaian">Penilaian</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="detail" pt={"xs"}>
                        <ScrollArea style={{ height: 300 }} type="scroll" scrollbarSize={8}>
                            {kost.details == "" && (
                                <Stack spacing={10}>
                                    <Skeleton height={12} />
                                    <Skeleton height={12} />
                                    <Skeleton height={12} />
                                    <Skeleton height={12} />
                                </Stack>
                            )}
                            <Text>
                                {kost.details}
                            </Text>
                        </ScrollArea>
                    </Tabs.Panel>
                    <Tabs.Panel value="penilaian" pt={"xs"}>
                        <ScrollArea style={{ height: 300 }} type="scroll" scrollbarSize={8}>
                            <Stack>
                                {kost.feedback.length > 0 && kost.feedback?.map((data, key) => (
                                    <Stack spacing={2} key={key}>
                                        <Group position="apart">
                                            <Text weight={"500"}>{data.name}</Text>
                                            <Rating key={key} size={20} fillColor="#0B7285" initialValue={data.stars} readonly />
                                        </Group>
                                        <Text>{data.feedback}</Text>
                                    </Stack>
                                ))}

                            </Stack>
                        </ScrollArea>
                    </Tabs.Panel>
                </Tabs>
            </Box>

            <div style={{ position: 'absolute', left: 20, top: 20 }}>
                <ActionIcon sx={(theme) => ({ backgroundColor: theme.colors.gray[0], color: theme.colors.cyan[9] })} variant="filled" radius={"xl"} size={"lg"}
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft size={"50"} />
                </ActionIcon>
            </div>
            <Box sx={(theme) => ({
                position: 'absolute', width: '100%', height: '27%',
                bottom: 0, backgroundColor: theme.colors.gray[3],
                color: theme.colors.cyan[9], borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
            })}>
                <Box mx={40} mt={15}>
                    <Stack align={"center"}>
                        <Group spacing={5} sx={(theme) => ({ backgroundColor: 'white', borderRadius: 20 })} px={20} py={5}>
                            <MapPin color="#0B7285" />
                            {kost.address == "" && <Skeleton height={8} width={150} />}
                            <Text weight={"500"}>{kost.address}</Text>
                        </Group>
                    </Stack>
                    <Group position="apart" my={"md"}>
                        <Text>Diupdate 20 hari yang lalu</Text>
                        <ActionIcon sx={(theme) => ({ color: theme.colors.cyan[9], })} size={"xl"}
                            onClick={() => navigate('/u/chat')}
                        ><Message size={"35"} /></ActionIcon>
                    </Group>

                </Box>
                <Divider size={"md"} />
                <Box mx={40} mt={20}>
                    <Grid position="apart">
                        <Grid.Col span={8}>
                            <Center sx={{ height: '100%' }}>
                                <Text size={"lg"} weight={"600"}>{formatter.format(kost.price)}/{kost.price_display}</Text>
                            </Center>
                        </Grid.Col>
                        <Grid.Col span={4}><Button onClick={() => setOpen(true)} size="lg" radius={"lg"} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}>Sewa</Button></Grid.Col>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailKost
