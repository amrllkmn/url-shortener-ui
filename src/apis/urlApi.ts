import { IUrl, IPostUrl } from "@/utils";

const baseUrl = process.env.NEXT_PUBLIC_URL_API;
class UrlApi {
  static async getUrls(): Promise<IUrl[]> {
    const response = await fetch(`${baseUrl}/urls/analytics`);
    const { data: urls } = await response.json();
    return urls;
  }

  static async postUrls(data: IPostUrl) {
    const response = await fetch(`${baseUrl}/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await response.json();
    return resp;
  }
}

export default UrlApi;
