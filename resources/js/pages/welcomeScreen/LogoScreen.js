import { Box, Center, Image, Loader, Stack } from "@mantine/core"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../images/logo.png"

const LogoScreen = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000);

        setTimeout(() => {
            navigate('/about')
        }, 3000);
    }, [])

    return (
        <Center sx={(theme) => ({ height: '100vh', width: '100%', backgroundColor: theme.colors.yellow[0] })}>
            <Box sx={{ width: '100%' }} mx={70}>
                <Stack align={"center"}>
                    <Image src={logo} />
                    {loading && <Loader />}
                </Stack>
            </Box>

        </Center>
    )
}

export default LogoScreen
