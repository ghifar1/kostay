import { ActionIcon, Box, Card, Grid, Group, Image, Stack, Text, TextInput } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, MapPin, Photo, Send } from "tabler-icons-react"
import kamar from "../../images/kamar.png"

const ChatKost = () => {
    const navigate = useNavigate();

    return (
        <Box style={{ position: 'relative', height: '100vh' }}>
            <Box mx={10} mt={10}>
                <Stack>
                    <Card shadow={"xl"} radius={"lg"}>
                        <Grid sx={(theme) => ({ color: theme.colors.cyan[9], })}>
                            <Grid.Col span={2}>
                                <ActionIcon onClick={() => navigate(-1)}><ChevronLeft /></ActionIcon>
                            </Grid.Col>
                            <Grid.Col span={10}>
                                <Stack sx={{ height: '100%' }} justify={"center"}>
                                    <Text weight={600}>Kost Mang Windah</Text>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Card>
                    <Card shadow={"xl"} radius={"lg"}>
                        <Grid sx={(theme) => ({ color: theme.colors.cyan[9], })}>
                            <Grid.Col span={4}>
                                <Image src={kamar} radius={"lg"} />
                            </Grid.Col>
                            <Grid.Col span={8} >
                                <Stack spacing={2}>
                                    <Text size={"xl"} weight={"500"}>Kost Mang Windah</Text>
                                    <Group spacing={2}>
                                        <MapPin size={20} color="#0B7285" />
                                        <Text size={"sm"} sx={(theme) => ({ color: theme.colors.cyan[9] })} weight={"400"} >Mampang</Text>
                                    </Group>
                                    <Text sx={(theme) => ({ color: theme.colors.yellow[5] })} size={"xs"}>Tersedia 3 kamar</Text>
                                </Stack>
                                <Text size={"xl"} weight={"600"}>Rp 1,500,000/bulan</Text>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Stack>
            </Box>
            <Box sx={(theme) => ({ position: 'absolute', bottom: 0, width: '100%', height: '12%', borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: theme.colors.gray[4] })} >
                <Box mx={20} my={20}>
                    <Grid>
                        <Grid.Col span={9}>
                            <TextInput radius={"lg"} placeholder="Tulis pesan..." />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Group align={"center"} spacing={3}>
                                <ActionIcon><Send /></ActionIcon>
                                <ActionIcon><Photo /></ActionIcon>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatKost
