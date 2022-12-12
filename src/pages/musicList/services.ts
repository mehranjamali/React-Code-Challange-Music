import httpService from "../../services/httpService"


export async function fetchAllMusic() {
    const { data } = await httpService.get("http://localhost:4000/data")
    return data
}