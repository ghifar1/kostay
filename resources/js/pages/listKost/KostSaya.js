import { ActionIcon, Box, Button, Card, Divider, Grid, Group, Image, Stack, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, Door, MapPin, Star } from "tabler-icons-react"
import kamar from "../../images/kamar.png"

const KostSaya = () => {
    const navigate = useNavigate()

    return (
        <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[9], height: '100vh', position: 'relative' })}>
            <Box px={20} pt={30}>
                <Stack sx={(theme) => ({ color: theme.white })} align={"center"}>
                    <Group>
                        <Door />
                        <Text align="center" size={"lg"} weight={"500"}>
                            Kost Saya
                        </Text>
                    </Group>
                </Stack>
                <Divider sx={(theme) => ({ color: theme.white })} my={12} />
                <Card onClick={() => navigate('/u/mykost/control')} radius={"lg"}>
                    <Grid>
                        <Grid.Col span={5}>
                            <Image src={kamar} radius={"lg"} />
                        </Grid.Col>
                        <Grid.Col span={7} >
                            <Stack spacing={2} sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                <Text size={"sm"} weight={"600"}>Kost Mang Windah</Text>
                                <Group spacing={4}>
                                    <MapPin size={15} color="#0B7285" />
                                    <Text size={"xs"} weight={"400"} >Mampang</Text>
                                </Group>
                                <Group align={"center"} spacing={4}>
                                    <Star color="#0B7285" size={15} />
                                    <Text size={"xs"}>4.7</Text>
                                </Group>
                            </Stack>
                            <Stack spacing={0} sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                <Text size={"lg"} weight={"600"} >Rp. 1,500,000</Text>
                                <Text size={"sm"} weight={"600"} >/bulan</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                    <Button my={7} sx={(theme) => ({ backgroundColor: theme.colors.orange[3], color: theme.black })} fullWidth radius={"lg"}>Sedang Disewa</Button>
                    <Group position="apart" sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                        <Text size={"xs"}>6 Agustus 2022 - 6 September 2022</Text>
                        <Text size={"xs"} weight={"500"}>LUNAS</Text>
                    </Group>
                </Card>
            </Box>
            <div style={{ position: 'absolute', left: 20, top: 20 }}>
                <ActionIcon sx={(theme) => ({ backgroundColor: theme.colors.gray[0], color: theme.colors.cyan[9] })} variant="filled" radius={"xl"} size={"lg"}
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft size={"50"} />
                </ActionIcon>
            </div>
            <Box sx={(theme) => ({
                position: 'absolute', bottom: 0, height: '13%', width: '100%',
                backgroundColor: theme.white,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                color: theme.colors.cyan[9]
            })}>
                <Box px={30} pt={20}>
                    <Text size={"sm"}>Saldo Anda</Text>
                    <Group spacing={7}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" width={30} />
                        <Text sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"600"} size={"lg"}>Rp. 2,400,000</Text>
                    </Group>
                </Box>
            </Box>
        </Box>
    )
}

export default KostSaya
