import { router } from 'expo-router';

type FeedbackParams = {
  title?: string;
  message?: string;
  redirect?: string;
  duration?: number;
};

export function useFeedbackScreen() {
  const showSuccess = ({
    title = 'Success!',
    message = 'Action completed successfully.',
    redirect = '/dashboard',
    duration = 3000,
  }: FeedbackParams) => {
    const query = new URLSearchParams({
      title,
      message,
      redirect,
      duration: String(duration),
    });

    router.replace(`/success?${query.toString()}`);
  };

  const showError = ({
    title = 'Something went wrong',
    message = 'We couldn’t complete your request.',
    redirect = '/dashboard',
    duration = 3000,
  }: FeedbackParams) => {
    const query = new URLSearchParams({
      title,
      message,
      redirect,
      duration: String(duration),
    });

    router.replace(`/error?${query.toString()}`);
  };

  return { showSuccess, showError };
}
