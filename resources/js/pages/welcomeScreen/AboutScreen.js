import { Box, Button, Center, Divider, Grid, Group, Image, Stack, Text } from "@mantine/core"
import logoPutih from "../../images/logo-putih.png"
import about1 from "../../images/about1.png"
import about2 from "../../images/about2.png"
import { useNavigate } from "react-router-dom"

const AboutScreen = () => {

    const navigate = useNavigate()

    return (
        <Center sx={(theme) => ({ color: theme.white, backgroundColor: theme.colors.cyan[9], width: '100%', height: '100vh' })}>
            <Box mx={20}>
                <Stack align={"center"}>
                    <Box mx={100}>
                        <Image src={logoPutih} />
                    </Box>

                    <Text align="center">
                        Kostay adalah aplikasi pesan dan bayar kos secara online
                    </Text>
                </Stack>
                <Divider my={15} />
                <Grid>
                    <Grid.Col span={6}>
                        <Center sx={{ height: '100%' }}>
                            <Text align="center">
                                Cari kos sesuai kebutuhanmu dengan memakai fitur pencarian dan filter fasilitas
                            </Text>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image mx={15} src={about1} />
                    </Grid.Col>
                </Grid>
                <Divider my={15} />
                <Grid>
                    <Grid.Col span={6}>
                        <Image mx={15} src={about2} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center sx={{ height: '100%' }}>
                            <Text align="center">
                                Kostay menyediakan alat-alat IoT untuk memudahkanmu dalam berkegiatan sehari-hari
                            </Text>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Button onClick={() => navigate('/login')} sx={(theme) => ({ color: theme.colors.cyan[9], backgroundColor: theme.white })} size="lg" mt={100} radius={"xl"} fullWidth>Get Started</Button>
            </Box>
        </Center>
    )
}

export default AboutScreen
