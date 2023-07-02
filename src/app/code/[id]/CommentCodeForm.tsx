"use client";
import Badge from "@/components/badge/Badge";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import useAuth from "@/hooks/useAuth";
import { CommentGetI, PostCommentI } from "@/models/comment";
import { StrapiResponse } from "@/models/strapiModel";
import { commentService } from "@/services/commentServices";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { Dispatch } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type CommentCodeFormInputs = {
    message: string;
};

type CommentCodeFormProps = {
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    codeLine: string;
    numberCodeLine: number;
    codeUserId: number;
    codeTitle: string;
    refetch: () => void;
};

function CommentCodeForm({
    codeTitle,
    codeUserId,
    setModalOpen,
    codeLine,
    numberCodeLine,
    refetch,
}: CommentCodeFormProps) {
    const methods = useForm<CommentCodeFormInputs>();
    const { auth } = useAuth();
    const { id } = useParams();

    const commentMutation = useMutation({
        mutationFn: (data: CommentCodeFormInputs) => {
            console.log(codeUserId, "holaiwui");
            const postComment = commentService.postComment(auth.token, {
                codeTitle,
                usernameComment: auth.username as string,
                codeUserId,
                message: data.message,
                code: Number(id),
                upvotes: [],
                downvotes: [],
                users_permissions_user: Number(auth.userId),
                codeLine,
                numberCodeLine,
            });
            toast.promise(postComment, {
                loading: "Commenting...",
                success: "Commented successfully",
                error: "Error commenting",
            });
            return postComment;
        },
        onSuccess: (response: StrapiResponse<CommentGetI>) => {
            setModalOpen(false);
            refetch();
        },
    });

    function onSubmit(data: CommentCodeFormInputs) {
        commentMutation.mutate(data);
    }

    return (
        <>
            <div className="relative flex flex-col rounded-2xl items-center bg-white/80 gap-2">
                <Badge theme="secondary" id="comment">
                    COMMENT
                </Badge>
                <p className="text-sm text-gray-400">
                    Commenting on line{" "}
                    <span className="font-bold text-gray-800">{codeLine}</span>
                </p>
                <FormProvider {...methods}>
                    <form
                        className="w-full flex flex-col gap-4"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <span>
                            <CustomInput
                                id="message"
                                rows={4}
                                label="Comment"
                                type="textarea"
                                validations={{
                                    required: "Comment is required",
                                }}
                            />
                        </span>
                        <div className="flex gap-2">
                            <CustomButton
                                disable={commentMutation.isLoading}
                                theme="secondary"
                            >
                                <LoadingLabel
                                    message="Comment"
                                    state={commentMutation.isLoading}
                                />
                            </CustomButton>
                            <CustomButton
                                disable={commentMutation.isLoading}
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </CustomButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    );
}

export default CommentCodeForm;
