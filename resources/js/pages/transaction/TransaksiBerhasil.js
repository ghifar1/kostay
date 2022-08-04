import { ActionIcon, Box, Button, Center, Group, Stack, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { Check, CircleCheck, Door } from "tabler-icons-react"

const TransaksiBerhasil = () => {
    const navigate = useNavigate();
    return (
        <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[9], color: theme.colors.cyan[0], width: '100%', height: '100vh', position: 'relative' })}>
            <Center sx={{ height: '100%' }}>
                <Stack align={"center"} justify={"center"}>
                    <CircleCheck size={60} />
                    <Text>Pembayaran Berhasil</Text>
                </Stack>
            </Center>
            <Box sx={(theme) => ({ position: 'absolute', bottom: '5%', width: '100%' })}>
                <Box mx={20}>
                    <Group position="apart">
                        <ActionIcon onClick={() => navigate('/u/mykost')} sx={(theme) => ({color: theme.white})} size={"xl"}><Door size={70}/></ActionIcon>
                        <Button radius={"xl"} sx={(theme) => ({ backgroundColor: theme.colors.cyan[0], color: theme.colors.cyan[9], })}
                            onClick={() => navigate('/u/home')}
                        >Selesai</Button>
                    </Group>
                </Box>
            </Box>
        </Box>
    )
}

export default TransaksiBerhasil
