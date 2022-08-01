import { ActionIcon, Avatar, Box, Center, Divider, Drawer, Group, Stack, Switch, Text, UnstyledButton } from "@mantine/core"
import { History, Logout, Settings, User, X } from "tabler-icons-react"
import windah from "../../images/windah.jpg"

const Profile = ({ open, setOpen }) => {
    return (
        <Drawer
            opened={open}
            position="bottom"
            size={'100%'}
            onClose={() => setOpen(false)}
            withCloseButton={false}
            styles={(theme) => ({
                drawer: {
                    backgroundColor: 'wheat',
                }
            })}
        >
            <Center>
                <Box sx={(theme) => ({
                    width: '480px',
                    height: '100vh',
                    position: 'relative',
                    backgroundColor: theme.colors.cyan[9],
                    '@media (max-width: 600px)': {
                        width: '100%',
                        height: '100vh',
                    }
                })}>
                    <Stack pt={"15%"} align={"center"} >
                        <Avatar size={"xl"} src={windah} radius={"xl"} />
                        <Stack sx={(theme) => ({ color: theme.colors.yellow[0] })} align={"center"} spacing={0}>
                            <Text size={"xl"} weight={"600"} >Bocil Kematian</Text>
                            <Text size={"sm"}>bocil.kematian@gmail.com</Text>
                        </Stack>
                        <Group sx={(theme) => ({ color: theme.colors.yellow[0], width: '100%' })} px={25} spacing={0} position="apart">
                            <Stack spacing={2} align="center">
                                <Text size={"xl"}>Rp. 2,400,000</Text>
                                <Text>Saldo</Text>
                            </Stack>
                            <Divider orientation="vertical" sx={{ height: '50px' }} size={"md"} />
                            <Stack spacing={2} align="center">
                                <Text size={"xl"}>Rp. 1,500,000</Text>
                                <Text>Tagihan</Text>
                            </Stack>
                        </Group>
                    </Stack>
                    <Box sx={(theme) => ({
                        backgroundColor: theme.colors.yellow[0], marginTop: 25, height: '100%',
                        borderTopLeftRadius: 50, borderTopRightRadius: 50,
                        color: theme.colors.cyan[9],
                    })} >
                        <Box pt={30} px={20}>
                            <Text align="center" size={"xl"} weight={"600"} >
                                Consumer
                            </Text>
                            <Box>
                                <Divider sx={(theme) => ({ borderColor: theme.colors.cyan[9] })} size={"sm"} my={10} />
                            </Box>
                            <Stack>
                                <UnstyledButton>
                                    <Group sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                        <User />
                                        <Text weight={"500"} size="lg">
                                            Profile
                                        </Text>
                                    </Group>
                                </UnstyledButton>
                                <UnstyledButton>
                                    <Group sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                        <History />
                                        <Text weight={"500"} size="lg">
                                            Riwayat Pemesanan
                                        </Text>
                                    </Group>
                                </UnstyledButton>
                                <UnstyledButton>
                                    <Group sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                        <Settings />
                                        <Text weight={"500"} size="lg">
                                            Pengaturan
                                        </Text>
                                    </Group>
                                </UnstyledButton>
                            </Stack>

                        </Box>

                    </Box>
                    <Box sx={(theme) => ({
                        top: '3%',
                        right: '3%',
                        position: 'absolute',
                    })}>
                        <ActionIcon onClick={() => setOpen(false)} sx={(theme) => ({ color: theme.colors.yellow[0] })} size={"xl"}><X size={50} /></ActionIcon>
                    </Box>
                    <Box sx={(theme) => ({
                        backgroundColor: theme.colors.yellow[0],
                        bottom: '20%',
                        width: '100%',
                        position: 'absolute',
                        color: theme.colors.cyan[9]
                    })} >
                        <Box px={20}>
                            <UnstyledButton>
                                <Group sx={(theme) => ({ color: theme.colors.cyan[9] })}>
                                    <Logout />
                                    <Text weight={"500"} size="lg">
                                        Log Out
                                    </Text>
                                </Group>
                            </UnstyledButton>
                            <Divider sx={(theme) => ({ borderColor: theme.colors.cyan[9] })} size={"sm"} my={10} />
                            <Group position="apart">
                                <Text weight={"500"} size="lg">
                                    Ubah ke Provider
                                </Text>
                                <Switch size="lg" disabled />
                            </Group>
                        </Box>

                    </Box>
                </Box>
            </Center>
        </Drawer >
    )
}

export default Profile
