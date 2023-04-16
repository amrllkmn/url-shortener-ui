import { IUrl } from "@/utils";

const baseUrl = process.env.NEXT_PUBLIC_URL_API;
class UrlApi {
  static async getUrls(): Promise<IUrl[]> {
    const response = await fetch(`${baseUrl}/analytics`);
    const { data: urls } = await response.json();
    return urls;
  }
}

export default UrlApi;
