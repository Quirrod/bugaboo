"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import useAuth from "@/hooks/useAuth";
import { loginUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFormInputs = {
    username: string;
    password: string;
};

function LoginForm() {
    const methods = useForm<LoginFormInputs>();
    const router = useRouter();
    const { setAuth } = useAuth();

    const loginMutation = useMutation({
        mutationFn: (data: LoginFormInputs) => {
            const login = loginUser(data.username, data.password);
            toast.promise(login, {
                loading: "Logging in...",
                success: "Logged in successfully",
                error: "Invalid username or password",
            });
            return login;
        },
        onSuccess: (response: AxiosResponse) => {
            setAuth({
                userId: response.data.user.id,
                token: response.data.jwt,
                username: response.data.user.username,
                email: response.data.user.email,
            });
            router.push("/shared-codes");
        },
    });

    function onSubmit(data: LoginFormInputs) {
        loginMutation.mutate(data);
    }

    return (
        <>
            <div className="relative flex flex-col rounded-2xl items-center bg-white/80 w-5/6 xs:w-7/12 sm:w-1/2 md:w-2/5 lg:w-[32%] m-4 py-12 px-12 gap-2">
                <h1 className="text-3xl text-black font-extrabold font-cabin">
                    Login
                </h1>
                <FormProvider {...methods}>
                    <form
                        className="w-full flex flex-col gap-4"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <span>
                            <CustomInput
                                id="username"
                                label="Username"
                                type="text"
                                validations={{
                                    required: "Username is required",
                                }}
                            />
                            <CustomInput
                                id="password"
                                label="Password"
                                type="password"
                                validations={{
                                    required: "Password is required",
                                }}
                            />
                        </span>
                        <CustomButton
                            disable={loginMutation.isLoading}
                            theme="secondary"
                        >
                            <LoadingLabel
                                message="Login"
                                state={loginMutation.isLoading}
                            />
                        </CustomButton>
                    </form>
                </FormProvider>
                <span className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-2xl -z-10 login-card hidden xs:block"></span>
            </div>
        </>
    );
}

export default LoginForm;
