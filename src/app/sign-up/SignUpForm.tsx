"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import { EMAIL_CHECK } from "@/helpers/regex";
import useAuth from "@/hooks/useAuth";
import { registerUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import { toast } from "sonner";

type SignUpFormInputs = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

function SignUpForm() {
    const methods = useForm<SignUpFormInputs>();
    const { setAuth } = useAuth();
    const router = useRouter();

    function onSubmit(data: SignUpFormInputs) {
        signUpMutation.mutate(data);
    }

    const signUpMutation = useMutation({
        mutationFn: (data: SignUpFormInputs) => {
            const register = registerUser(
                data.username,
                data.email,
                data.password
            );
            toast.promise(register, {
                loading: "Signing up...",
                success: "Signed up!",
                error: "Error signing up",
            });
            return register;
        },
        onSuccess: (response: AxiosResponse) => {
            console.log(response);
            setAuth({
                userId: response.data.user.id,
                token: response.data.jwt,
                username: response.data.user.username,
                email: response.data.user.email,
            });
            router.push("/shared-codes");
        },
        onError: (error: any) => {
            console.log(error);
        },
    });
    return (
        <div className="relative flex flex-col rounded-2xl items-center bg-white/80 w-5/6 xs:w-7/12 sm:w-1/2 md:w-2/5 lg:w-[32%] m-4 py-12 px-12 gap-2">
            <h1 className="text-3xl text-black font-extrabold font-cabin">
                Sign Up
            </h1>
            <FormProvider {...methods}>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <span>
                        <CustomInput
                            id="email"
                            label="Email"
                            type="text"
                            validations={{
                                required: "Email is required",
                                pattern: {
                                    value: EMAIL_CHECK,
                                    message: "Invalid email",
                                },
                            }}
                        />
                        <CustomInput
                            id="username"
                            label="Username"
                            type="text"
                            validations={{
                                required: "Username is required",
                                minLength: {
                                    value: 4,
                                    message:
                                        "Username must be at least 4 characters long",
                                },
                            }}
                        />
                        <CustomInput
                            id="password"
                            label="Password"
                            type="password"
                            validations={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters long",
                                },
                            }}
                        />
                        <CustomInput
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            validations={{
                                required: "Confirm Password is required",
                            }}
                        />
                    </span>
                    <CustomButton
                        disable={signUpMutation.isLoading}
                        theme="secondary"
                    >
                        <LoadingLabel
                            message="Sign Up"
                            state={signUpMutation.isLoading}
                        />
                    </CustomButton>
                </form>
            </FormProvider>
            <span className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-2xl -z-10 login-card hidden xs:block"></span>
        </div>
    );
}

export default SignUpForm;
