import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IconoirProvider, EyeEmpty, EyeOff } from "iconoir-react";
import ErrorMessage from "./ErrorMessage";
import Select from "react-select";
import { options } from "./data";

type MainInputProps = {
    id: string;
    label: string;
    rows?: number;
    type?: "text" | "password" | "textarea" | "multiselect";
    value?: string;
    disabled?: boolean;
    validations?: {
        minLength?: {
            value: number;
            message: string;
        };
        maxLength?: {
            value: number;
            message: string;
        };
        required?: string;
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
};

type InputProps = {
    id: string;
    rows?: number;
    disabled?: boolean;
    validations?: {
        required?: string;
        minLength?: {
            value: number;
            message: string;
        };
        maxLength?: {
            value: number;
            message: string;
        };
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
    type?: "text" | "password" | "textarea" | "multiselect";
    value?: string;
};

function Input({
    id,
    label,
    type = "text",
    validations,
    value = "",
    rows = 10,
    disabled = false,
}: MainInputProps) {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <div className="flex flex-col gap-1">
            <label className="font-lato" htmlFor={id}>
                {label}
            </label>
            {type === "password" ? (
                <PasswordInput
                    id={id}
                    validations={validations}
                    disabled={disabled}
                />
            ) : type === "textarea" ? (
                <AreaInput rows={rows} id={id} validations={validations} />
            ) : type === "multiselect" ? (
                <SelectInput id={id} />
            ) : (
                <TextInput
                    id={id}
                    validations={validations}
                    value={value}
                    type={type}
                    disabled={disabled}
                />
            )}
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

function AreaInput({ id, validations, rows = 10 }: InputProps) {
    const { register } = useFormContext();
    return (
        <textarea
            className="border border-secondaryDark rounded-3xl p-3 font-lato"
            // name={id}
            id={id}
            cols={40}
            rows={rows}
            // value={value}
            {...register(id, validations)}
            // placeholder={inside}
            // onChange={(e) => {
            //     setChanged(true);
            //     setValue(e.target.value);
            // }}
        ></textarea>
    );
}

function SelectInput({ id, validations }: InputProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <div>
            <Controller
                name={id}
                control={control}
                rules={validations}
                render={({ field }) => (
                    <Select
                        {...field}
                        // isMulti
                        options={options}
                        value={field.value}
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderColor: "black",
                                borderWidth: "1px",
                                fontFamily: "Lato",
                                borderRadius: "1.5rem",
                            }),
                        }}
                        // onChange={(selectedOption) =>
                        //     field.onChange(selectedOption.value)
                        // }
                    />
                )}
            />
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

function TextInput({ id, validations, value, type, disabled }: InputProps) {
    const { register } = useFormContext();
    return (
        <input
            disabled={disabled}
            className="border border-secondaryDark rounded-full py-2 px-3 font-lato"
            type={type}
            {...register(id, validations)}
            defaultValue={value}
            // value={value}
        />
    );
}

function PasswordInput({ id, validations, disabled }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { register, watch } = useFormContext();
    return (
        <div className="flex">
            <input
                disabled={disabled}
                className="font-lato w-full rounded-s-full border-t border-l border-b border-secondaryDark border-collapse py-2 px-3"
                type={showPassword ? "text" : "password"}
                {...register(id, {
                    ...validations,
                    validate: (val: string) => {
                        if (
                            id === "confirmPassword" &&
                            watch("password") != val
                        ) {
                            return "Your passwords do not match";
                        }
                    },
                })}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-2 bg-white grid place-items-center border-t border-r border-b border-secondaryDark rounded-r-full"
            >
                <IconoirProvider>
                    {showPassword ? <EyeEmpty /> : <EyeOff />}
                </IconoirProvider>
            </button>
        </div>
    );
}

export default Input;
