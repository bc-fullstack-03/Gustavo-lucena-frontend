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
    return localStorage.getItem("userId") as string;
}

function getUserEmail(): string {
    return localStorage.getItem("userEmail") as string;
}

export { getAuthHeader, getUserId, getUserEmail }