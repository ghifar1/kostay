import { Carousel } from "@mantine/carousel"
import { ActionIcon, Box, Button, Divider, Drawer, Group, Image, ScrollArea, Stack, Tabs, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, MapPin, Man, Star, Message } from "tabler-icons-react"
import { Rating } from 'react-simple-star-rating'
import kamar from "../../images/kamar.png"
import { useState } from "react"

const SewaDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            position="bottom"
            opened={open}
            onClose={() => setOpen(false)}
            size="full"
            styles={(theme) => ({
                drawer: {
                    backgroundColor: theme.colors.cyan[9]

                }
            })}
        >
            <Text sx={(theme) => ({ color: theme.colors.cyan[0] })} align="center" size={"xl"} weight={"600"}>Sewa</Text>
            <Box mt={20} sx={(theme) => ({ backgroundColor: theme.colors.cyan[0], borderTopLeftRadius: 50, borderTopRightRadius: 50 })}>
                <Text size={"xl"} weight={"500"} py={10} sx={(theme) => ({ color: theme.colors.cyan[9] })} align="center">Pembayaran</Text>
                <Divider />
                <Stack align={"center"} justify={"center"} my={10} >
                    <Image src={kamar} radius={"lg"} width={170} />
                </Stack>
                <Text>wuwuwu</Text>
            </Box>
        </Drawer>
    )
}

const DetailKost = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <Box style={{ position: 'relative', height: '100vh' }}>
            <SewaDrawer open={open} setOpen={setOpen} />
            <Carousel slideSize="75%" align={"start"} height={250} slideGap="md" withControls={false}>
                <Carousel.Slide>
                    <Image src={kamar} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={kamar} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={kamar} />
                </Carousel.Slide>
            </Carousel>
            <Box mx={40} mt={20} sx={(theme) => ({ color: theme.colors.cyan[9] })} >
                <Group position="apart" spacing={0}>
                    <Stack spacing={2}>
                        <Text size={"xl"} weight={"500"}>Kost Mang Windah</Text>
                        <Group spacing={2}>
                            <MapPin color="#0B7285" />
                            <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} >Mampang</Text>
                        </Group>
                        <Group align={"center"} spacing={1}>
                            <Star color="#0B7285" size={18} />
                            <Text>4.7</Text>
                        </Group>
                    </Stack>
                    <Stack align={"end"} spacing={2}>
                        <Stack spacing={0}>
                            <Stack align={"center"}><Man color="#0B7285" size={20} /></Stack>
                            <Text align="center">Putra</Text>
                        </Stack>
                        <Text sx={(theme) => ({ color: theme.colors.yellow[5] })} size={"xs"}>Tersedia 3 kamar</Text>

                    </Stack>
                </Group>
                <Tabs sx={(theme) => ({ color: theme.colors.cyan[9] })} defaultValue={"detail"}>
                    <Tabs.List grow>
                        <Tabs.Tab value="detail">Detail</Tabs.Tab>
                        <Tabs.Tab value="penilaian">Penilaian</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="detail" pt={"xs"}>
                        <ScrollArea style={{ height: 300 }} type="scroll" scrollbarSize={8}>
                            <Text>
                                Luas kamar:
                                2 x 3 Meter.

                                Fasilitas:
                                WiFi, AC, kamar mandi luar, dapur bersama, kasur, lemari, meja belajar.

                                Ket: Harga belum termasuk air dan listrik.
                            </Text>
                        </ScrollArea>
                    </Tabs.Panel>
                    <Tabs.Panel value="penilaian" pt={"xs"}>
                        <ScrollArea style={{ height: 300 }} type="scroll" scrollbarSize={8}>
                            <Stack>
                                {[1, 2, 3, 4, 5].map((data) => (
                                    <Stack spacing={2} key={data}>
                                        <Group position="apart">
                                            <Text weight={"500"}>Afgan</Text>
                                            <Rating size={20} fillColor="#0B7285" ratingValue={2} readonly allowHalfIcon />
                                        </Group>
                                        <Text>Tempatnya bagus dan bersih, oke banget</Text>
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
                position: 'absolute', width: '100%', height: '25%',
                bottom: 0, backgroundColor: theme.colors.gray[3],
                color: theme.colors.cyan[9], borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
            })}>
                <Box mx={40} mt={15}>
                    <Stack align={"center"}>
                        <Group spacing={5} sx={(theme) => ({ backgroundColor: 'white', borderRadius: 20 })} px={20} py={5}>
                            <MapPin color="#0B7285" />
                            <Text weight={"500"}>Jl. Mampang Prapatan No.70</Text>
                        </Group>
                    </Stack>
                    <Group position="apart" my={"md"}>
                        <Text>Diupdate 20 hari yang lalu</Text>
                        <Message size={"35"} />
                    </Group>

                </Box>
                <Divider size={"md"} />
                <Box mx={40} mt={20}>
                    <Group position="apart">
                        <Text size={"xl"} weight={"600"}>Rp1.500.000/bulan</Text>
                        <Button onClick={() => setOpen(true)} size="lg" radius={"lg"} sx={(theme) => ({ backgroundColor: theme.colors.cyan[9] })}>Sewa</Button>
                    </Group>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailKost
