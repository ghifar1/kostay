import { Box, Button, Center, Image, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    })
    const navigate = useNavigate()

    return (
        <Center style={{ height: '100vh', width: '100%' }}>
            <Box pb={70} sx={{ width: '60%' }}>
                <Stack align={"center"} my={50}>
                    <Image width={270} src={logo} />
                </Stack>
                <Stack>
                    <TextInput
                        required
                        label="Alamat Email/No. Tlp"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        required
                        label="Password"
                        type={"password"}
                        {...form.getInputProps('password')}
                    />
                    <Button mt={50} radius={"xl"} size={"md"} onClick={() => navigate('/u/home')}>Sign In</Button>
                </Stack>
            </Box>
            <div style={{ position: 'absolute', bottom: 50 }}>
                <Text weight={"500"}>Belum punya akun? <Text onClick={() => navigate('/register')} component="span" color={"#997B5B"}>Sign Up</Text> </Text>
            </div>
        </Center>
    )
}

export default Login
