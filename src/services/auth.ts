function getAuthHeader() {
    const token = localStorage.getItem("accessToken");

    const authHeader = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return authHeader;
}

function getUserId(): string {
    const userId = localStorage.getItem("userId") as string;
    return userId;
}

export { getAuthHeader, getUserId }