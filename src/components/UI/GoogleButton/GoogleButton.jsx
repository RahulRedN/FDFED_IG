import React from "react";
import { Button } from "@chakra-ui/react";
import { Loader2 } from "lucide-react";
import { Icons } from "./Icon";

const GoogleButton = ({ isLoading, onClickHandler }) => {
  return (
    <Button
      leftIcon={isLoading?<Loader2 className='mr-2 h-4 w-4 animate-spin' />:<Icons.google className="h-4 w-4 mr-2" />}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      Signin With Google
    </Button>
  );
};

export default GoogleButton;
