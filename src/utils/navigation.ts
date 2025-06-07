import { router } from 'expo-router';

type RedirectParams = {
    title?: string;
    message?: string;
    redirect?: string;
    duration?: number;
};
  
export function redirectToSuccess(params: RedirectParams) {
    const query = new URLSearchParams({
        title: params.title ?? 'Sucesso!',
        message: params.message ?? 'Ação concluída com sucesso.',
        redirect: params.redirect ?? '/dashboard',
        duration: String(params.duration ?? 3000),
    });

    router.replace(`/success?${query.toString()}`);
}

export function redirectToError(params: RedirectParams) {
    const query = new URLSearchParams({
        title: params.title ?? 'Ops! Algo deu errado',
        message: params.message ?? 'Não conseguimos concluir sua solicitação.',
        redirect: params.redirect ?? '/dashboard',
        duration: String(params.duration ?? 3000),
    });

    router.replace(`/error?${query.toString()}`);
}
