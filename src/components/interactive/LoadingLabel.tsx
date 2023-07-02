import React from "react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

type LoadingLabelProps = {
    state: boolean;
    message: string;
};

function LoadingLabel({ message, state }: LoadingLabelProps) {
    return (
        <div className="flex gap-2 justify-center items-center">
            {message}
            {state && <UseAnimations size={16} animation={loading} />}
        </div>
    );
}

export default LoadingLabel;
