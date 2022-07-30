import { ActionIcon, Box, Button, Center, Image, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "tabler-icons-react"
import logo from "../images/logo.png"

const Register = () => {
    const form = useForm({
        initialValues: {
            email: '',
            handphone: '',
            password: '',
            repassword: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    })

    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: 20 }}>
                <ActionIcon variant="filled" radius={"xl"} size={"lg"}
                    onClick={() => navigate('/login')}
                >
                    <ChevronLeft size={"50"} />
                </ActionIcon>
            </div>
            <Center style={{ height: '100vh' }}>
                <Box pb={70} sx={{ width: '60%' }}>
                    <Stack align={"center"} my={50}>
                        <Image width={200} src={logo} />
                    </Stack>
                    <Stack>
                        <TextInput
                            required
                            label="Alamat Email"
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            required
                            label="No Telp"
                            {...form.getInputProps("handphone")}
                        />
                        <TextInput
                            required
                            label="Password"
                            {...form.getInputProps("password")}
                        />
                        <TextInput
                            required
                            label="Ulangi Password"
                            {...form.getInputProps("repassword")}
                        />
                        <Button mt={50} radius={"xl"} size={"md"}>Sign Up</Button>
                    </Stack>
                </Box>
            </Center>
        </div>
    )
}

export default Register
