
const getToken = () => {
    const hash: string | null = window.location.hash;
    let token: any = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];
      window.location.hash = '';
      window.localStorage.setItem("token", token);
    }

    return token;
}

export default getToken;