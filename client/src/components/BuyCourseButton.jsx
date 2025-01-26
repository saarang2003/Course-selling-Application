import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function BuyCourseButton() {
  const [createCheckoutSession, {data , isSuccess , isError ,isLoading, error }] =
    useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession(courseId);
};

    useEffect(() =>{
        if(!isSuccess){
            if(data?.url){
                window.location.href = data.url;  // redirect to stripe checkout 
            }else{
                toast.error('invalid response from server')
            }
        }
        if(isError){
            toast.error(error?.data?.message || "Failed to create checkout ")
        }
    } , [data , isSuccess , isError , error])

  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={purchaseCourseHandler}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Purchase Course"
        )}
      </Button>
    </div>
  );
}

export default BuyCourseButton;
