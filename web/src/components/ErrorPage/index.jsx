import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const ErrorPage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-2">
      <Card className="flex flex-col justify-center items-center p-8 shadow-lg border-0 rounded-3xl max-w-[500px] text-center">
        <h1 className="text-3xl text-red-500 mb-2">
          Oops! Something went wrong.
        </h1>
        <p className="mb-4">{message || "An unexpected error occurred."}</p>
        {onRetry && (
          <Button
            variant="default"
            color="primary"
            onClick={onRetry}
            size={"sm"}
          >
            Retry
          </Button>
        )}
      </Card>
    </div>
  );
};

export default ErrorPage;
